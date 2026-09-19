import fs from "node:fs";
import path from "node:path";

const file = path.resolve("dist/server/wrangler.json");
if (!fs.existsSync(file)) {
  console.error(`Could not find generated Wrangler config: ${file}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(file, "utf8"));
// Vinext still emits this legacy field, but current Wrangler rejects it.
delete config.legacy_env;
config.send_email = [
  {
    name: "EMAIL",
    allowed_sender_addresses: ["forms@shannanhickeymemorial.com"],
  },
];
config.ratelimits = [
  {
    name: "FORM_RATE_LIMITER",
    namespace_id: "42701",
    simple: { limit: 8, period: 60 },
  },
];

fs.writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`);
console.log("Added secure form EMAIL and FORM_RATE_LIMITER bindings to production Wrangler config.");
