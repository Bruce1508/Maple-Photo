import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const franklin = Libre_Franklin({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-franklin",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maple Photo Imaging, Passport Photos Toronto",
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
      "Professional passport photos, ready in minutes. Government-compliant for 50+ countries.",
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
      className={`${franklin.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-svh flex flex-col antialiased">
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
  "telephone": "(416) 391-0388",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "85 Ellesmere Rd",
    "addressLocality": "Scarborough",
    "addressRegion": "ON",
    "postalCode": "M1R 4B9",
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
