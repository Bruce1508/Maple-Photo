import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maple Photo Imaging — Passport Photos Toronto",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
  },
  description:
    "Professional passport & ID photos in Toronto. Same-day prints for Canada, USA, and 50+ countries. Walk-in or book online.",
  keywords: [
    "passport photo toronto",
    "id photo toronto",
    "visa photo toronto",
    "PR card photo toronto",
    "citizenship photo toronto",
    "passport photo near me",
  ],
  openGraph: {
    title: "Maple Photo Imaging",
    description:
      "Professional passport photos — ready in minutes. Government-compliant for 50+ countries.",
    url: "https://maplephotoimaging.ca",
    siteName: "Maple Photo Imaging",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}

        {/* LocalBusiness structured data for local SEO */}
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maple Photo Imaging",
  "description": "Professional passport and ID photo studio in Toronto. Same-day prints for Canada, USA, and 50+ countries.",
  "url": "https://maplephotoimaging.ca",
  "telephone": "[TODO: add phone]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[TODO: add street address]",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$"
}`}</Script>
      </body>
    </html>
  );
}
