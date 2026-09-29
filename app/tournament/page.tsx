import { PageShell } from "../../src/components/PageShell";
import { event } from "../../src/data/event";
import { PosterLightbox } from "../../src/components/PosterLightbox";
import { pageMetadata } from "../../src/data/metadata";

const facts = [
  ["Format", event.format],
  ["Entry", "$" + event.pricing.golfer + " per golfer · $" + event.pricing.team + " per team"],
  ["Starts", event.dateTbd ? "To be announced" : "9:00 AM and 1:30 PM"],
  ["Venue", event.venue.name + ", " + event.venue.city],
  ["Included", "Golf, cart, dinner and prizes"],
  ["Contests", "Longest Drive and Closest to the Pin"],
];

export const metadata = pageMetadata("/tournament", "Tournament Information", "Event details, venue, schedule and format for the Shannan Hickey Memorial Golf Tournament.");

export default function Tournament() {
  return (
    <PageShell compact eyebrow={event.edition + " · Tournament information"} title="Everything for tournament day" intro={event.date + " · " + event.venue.name}>
      <div className="tournament-combined">
        <PosterLightbox className="poster-detail" />
        <div className="tournament-main">
          <div className="fact-cards compact-facts">
            {facts.map((x) => <article key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong></article>)}
          </div>
          <div className="schedule-compact">
            <div className="schedule-compact-heading">
              <p className="overline dark">{event.dateTbd ? "Date TBD" : event.date}</p>
              <h2>Schedule</h2>
            </div>
            {event.dateTbd ? (
              <p className="schedule-tbd">The tournament schedule will be announced once the event date is confirmed.</p>
            ) : (
              <ol>{event.schedule.map((x) => <li key={x.time}><strong>{x.time}</strong><span>{x.label}</span></li>)}</ol>
            )}
          </div>
          <a className="primary-action" href="/registration">{event.dateTbd ? "Register your interest" : "Register your team"} →</a>
        </div>
      </div>
    </PageShell>
  );
}
