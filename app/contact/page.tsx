import {PageShell} from "../../src/components/PageShell";
import {RegistrationForm} from "../../src/components/RegistrationForm";
import {event} from "../../src/data/event";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/contact", "Contact the Tournament", "Contact Joe McCaw about the Shannan Hickey Memorial Golf Tournament, registration, sponsorship or donations.");

const mapSource=`https://www.google.com/maps?q=${encodeURIComponent(`${event.venue.name}, ${event.venue.address}, ${event.venue.city}`)}&z=17&output=embed`;

export default function Contact(){return <PageShell eyebrow="Questions? Let’s connect" title="Contact the tournament" intro="Register your team, find the venue, or get in touch about the event."><div className="contact-page"><div className="registration-contact"><div className="director-heading"><small>Tournament Director</small><strong>{event.contact.name}</strong><a href={`mailto:${event.contact.email}`}>{event.contact.email}</a></div><RegistrationForm showTitle={false}/></div><div className="venue-card"><small>Event venue</small><h2>{event.venue.name}</h2><p>{event.venue.address}<br/>{event.venue.city}</p><iframe title="Map to Nine Golf" src={mapSource} loading="lazy"/></div></div></PageShell>}
