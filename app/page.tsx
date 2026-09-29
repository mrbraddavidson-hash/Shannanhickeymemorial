import { Header } from "../src/components/Header";
import { SiteFooter } from "../src/components/SiteFooter";
import { event, eventHasPassed } from "../src/data/event";

export default function Home(){
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: "The " + event.edition + " Shannan Hickey Memorial Golf Tournament supports Three Oaks Foundation through golf, friendship and community. Event date to be announced.",
    eventStatus: `https://schema.org/${eventHasPassed ? "EventCompleted" : "EventScheduled"}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: ["https://shannanhickeymemorial.com/logos/poster-wings-transparent.png"],
    url: "https://shannanhickeymemorial.com/tournament",
    location: { "@type": "Place", name: event.venue.name, address: { "@type": "PostalAddress", streetAddress: event.venue.address, addressLocality: "Belleville", addressRegion: "ON", postalCode: "K8N 4Z2", addressCountry: "CA" } },
    organizer: { "@type": "Organization", name: "Shannan Hickey Memorial Golf Tournament", url: "https://shannanhickeymemorial.com/" },
    sponsor: { "@type": "Organization", name: "J² Squared Roofing", url: "https://jsquaredroofs.ca/" },
  };

  return <main className="redesign home-page">
  <Header/>
  <section className="new-hero" id="top"><div className="hero-shape"/><div className="new-wrap hero-layout"><div className="hero-content"><p className="overline annual-label"><span>{event.edition}</span></p><h1>For Shannan.<br/><em>For community.</em></h1><p className="hero-lead">The {event.edition.toLowerCase()} tournament at {event.venue.name} in Belleville, Ontario supports Three Oaks Foundation through golf, friendship and community. The event date will be announced soon.</p><div className="hero-buttons">{eventHasPassed ? <a className="primary-action" href="/tournament">View tournament details <span aria-hidden="true">→</span></a> : <a className="primary-action" href="/registration">Register your interest <span aria-hidden="true">→</span></a>}<a className="primary-action" href={eventHasPassed ? "/contact" : "/tournament"}>{eventHasPassed ? "Contact the organizer" : "Tournament Info"} <span aria-hidden="true">→</span></a></div><div className="hero-partners"><a className="partner-row" href="https://jsquaredroofs.ca/" target="_blank" rel="noopener noreferrer"><span>Presented by</span><strong>J<sup>2</sup> Squared Roofing</strong></a><a className="partner-row" href="https://ninegolfbelleville.ca/" target="_blank" rel="noopener noreferrer"><span>Hosted by</span><strong>{event.venue.name}</strong></a></div></div><div className="portrait-stage"/></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} />
  <SiteFooter/>
</main>;
}
