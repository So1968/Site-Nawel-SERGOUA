import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nawel Sergoua — Artiste plasticienne",
  description:
    "Peinture, paysage, jardin traditionnel chinois et poésie dans l’univers de Nawel Sergoua.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
