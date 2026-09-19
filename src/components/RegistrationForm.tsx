"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type SubmitState = "idle" | "sending" | "sent";

function ensureTurnstileScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const existing = document.querySelector<HTMLScriptElement>('script[data-shannan-turnstile="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Turnstile failed to load")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.shannanTurnstile = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile failed to load"));
    document.head.appendChild(script);
  });
}

export function RegistrationForm({showTitle=true}:{showTitle?:boolean}) {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [securityReady, setSecurityReady] = useState(false);
  const widgetElementRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setupTurnstile() {
      try {
        const [configResponse] = await Promise.all([
          fetch("/api/form-config", { cache: "no-store" }),
          ensureTurnstileScript(),
        ]);
        const config = await configResponse.json() as { turnstileSiteKey?: string };
        if (cancelled) return;
        if (!config.turnstileSiteKey) {
          setError("The secure form has not been activated yet. Please try again after setup is complete.");
          return;
        }
        if (!widgetElementRef.current || !window.turnstile) return;

        widgetIdRef.current = window.turnstile.render(widgetElementRef.current, {
          sitekey: config.turnstileSiteKey,
          action: "registration",
          theme: "light",
          size: "flexible",
          callback: (token: unknown) => {
            if (typeof token === "string") {
              setTurnstileToken(token);
              setError("");
            }
          },
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => {
            setTurnstileToken("");
            setError("The security check could not load. Please refresh the page and try again.");
          },
        });
        setSecurityReady(true);
      } catch {
        if (!cancelled) setError("The secure form is temporarily unavailable. Please refresh the page and try again.");
      }
    }

    setupTurnstile();
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current);
    };
  }, []);

  function resetSecurity() {
    setTurnstileToken("");
    if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!turnstileToken) {
      setError("Please complete the security check before submitting.");
      return;
    }

    setState("sending");
    const form = new FormData(event.currentTarget);
    const payload = {
      type: String(form.get("type") ?? ""),
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      team: String(form.get("team") ?? ""),
      start: String(form.get("start") ?? ""),
      notes: String(form.get("notes") ?? ""),
      website: String(form.get("website") ?? ""),
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "We could not send your message.");
      setState("sent");
    } catch (submitError) {
      setState("idle");
      setError(submitError instanceof Error ? submitError.message : "We could not send your message. Please try again.");
      resetSecurity();
    }
  }

  if (state === "sent") {
    return <form className="new-form" onSubmit={(event)=>event.preventDefault()}><div className="new-success" role="status"><b>Thank you.</b><p>Your message was securely sent to the tournament organizer.</p><button type="button" onClick={()=>window.location.reload()}>Send another message</button></div></form>;
  }

  return <form className="new-form" onSubmit={submit}>
    {showTitle?<div className="form-head"><span>Registration interest</span><small>No payment collected</small></div>:<div className="form-head form-head-compact"><small>No payment collected</small></div>}
    <div className="toggle">
      <label><input type="radio" name="type" value="team" defaultChecked/> Full team · $500</label>
      <label><input type="radio" name="type" value="individual"/> Individual · $125</label>
      <label><input type="radio" name="type" value="sponsorship"/> Sponsorship info</label>
      <label><input type="radio" name="type" value="donation"/> Donate</label>
    </div>
    <div className="fields">
      <label>Name<input required maxLength={100} autoComplete="name" name="name" placeholder="Your full name"/></label>
      <label>Email<input required maxLength={254} autoComplete="email" type="email" name="email" placeholder="you@example.com"/></label>
      <label>Phone<input required maxLength={30} autoComplete="tel" type="tel" name="phone" placeholder="(613) 555-0123"/></label>
      <label>Team name<input maxLength={120} name="team" placeholder="Optional"/></label>
    </div>
    <label>Preferred start<select name="start"><option>No preference</option><option>9:00 AM</option><option>1:30 PM</option></select></label>
    <label>Player names or notes<textarea maxLength={2000} name="notes" rows={3} placeholder="Add your foursome or anything we should know"/></label>

    <div className="form-honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" name="website"/></label></div>
    <div className="form-security">
      <div ref={widgetElementRef} className="turnstile-slot"/>
      <small>Protected by Cloudflare Turnstile. Your information is emailed directly to the tournament organizer and is not stored in a website database.</small>
    </div>
    {error && <div className="form-error" role="alert">{error}</div>}
    <button className="primary-action" type="submit" disabled={state === "sending" || !securityReady || !turnstileToken}>{state === "sending" ? "Sending…" : "Submit interest"} <span>→</span></button>
  </form>;
}
