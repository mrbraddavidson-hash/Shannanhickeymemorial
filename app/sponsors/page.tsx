import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/sponsors", "Sponsors", "Meet the sponsors supporting the Shannan Hickey Memorial Golf Tournament and Three Oaks Foundation.");

export default function Sponsors(){
  return <PageShell
    eyebrow="Proudly presented by"
    title="J² Squared Roofing"
    intro="The presenting sponsor behind the Shannan Hickey Memorial Golf Tournament."
  >
    <section className="j2-feature">
      <div className="j2-logo-panel">
        <span>Presenting sponsor</span>
        <img className="j2-clean-logo" src="/images/sponsors/j-squared-clean.png" alt="J² Squared Roofing — 613-827-0180"/>
      </div>
      <div className="j2-feature-copy">
        <p className="overline dark">Local support. Lasting impact.</p>
        <h2>Backing a meaningful day for Shannan and our community.</h2>
        <p>J² Squared Roofing proudly supports the tournament and its mission to raise funds for Three Oaks Foundation in Shannan Hickey&apos;s memory.</p>
        <div className="j2-actions">
          <a className="primary-action" href="https://jsquaredroofs.ca/" target="_blank" rel="noopener noreferrer">Visit J² Squared Roofing <span aria-hidden="true">↗</span></a>
          <a className="j2-phone" href="tel:16138270180">613-827-0180</a>
        </div>
      </div>
    </section>
  </PageShell>
}
