import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
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

export const metadata: Metadata = {
  metadataBase: siteUrl,
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
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paysage entre obscurité et lumière — Nawel Sergoua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawel Sergoua — Artiste plasticienne",
    description:
      "Peinture, paysage, jardin traditionnel chinois et poésie dans l’univers de Nawel Sergoua.",
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
      <body>{children}</body>
    </html>
  );
}
