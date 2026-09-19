import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://shannanhickeymemorial.com"),
  title: { default: "Shannan Hickey Memorial Golf Tournament 2026", template: "%s | Shannan Hickey Memorial" },
  description: "The 2nd Annual Shannan Hickey Memorial Golf Tournament at NINE Golf in Belleville, Ontario, supporting Three Oaks Foundation.",
  keywords: ["Shannan Hickey Memorial Golf Tournament", "NINE Golf Belleville", "Three Oaks Foundation", "Belleville golf tournament"],
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/shannan-wings-favicon.png", type: "image/png", sizes: "512x512" }], shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Shannan Hickey Memorial Golf Tournament 2026",
    description: "A day of golf, friendship and community in Shannan Hickey's memory, supporting Three Oaks Foundation.",
    url: "/",
    siteName: "Shannan Hickey Memorial Golf Tournament",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/images/tournament/poster.jpg", alt: "Shannan Hickey Memorial Golf Tournament poster" }],
  },
  twitter: { card: "summary_large_image", title: "Shannan Hickey Memorial Golf Tournament 2026", description: "Supporting Three Oaks Foundation through golf, friendship and community.", images: ["/images/tournament/poster.jpg"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
