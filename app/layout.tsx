import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://shannanhickeymemorial.com"),
  title: { default: "Shannan Hickey Memorial Golf Tournament | 3rd Annual", template: "%s | Shannan Hickey Memorial" },
  description: "The 3rd Annual Shannan Hickey Memorial Golf Tournament at NINE Golf in Belleville, Ontario. Event date to be announced, supporting Three Oaks Foundation.",
  keywords: ["Shannan Hickey Memorial Golf Tournament", "NINE Golf Belleville", "Three Oaks Foundation", "Belleville golf tournament"],
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/shannan-wings-favicon.png", type: "image/png", sizes: "512x512" }], shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Shannan Hickey Memorial Golf Tournament | 3rd Annual",
    description: "The 3rd Annual Shannan Hickey Memorial Golf Tournament is being planned at NINE Golf in Belleville, Ontario. Event date to be announced.",
    url: "/",
    siteName: "Shannan Hickey Memorial Golf Tournament",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/logos/poster-wings-transparent.png", alt: "Shannan Hickey Memorial wings logo" }],
  },
  twitter: { card: "summary_large_image", title: "Shannan Hickey Memorial Golf Tournament | 3rd Annual", description: "Supporting Three Oaks Foundation through golf, friendship and community. Event date to be announced.", images: ["/logos/poster-wings-transparent.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
