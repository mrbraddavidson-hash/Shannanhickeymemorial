import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/gallery", "Gallery", "Tournament memories, community moments and support for the Shannan Hickey Memorial Golf Tournament.");

const galleryPhotos = [
  { src: "/images/tournament/gallery-1.jpg", alt: "Golf tournament team on the course", label: "On the course" },
  { src: "/images/tournament/gallery-2.jpg", alt: "Community portrait from the memorial tournament", label: "Community" },
  { src: "/images/tournament/gallery-3.jpg", alt: "Thank-you sign recognizing tournament sponsors", label: "Our sponsors" },
  { src: "/images/tournament/gallery-4.jpg", alt: "Golf carts ready for tournament day", label: "Tournament day" },
  { src: "/images/tournament/gallery-5.jpg", alt: "Community cheque presentation at the memorial tournament", label: "Giving back" },
] as const;

export default function Gallery(){
  return <PageShell eyebrow="Tournament memories" title="Good people. Great days." intro="Teams, sponsors, awards, and community moments from the Shannan Hickey Memorial Golf Tournament.">
    <div className="gallery-page">
      <figure className="gallery-feature">
        <img src="/images/three-oaks/cheque.webp" alt="Tournament donation presentation to Three Oaks Foundation"/>
        <figcaption><p className="overline dark">Community in action</p><h2>Supporting Three Oaks Foundation</h2><p>A proud moment from the Shannan Hickey Memorial Golf Tournament.</p></figcaption>
      </figure>
      <div className="gallery-section-heading"><p className="overline dark">Tournament memories</p><h2>More moments from the day.</h2><p>Golf, friendship, sponsors, and community support—captured in one place.</p></div>
      <div className="page-gallery" aria-label="Shannan Hickey Memorial tournament photos">
        {galleryPhotos.map((photo, index) => <figure className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src}>
          <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open larger photo: ${photo.label}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/>
          </a>
          <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
        </figure>)}
      </div>
      <p className="gallery-note">Have more official tournament photos to share? Send them to Joe and we can add the next gallery set.</p>
    </div>
  </PageShell>
}
