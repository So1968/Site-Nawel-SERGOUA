import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
import { nawelProfile } from "@/lib/nawel-content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: nawelProfile.name,
  jobTitle: nawelProfile.role,
  description: nawelProfile.description,
  ...(siteUrl ? { url: siteUrl.toString() } : {}),
  knowsAbout: [
    "Mémoire",
    "Sculpture",
    "Peinture en relief",
    "Collage",
    "Matériaux récupérés",
    "Écologie",
    "Transmission",
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${nawelProfile.name} — ${nawelProfile.role}`,
    template: `%s | ${nawelProfile.name}`,
  },
  description: nawelProfile.description,
  creator: nawelProfile.name,
  publisher: nawelProfile.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${nawelProfile.name} — ${nawelProfile.role}`,
    description: nawelProfile.description,
    type: "website",
    locale: "fr_FR",
    siteName: nawelProfile.name,
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mémoire, matière et transmission — Nawel Sergoua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${nawelProfile.name} — ${nawelProfile.role}`,
    description: nawelProfile.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#182126",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
