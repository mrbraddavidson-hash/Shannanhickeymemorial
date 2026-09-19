# Shannan Hickey Memorial Website

Production project for **https://shannanhickeymemorial.com** on Cloudflare Workers.

## Current production state

See `PROJECT-STATUS.txt` first. It records the live Worker/domain/email/Turnstile state and the one remaining email handoff task for Joe.

## Included

- Full memorial website and image/logo assets.
- Mobile homepage spacing fix so content begins below the mobile header.
- Shannan wings logo used as the browser tab/favicon icon.
- Corrected Cloudflare www redirect configuration documented in `WWW-REDIRECT-FIX-2026-08-26.txt`.
- Cloudflare Workers deployment scripts.
- Secure contact/registration form handled server-side by the Worker.
- Cloudflare Turnstile with mandatory server-side verification.
- Worker rate limiting and honeypot spam protection.
- Server-side validation, length limits, and HTML escaping.
- Cloudflare `send_email` binding restricted to the verified `FORM_RECIPIENT` destination.
- Visitor email used only as `Reply-To`.
- Private destination inbox and Turnstile values stored as Cloudflare Worker secrets.
- No form submissions stored in a website database.

## Windows deployment/update

First deployment:

1. Install Node.js 22.13 or newer.
2. Double-click `DEPLOY-CLOUDFLARE.bat`.
3. Approve Wrangler/Cloudflare login if requested.
4. Attach `shannanhickeymemorial.com` to the Worker if this is a brand-new Worker.
5. Configure Email Routing and Turnstile.
6. Run `SETUP-SECURE-FORMS.bat`.
7. Submit a real test form.

For normal future website changes, use:

`UPDATE-CLOUDFLARE.bat`

Cloudflare Worker secrets survive normal deployments and should never be copied into this project.

## Security test

After dependencies are installed:

```bash
npm test
```

## Important

Never put private inbox credentials, Turnstile secret keys, passwords, or API keys in `app/`, `public/`, `worker/`, documentation, Git, or screenshots.
