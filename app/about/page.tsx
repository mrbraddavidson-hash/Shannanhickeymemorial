import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/about", "About Shannan", "Learn about Shannan Hickey and the community tournament created to honour her memory while supporting Three Oaks Foundation.");

export default function About(){
  return <PageShell eyebrow="Her spirit brings us together" title="Remembering Shannan" intro="A day of friendship, generosity, and community in honour of Shannan Hickey.">
    <div className="page-split">
      <img className="page-main-photo" src="/images/shannan/shannan-portrait.png" alt="Shannan Hickey smiling outdoors"/>
      <div className="prose">
        <h2>She made people feel cared for.</h2>
        <p>Shannan was a kind, hardworking nurse whose warmth, laughter, and gentle spirit touched the people around her. She cared deeply for others—at work, among friends, and in the community she called home.</p>
        <p>The Shannan Hickey Memorial Golf Tournament is a chance to gather in her memory: to share stories, enjoy a day together, and raise funds for Three Oaks Foundation. Every team, sponsor, and donation helps carry her light forward while supporting people in our community.</p>
        <a className="primary-action" href="/registration">Join us in celebrating Shannan →</a>
      </div>
    </div>
  </PageShell>;
}
