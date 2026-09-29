export const event = {
  name: "Shannan Hickey Memorial Golf Tournament",
  edition: "3rd Annual",
  date: "Date TBD",
  dateTbd: true,
  venue: { name: "NINE Golf", address: "1915 Old Highway #2", city: "Belleville, Ontario K8N 4Z2" },
  pricing: { golfer: 125, team: 500 },
  format: "18-hole best-ball scramble",
  schedule: [
    { time: "8:30 AM", label: "Announcements" },
    { time: "9:00 AM", label: "Start time" },
    { time: "1:30 PM", label: "Second / Staggered Start" },
    { time: "6:00 PM", label: "Dinner & Presentations" },
  ],
  contests: ["Longest Drive", "Closest to the Pin"],
  beneficiary: { name: "Three Oaks Foundation", url: "https://threeoaks.ca/" },
  presenter: { name: "J² Squared Roofing", phone: "613-827-0180" },
  contact: { name: "Joe McCaw", email: "joe@shannanhickeymemorial.com" },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=NINE+Golf+1915+Old+Highway+2+Belleville+Ontario+K8N+4Z2",
  donationUrl: "https://threeoaks.ca/donate/",
} as const;

// The next tournament date has not been announced. Keep the state explicit so
// edge-runtime clock differences cannot close the interest form prematurely.
export const eventHasPassed = false;
