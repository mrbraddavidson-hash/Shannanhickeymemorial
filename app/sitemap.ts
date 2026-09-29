const baseUrl = "https://shannanhickeymemorial.com";

const publicPaths = [
  "/",
  "/about",
  "/tournament",
  "/registration",
  "/sponsors",
  "/gallery",
  "/three-oaks",
  "/contact",
];

export default function sitemap() {
  return publicPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: "2026-09-29",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
