"use client";

import { useState } from "react";

export function PosterLightbox({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <button className={`poster-lightbox-trigger ${className}`} type="button" onClick={() => setIsOpen(true)} aria-label="Enlarge tournament poster">
      <img src="/images/tournament/poster.jpg" alt="Official tournament poster" />
      <span>Click to enlarge</span>
    </button>
    {isOpen && <div className="poster-lightbox" role="dialog" aria-modal="true" aria-label="Tournament poster">
      <button className="poster-lightbox-backdrop" type="button" onClick={() => setIsOpen(false)} aria-label="Close enlarged poster" />
      <button className="poster-lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close poster">×</button>
      <img src="/images/tournament/poster.jpg" alt="Official tournament poster enlarged" />
    </div>}
  </>;
}
