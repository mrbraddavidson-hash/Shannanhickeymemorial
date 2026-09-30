export function PosterLightbox({ className = "" }: { className?: string }) {
  return (
    <figure
      className={"tournament-poster-image " + className}
      role="img"
      aria-label="3rd Annual Shannan Hickey Memorial Golf Tournament, date to be announced"
    >
      <img src="/images/tournament/poster-2026-date-tbd.png" alt="3rd Annual Shannan Hickey Memorial Golf Tournament, Date TBD, at NINE Golf in Belleville, Ontario" />
    </figure>
  );
}
