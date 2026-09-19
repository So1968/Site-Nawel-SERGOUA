import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bureau de l’artiste",
  description:
    "Espace de travail et de recherche de l’artiste plasticienne Nawel Sergoua.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BureauLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
