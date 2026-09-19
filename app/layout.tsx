import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nawel Sergoua — Artiste plasticienne",
    template: "%s | Nawel Sergoua",
  },
  description:
    "Peinture, paysage, jardin traditionnel chinois et poésie dans l’univers de Nawel Sergoua.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nawel Sergoua — Artiste plasticienne",
    description:
      "Peinture, paysage, jardin traditionnel chinois et poésie dans l’univers de Nawel Sergoua.",
    type: "website",
    locale: "fr_FR",
    siteName: "Nawel Sergoua",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Nawel Sergoua — Artiste plasticienne",
    description:
      "Peinture, paysage, jardin traditionnel chinois et poésie dans l’univers de Nawel Sergoua.",
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
      <body>{children}</body>
    </html>
  );
}
