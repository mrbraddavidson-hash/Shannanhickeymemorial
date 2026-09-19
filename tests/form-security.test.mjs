import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

function loadHandler() {
  const source = fs.readFileSync(new URL("../worker/form-handler.ts", import.meta.url), "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
    fileName: "worker/form-handler.ts",
    reportDiagnostics: true,
  });
  const errors = (output.diagnostics ?? []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
  assert.equal(errors.length, 0, errors.map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n")).join("\n"));

  const handlerModule = { exports: {} };
  const evaluate = new Function("module", "exports", "require", output.outputText);
  evaluate(handlerModule, handlerModule.exports, require);
  return handlerModule.exports;
}

async function withFetch(fetchImpl, callback) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = fetchImpl;
  try {
    return await callback();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

const validPayload = {
  type: "team",
  name: "Test Person",
  email: "TEST@example.com",
  phone: "613 555 0123",
  team: "Test Foursome",
  start: "9:00 AM",
  notes: "Please confirm.",
  website: "",
  turnstileToken: "verified-token",
};

test("validates and normalizes fields", () => {
  const { validateFormPayload } = loadHandler();
  const result = validateFormPayload(validPayload);
  assert.equal(result.ok, true);
  assert.equal(result.value.email, "test@example.com");
  assert.equal(result.value.name, "Test Person");
});

test("rejects malformed form data", () => {
  const { validateFormPayload } = loadHandler();
  const result = validateFormPayload({ ...validPayload, email: "not-an-email" });
  assert.equal(result.ok, false);
});

test("escapes HTML before building email content", () => {
  const { escapeHtml } = loadHandler();
  assert.equal(escapeHtml('<script>"&'), "&lt;script&gt;&quot;&amp;");
});

test("accepts a verified same-origin form and uses safe From / Reply-To", async () => {
  let sentMessage;
  const { handleFormApi } = loadHandler();

  const request = new Request("https://shannanhickeymemorial.com/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Origin: "https://shannanhickeymemorial.com",
      "CF-Connecting-IP": "203.0.113.10",
      "User-Agent": "test-agent",
    },
    body: JSON.stringify(validPayload),
  });

  const env = {
    TURNSTILE_SITE_KEY: "site-key",
    TURNSTILE_SECRET_KEY: "secret-key",
    FORM_RECIPIENT: "private-destination@example.com",
    FORM_SENDER: "forms@shannanhickeymemorial.com",
    FORM_RATE_LIMITER: { limit: async () => ({ success: true }) },
    EMAIL: { send: async (message) => { sentMessage = message; return { messageId: "test-message" }; } },
  };

  const response = await withFetch(
    async () => Response.json({ success: true, hostname: "shannanhickeymemorial.com", action: "registration" }),
    () => handleFormApi(request, env),
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(sentMessage.from, "forms@shannanhickeymemorial.com");
  assert.equal(sentMessage.to, "private-destination@example.com");
  assert.equal(sentMessage.replyTo, "test@example.com");
  assert.match(sentMessage.html, /Test Person/);
});

test("rejects cross-origin browser submissions", async () => {
  const { handleFormApi } = loadHandler();
  const request = new Request("https://shannanhickeymemorial.com/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", Origin: "https://evil.example" },
    body: JSON.stringify(validPayload),
  });
  const response = await withFetch(async () => Response.json({ success: true }), () => handleFormApi(request, {}));
  assert.equal(response.status, 403);
});

test("rate limiter blocks repeated submissions", async () => {
  const { handleFormApi } = loadHandler();
  const request = new Request("https://shannanhickeymemorial.com/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", Origin: "https://shannanhickeymemorial.com" },
    body: JSON.stringify(validPayload),
  });
  const env = {
    TURNSTILE_SITE_KEY: "site-key",
    TURNSTILE_SECRET_KEY: "secret-key",
    FORM_RECIPIENT: "private-destination@example.com",
    FORM_SENDER: "forms@shannanhickeymemorial.com",
    FORM_RATE_LIMITER: { limit: async () => ({ success: false }) },
    EMAIL: { send: async () => ({ messageId: "never" }) },
  };
  const response = await withFetch(async () => Response.json({ success: true }), () => handleFormApi(request, env));
  assert.equal(response.status, 429);
});
