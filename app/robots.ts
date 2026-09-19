const baseUrl = "https://shannanhickeymemorial.com";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
