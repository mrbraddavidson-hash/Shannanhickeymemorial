"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { eventHasPassed } from "../data/event";

const links = [
  ["Home", "/"],
  ["About Shannan", "/about"],
  ["Tournament Info", "/tournament"],
  ["Three Oaks", "/three-oaks"],
  ["Sponsors", "/sponsors"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const actionHref = eventHasPassed ? "/tournament" : "/registration";
  const actionLabel = eventHasPassed ? "Event info" : "Register";

  return (
    <header className="new-header">
      <div className="new-nav">
        <Link className="new-brand" href="/">
          <span className="logo-crop"><img src="/logos/poster-wings-transparent.png" alt="SH memorial wings logo" /></span>
          <span><b>SHANNAN HICKEY</b><small>MEMORIAL GOLF TOURNAMENT</small></span>
        </Link>
        <button type="button" className="new-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Close navigation" : "Open navigation"}><i /><i /></button>
        <nav id="site-navigation" className={open ? "open" : ""}>
          {links.map(([label, url]) => <a href={url} key={url} aria-current={pathname === url ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="register-pill" href={actionHref} onClick={() => setOpen(false)}>{actionLabel}</a>
        </nav>
      </div>
    </header>
  );
}
