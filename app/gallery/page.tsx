import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/gallery", "Gallery", "Tournament memories, community moments and support for the Shannan Hickey Memorial Golf Tournament.");

const gallery2026Photos = [
  { src: "/images/tournament/2026-08-29/764.jpg", alt: "Golfer putting on the course at the 3rd Annual Shannan Hickey Memorial Golf Tournament", label: "On the green" },
  { src: "/images/tournament/2026-08-29/756.jpg", alt: "Lager Dawgs hole sponsorship sign at the 3rd Annual tournament", label: "Hole sponsor" },
  { src: "/images/tournament/2026-08-29/755.jpg", alt: "Two golfers together on the green at the memorial tournament", label: "Playing together" },
  { src: "/images/tournament/2026-08-29/754.jpg", alt: "Tournament participant wearing a Shannan Hickey Memorial shirt", label: "Tournament team" },
  { src: "/images/tournament/2026-08-29/746.jpg", alt: "Guests at the tournament raffle and prize table", label: "Raffle and prizes" },
] as const;

export default function Gallery(){
  return <PageShell eyebrow="Tournament memories" title="Good people. Great days." intro="Teams, sponsors, awards, and community moments from the Shannan Hickey Memorial Golf Tournament.">
    <div className="gallery-page">
      <section className="gallery-year-group" aria-labelledby="annual-2026-heading">
        <div className="gallery-section-heading"><p className="overline dark">3rd Annual</p><h2 id="annual-2026-heading">August 29, 2026</h2><p>Photos from tournament day at NINE Golf in Belleville, Ontario.</p></div>
        <div className="page-gallery" aria-label="3rd Annual Shannan Hickey Memorial tournament photos">
          {gallery2026Photos.map((photo, index) => <figure className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open larger photo: ${photo.label}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/>
            </a>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
          </figure>)}
        </div>
      </section>
      <section className="gallery-year-group" aria-labelledby="annual-one-heading">
        <div className="gallery-section-heading"><p className="overline dark">Gallery archive</p><h2 id="annual-one-heading">1st Annual</h2><p>This photo is from the first Shannan Hickey Memorial Golf Tournament.</p></div>
        <figure className="gallery-feature">
          <img src="/images/three-oaks/cheque.webp" alt="Cheque presentation supporting Three Oaks Foundation at the 1st Annual Shannan Hickey Memorial Golf Tournament"/>
          <figcaption><p className="overline dark">1st Annual · Community in action</p><h2>Supporting Three Oaks Foundation</h2><p>A proud moment from the first annual tournament.</p></figcaption>
        </figure>
      </section>
      <p className="gallery-note">Additional annual galleries will be added as official photos become available.</p>
    </div>
  </PageShell>
}
