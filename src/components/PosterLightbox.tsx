export function PosterLightbox({ className = "" }: { className?: string }) {
  return (
    <div
      className={"poster-tbd-card " + className}
      role="img"
      aria-label="3rd Annual Shannan Hickey Memorial Golf Tournament, date to be announced"
    >
      <div className="poster-tbd-card-inner">
        <span className="poster-tbd-mark">SH</span>
        <p className="poster-tbd-kicker">Shannan Hickey Memorial</p>
        <strong>Golf Tournament</strong>
        <span className="poster-tbd-edition">3rd Annual</span>
        <b>Date TBD</b>
        <small>NINE Golf · Belleville, Ontario</small>
      </div>
    </div>
  );
}
