import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/gallery", "Gallery", "Tournament memories, community moments and support for the Shannan Hickey Memorial Golf Tournament.");

export default function Gallery(){return <PageShell eyebrow="Tournament memories" title="Good people. Great days." intro="Teams, sponsors, awards, and community moments from the tournament."><figure className="gallery-feature"><img src="/images/three-oaks/cheque.webp" alt="Tournament donation presentation to Three Oaks Foundation"/><figcaption><p className="overline dark">Community in action</p><h2>Supporting Three Oaks Foundation</h2><p>A proud moment from the Shannan Hickey Memorial Golf Tournament.</p></figcaption></figure></PageShell>}
