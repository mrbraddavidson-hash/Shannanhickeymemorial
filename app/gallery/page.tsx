import {PageShell} from "../../src/components/PageShell";
import {pageMetadata} from "../../src/data/metadata";

export const metadata = pageMetadata("/gallery", "Gallery", "Tournament memories, community moments and support for the Shannan Hickey Memorial Golf Tournament.");

const gallerySecondAnnualPhotos = [
  { src: "/images/tournament/2026-08-29/764.jpg", alt: "Golfer putting on the course at the 2nd Annual Shannan Hickey Memorial Golf Tournament", label: "On the green" },
  { src: "/images/tournament/2026-08-29/756.jpg", alt: "Lager Dawgs hole sponsorship sign at the 2nd Annual tournament", label: "Hole sponsor" },
  { src: "/images/tournament/2026-08-29/755.jpg", alt: "Two golfers together on the green at the 2nd Annual memorial tournament", label: "Playing together" },
  { src: "/images/tournament/2026-08-29/754.jpg", alt: "Tournament participant wearing a Shannan Hickey Memorial shirt", label: "Tournament team" },
  { src: "/images/tournament/2026-08-29/746.jpg", alt: "Guests at the 2nd Annual tournament raffle and prize table", label: "Raffle and prizes" },
  { src: "/images/tournament/2nd-annual/744.jpg", alt: "J² Squared Roofing roadside sponsor sign", label: "Presenting sponsor" },
  { src: "/images/tournament/2nd-annual/733.jpg", alt: "Guests and volunteers gathered at the tournament welcome table", label: "Welcome table" },
  { src: "/images/tournament/2nd-annual/735.jpg", alt: "Three Oaks Foundation information tent at the golf tournament", label: "Three Oaks Foundation" },
  { src: "/images/tournament/2nd-annual/732.jpg", alt: "J² Squared Roofing sponsor board for the second annual tournament", label: "Sponsor recognition" },
  { src: "/images/tournament/2nd-annual/731.jpg", alt: "Tournament prize item prepared for guests", label: "Tournament prizes" },
  { src: "/images/tournament/2nd-annual/730.jpg", alt: "Guests browsing the tournament prize table", label: "Prize table" },
  { src: "/images/tournament/2nd-annual/729.jpg", alt: "Raffle prizes and donated items arranged for the tournament", label: "Raffle prizes" },
  { src: "/images/tournament/2nd-annual/723.jpg", alt: "Volunteer grilling burgers during tournament day", label: "Grill team" },
  { src: "/images/tournament/2nd-annual/722.jpg", alt: "Burgers being prepared for the tournament meal", label: "Tournament lunch" },
  { src: "/images/tournament/2nd-annual/721.jpg", alt: "Attendees gathered near the tournament prize table", label: "Community" },
  { src: "/images/tournament/2nd-annual/719.jpg", alt: "Memorial portrait displayed at the tournament", label: "Memorial portrait" },
  { src: "/images/tournament/2nd-annual/720.jpg", alt: "Guests near the tournament prize table", label: "Prize table" },
  { src: "/images/tournament/2nd-annual/717.jpg", alt: "Attendees sharing a moment during the tournament", label: "Social moments" },
  { src: "/images/tournament/2nd-annual/716.jpg", alt: "Tournament guests gathered together", label: "Community" },
  { src: "/images/tournament/2nd-annual/714.jpg", alt: "Guests gathered at the tournament welcome area", label: "Welcome area" },
  { src: "/images/tournament/2nd-annual/facebook-2026/01_joe_announcement.jpg", alt: "Joe McCaw announcement for the Shannan Hickey Memorial Golf Tournament", label: "Event announcement" },
  { src: "/images/tournament/2nd-annual/facebook-2026/02_shannan_event_photo_122174217.jpg", alt: "Official Shannan Hickey Memorial Golf Tournament flyer for August 29, 2026 at NINE Golf", label: "Official flyer" },
  { src: "/images/tournament/2nd-annual/facebook-2026/04_shannan_event_photo_122171956.jpg", alt: "Save-the-date graphic for the Shannan Hickey Memorial Golf Tournament", label: "Save the date" },
  { src: "/images/tournament/2nd-annual/facebook-2026/06_joe_prizeboard_01.jpg", alt: "Golf tournament prize board with donated passes and prizes", label: "Prize board" },
  { src: "/images/tournament/2nd-annual/facebook-2026/07_joe_prizeboard_02.jpg", alt: "Second golf tournament prize board with donated passes and prizes", label: "Prize board" },
  { src: "/images/tournament/2nd-annual/facebook-2026/08_joe_prizeboard_03.jpg", alt: "Third golf tournament prize board with donated passes and prizes", label: "Prize board" },
  { src: "/images/tournament/2nd-annual/facebook-2026/09_joe_prizeboard_04.jpg", alt: "Fourth golf tournament prize board with donated passes and prizes", label: "Prize board" },
  { src: "/images/tournament/2nd-annual/727.jpg", alt: "Handwritten prize board listing donated tournament prizes", label: "Prize board" },
  { src: "/images/tournament/2nd-annual/facebook-2026/10_joe_recap_01.jpg", alt: "Three Oaks Foundation fundraising recap from the memorial golf tournament", label: "$21,000 fundraiser" },
  { src: "/images/tournament/2nd-annual/facebook-2026/11_joe_recap_02.jpg", alt: "Post-event Shannan Hickey Memorial Golf Tournament recap", label: "Tournament recap" },
  { src: "/images/tournament/2nd-annual/facebook-2026/12_joe_recap_03.jpg", alt: "Second post-event Shannan Hickey Memorial Golf Tournament recap", label: "Tournament recap" },
  { src: "/images/tournament/2nd-annual/facebook-2026/13_melinda_21000_graphic.jpg", alt: "Three Oaks Foundation $21,000 fundraising graphic", label: "Three Oaks recap" },
] as const;

const galleryFirstAnnualPhotos = [
  { src: "/images/tournament/1st-annual/facebook-2025/01_shannan_2025_page_122130827.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/02_shannan_2025_page_122128686560.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/03_shannan_2025_page_122128686512.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/04_shannan_2025_page_122128686452.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/05_shannan_2025_page_122128686404.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/06_shannan_2025_page_122128686350.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/07_shannan_2025_page_122127720.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/08_shannan_2025_page_122094787.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/09_shannan_2025_page_122094773.png", alt: "2025 Shannan Hickey Memorial Golf Tournament photo from the official memorial page", label: "Official page photo" },
  { src: "/images/tournament/1st-annual/facebook-2025/10_joe_2025_prizeboard.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament prize board", label: "Prize board" },
  { src: "/images/tournament/1st-annual/facebook-2025/11_joe_2025_album_01_fbid_10161296207146630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 1", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/12_joe_2025_album_02_fbid_10161296207316630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 2", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/13_joe_2025_album_03_fbid_10161296207611630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 3", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/14_joe_2025_album_04_fbid_10161296207996630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 4", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/15_joe_2025_album_05_fbid_10161296208126630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 5", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/16_joe_2025_album_06_fbid_10161296208316630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 6", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/17_joe_2025_album_07_fbid_10161296208526630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 7", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/18_joe_2025_album_08_fbid_10161296208851630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 8", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/19_joe_2025_album_09_fbid_10161296208961630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 9", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/20_joe_2025_album_10_fbid_10161296209096630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 10", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/21_joe_2025_album_11_fbid_10161296209206630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 11", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/22_joe_2025_album_12_fbid_10161296209386630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 12", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/23_joe_2025_album_13_fbid_10161296209516630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 13", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/24_joe_2025_album_14_fbid_10161296209681630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 14", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/25_joe_2025_album_15_fbid_10161296209826630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 15", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/26_joe_2025_album_16_fbid_10161296209971630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 16", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/27_joe_2025_album_17_fbid_10161296210091630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 17", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/28_joe_2025_album_18_fbid_10161296210246630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 18", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/29_joe_2025_album_19_fbid_10161296210351630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 19", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/30_joe_2025_album_20_fbid_10161296210611630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 20", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/31_joe_2025_album_21_fbid_10161296210761630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 21", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/32_joe_2025_album_22_fbid_10161296210941630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 22", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/33_joe_2025_album_23_fbid_10161296211181630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 23", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/34_joe_2025_album_24_fbid_10161296211346630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 24", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/35_joe_2025_album_25_fbid_10161296211516630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 25", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/36_joe_2025_album_26_fbid_10161296211631630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 26", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/37_joe_2025_album_27_fbid_10161296211756630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 27", label: "Tournament album" },
  { src: "/images/tournament/1st-annual/facebook-2025/38_joe_2025_album_28_fbid_10161296610481630.jpg", alt: "2025 Shannan Hickey Memorial Golf Tournament album photo 28", label: "Tournament album" },
] as const;

export default function Gallery(){
  return <PageShell eyebrow="Tournament memories" title="Good people. Great days." intro="Teams, sponsors, awards, and community moments from the Shannan Hickey Memorial Golf Tournament.">
    <div className="gallery-page">
      <section className="gallery-year-group" aria-labelledby="annual-two-heading">
        <div className="gallery-section-heading"><p className="overline dark">2nd Annual</p><h2 id="annual-two-heading">August 29, 2026</h2><p>Photos from the second Shannan Hickey Memorial Golf Tournament at NINE Golf in Belleville, Ontario.</p></div>
        <div className="page-gallery" aria-label="2nd Annual Shannan Hickey Memorial tournament photos">
          {gallerySecondAnnualPhotos.map((photo, index) => <figure className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open larger photo: ${photo.label}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/>
            </a>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
          </figure>)}
        </div>
      </section>
      <section className="gallery-year-group" aria-labelledby="annual-one-heading">
        <div className="gallery-section-heading"><p className="overline dark">1st Annual</p><h2 id="annual-one-heading">2025 Photos</h2><p>Shannan Hickey Memorial Golf Tournament photo archive from the first annual event.</p></div>
        <figure className="gallery-feature">
          <img src="/images/three-oaks/cheque.webp" alt="Cheque presentation supporting Three Oaks Foundation at the 1st Annual Shannan Hickey Memorial Golf Tournament"/>
          <figcaption><p className="overline dark">1st Annual · Community in action</p><h2>Supporting Three Oaks Foundation</h2><p>A proud moment from the first annual tournament.</p></figcaption>
        </figure>
        <div className="page-gallery" aria-label="1st Annual 2025 Shannan Hickey Memorial tournament photos">
          {galleryFirstAnnualPhotos.map((photo, index) => <figure className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open larger photo: ${photo.label}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async"/>
            </a>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{photo.label}</strong></figcaption>
          </figure>)}
        </div>
      </section>
      <p className="gallery-note">Additional annual galleries will be added as official photos become available.</p>
    </div>
  </PageShell>
}
