import type { Metadata } from "next";

const siteOrigin = "https://shannanhickeymemorial.com";
const defaultImage = "/images/tournament/poster.jpg";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteOrigin).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Shannan Hickey Memorial Golf Tournament",
      locale: "en_CA",
      images: [{ url: defaultImage, alt: "Shannan Hickey Memorial Golf Tournament poster" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage],
    },
  };
}
