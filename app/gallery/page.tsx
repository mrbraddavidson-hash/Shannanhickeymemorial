import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/gallery", "Gallery", "Tournament memories, community moments and support for the Shannan Hickey Memorial Golf Tournament.");

export default function Gallery(){
  return <PageShell eyebrow="Tournament memories" title="Good people. Great days." intro="Teams, sponsors, awards, and community moments from the Shannan Hickey Memorial Golf Tournament.">
    <div className="gallery-page">
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
