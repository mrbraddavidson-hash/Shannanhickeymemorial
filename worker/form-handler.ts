export interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

export interface SendEmailBinding {
  send(message: {
    to: string;
    from: string;
    subject: string;
    html?: string;
    text?: string;
    replyTo?: string;
  }): Promise<{ messageId: string }>;
}

export interface FormEnv {
  EMAIL?: SendEmailBinding;
  FORM_RATE_LIMITER?: RateLimitBinding;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  FORM_RECIPIENT?: string;
}

type InterestType = "team" | "individual" | "sponsorship" | "donation";

interface FormPayload {
  type: InterestType;
  name: string;
  email: string;
  phone: string;
  team: string;
  start: string;
  notes: string;
  website: string;
  turnstileToken: string;
}

interface TurnstileResult {
  success?: boolean;
  hostname?: string;
  action?: string;
  [key: string]: unknown;
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return [...value].filter((character) => {
    const code = character.charCodeAt(0);
    return code !== 0 && !(code >= 1 && code <= 8) && code !== 11 && code !== 12 && !(code >= 14 && code <= 31) && code !== 127;
  }).join("").trim().slice(0, max);
}

function validEmail(value: string): boolean {
  if (value.length < 5 || value.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validPhone(value: string): boolean {
  if (value.length < 7 || value.length > 30) return false;
  return /^[0-9+().\-\s]+$/.test(value);
}

export function validateFormPayload(input: unknown): { ok: true; value: FormPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") return { ok: false, error: "Invalid form data." };
  const raw = input as Record<string, unknown>;

  const allowedTypes = new Set<InterestType>(["team", "individual", "sponsorship", "donation"]);
  const type = cleanText(raw.type, 20) as InterestType;
  const name = cleanText(raw.name, 100);
  const email = cleanText(raw.email, 254).toLowerCase();
  const phone = cleanText(raw.phone, 30);
  const team = cleanText(raw.team, 120);
  const start = cleanText(raw.start, 40);
  const notes = cleanText(raw.notes, 2000);
  const website = cleanText(raw.website, 200);
  const turnstileToken = cleanText(raw.turnstileToken, 2048);

  if (!allowedTypes.has(type)) return { ok: false, error: "Please choose a registration type." };
  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!validEmail(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!validPhone(phone)) return { ok: false, error: "Please enter a valid phone number." };
  if (!turnstileToken) return { ok: false, error: "Please complete the security check." };

  return { ok: true, value: { type, name, email, phone, team, start, notes, website, turnstileToken } };
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

function typeLabel(type: InterestType): string {
  return {
    team: "Full team registration",
    individual: "Individual registration",
    sponsorship: "Sponsorship information",
    donation: "Donation information",
  }[type];
}

async function verifyTurnstile(request: Request, env: FormEnv, token: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY) return false;

  const body = new FormData();
  body.append("secret", env.TURNSTILE_SECRET_KEY);
  body.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) body.append("remoteip", ip);
  body.append("idempotency_key", crypto.randomUUID());

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!response.ok) return false;

  const result = await response.json() as TurnstileResult;
  const requestHostname = new URL(request.url).hostname;
  const hostnameMatches = result.hostname === requestHostname;
  const actionMatches = result.action === "registration";
  return result.success === true && hostnameMatches && actionMatches;
}

function emailContent(form: FormPayload, request: Request): { subject: string; text: string; html: string } {
  const label = typeLabel(form.type);
  const source = new URL(request.url).origin;
  const submittedAt = new Date().toISOString();
  const rows: Array<[string, string]> = [
    ["Request", label],
    ["Name", form.name],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Team name", form.team || "—"],
    ["Preferred start", form.start || "No preference"],
    ["Player names / notes", form.notes || "—"],
    ["Submitted", submittedAt],
    ["Website", source],
  ];

  const text = [
    "New Shannan Hickey Memorial website form submission",
    "",
    ...rows.map(([key, value]) => `${key}: ${value}`),
    "",
    `Reply directly to this email to respond to ${form.name}.`,
  ].join("\n");

  const htmlRows = rows.map(([key, value]) =>
    `<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ddd;vertical-align:top">${escapeHtml(key)}</th><td style="padding:8px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
  ).join("");

  const html = `<div style="font-family:Arial,sans-serif;color:#222;max-width:680px"><h2>New Shannan Hickey Memorial form submission</h2><table style="border-collapse:collapse;width:100%">${htmlRows}</table><p style="margin-top:20px">Reply directly to this email to respond to ${escapeHtml(form.name)}.</p></div>`;

  return {
    subject: `Memorial website: ${label} — ${form.name}`.slice(0, 180),
    text,
    html,
  };
}

export async function handleFormApi(request: Request, env: FormEnv): Promise<Response | null> {
  const url = new URL(request.url);

  if (url.pathname === "/api/form-config" && request.method === "GET") {
    return json({ turnstileSiteKey: env.TURNSTILE_SITE_KEY ?? "" });
  }

  if (url.pathname !== "/api/contact") return null;
  if (request.method !== "POST") return json({ ok: false, error: "Method not allowed." }, 405);

  const origin = request.headers.get("Origin");
  if (origin && origin !== url.origin) return json({ ok: false, error: "Request not allowed." }, 403);

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ ok: false, error: "Invalid request format." }, 415);
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > 16_384) {
    return json({ ok: false, error: "Form submission is too large." }, 413);
  }

  if (!env.EMAIL || !env.FORM_RECIPIENT || !env.TURNSTILE_SECRET_KEY || !env.TURNSTILE_SITE_KEY) {
    return json({ ok: false, error: "The secure form is temporarily unavailable. Please try again later." }, 503);
  }

  if (env.FORM_RATE_LIMITER) {
    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const userAgent = (request.headers.get("User-Agent") ?? "unknown").slice(0, 120);
    const { success } = await env.FORM_RATE_LIMITER.limit({ key: `${ip}|${userAgent}` });
    if (!success) return json({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);
  }

  let input: unknown;
  try {
    // Enforce the size limit even when Content-Length is absent.
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 16_384) {
      return json({ ok: false, error: "Form submission is too large." }, 413);
    }
    input = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, error: "Invalid form data." }, 400);
  }

  // Honeypot: legitimate visitors never fill this hidden field. Return a generic
  // success response so simple spam bots do not learn how they were detected.
  if (input && typeof input === "object" && cleanText((input as Record<string, unknown>).website, 200)) {
    return json({ ok: true });
  }

  const validated = validateFormPayload(input);
  if (!validated.ok) return json({ ok: false, error: validated.error }, 400);
  const form = validated.value;

  const turnstileValid = await verifyTurnstile(request, env, form.turnstileToken);
  if (!turnstileValid) return json({ ok: false, error: "Security check failed. Please try again." }, 400);

  const content = emailContent(form, request);

  try {
    await env.EMAIL.send({
      to: env.FORM_RECIPIENT,
      from: "forms@shannanhickeymemorial.com",
      replyTo: form.email,
      subject: content.subject,
      text: content.text,
      html: content.html,
    });
  } catch (error) {
    // Do not log the submitted form fields or visitor contact details.
    console.error("Secure form email delivery failed", error instanceof Error ? error.message : "Unknown email error");
    return json({ ok: false, error: "We could not send your message right now. Please try again shortly." }, 502);
  }

  return json({ ok: true });
}
