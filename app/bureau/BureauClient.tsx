"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  BookOpenText,
  CircleDot,
  FileText,
  Flower2,
  FolderOpen,
  Images,
  Landmark,
  Mountain,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { BureauContent, Folder, FolderId } from "./bureau-data";

const folderIcons: Record<FolderId, LucideIcon> = {
  atelier: PenLine,
  paysages: Mountain,
  jardin: Flower2,
  poemes: BookOpenText,
  oeuvres: Images,
  archives: Archive,
};

type BureauClientProps = Readonly<{
  folders: readonly Folder[];
  folderContent: BureauContent;
}>;

export default function BureauClient({
  folders,
  folderContent,
}: BureauClientProps) {
  const [active, setActive] = useState<FolderId>("atelier");
  const content = folderContent[active];

  return (
    <>
      <a className="skipLink" href="#bureau-workspace">
        Aller à l’espace de travail
      </a>

      <main className="artistDesk">
      <aside className="deskNav">
        <div className="deskBrand">
          <span className="deskSeal">NS</span>
          <div>
            <strong>Bureau de l’artiste</strong>
            <small>Nawel Sergoua</small>
          </div>
        </div>

        <nav aria-label="Dossiers du bureau">
          {folders.map(({ id, label, subtitle }) => {
            const Icon = folderIcons[id];

            return (
              <button
                type="button"
                key={id}
                className={active === id ? "active" : ""}
                aria-pressed={active === id}
                aria-controls="bureau-workspace"
                onClick={() => setActive(id)}
              >
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                <span>
                  {label}
                  <small>{subtitle}</small>
                </span>
              </button>
            );
          })}
        </nav>

        <Link href="/" className="backToSite">
          Voir le site public
        </Link>
      </aside>

      <section
        className="deskWorkspace"
        id="bureau-workspace"
        aria-label="Espace de travail"
      >
        <header className="workspaceHeader">
          <div aria-live="polite">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="workspace-title">{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <div className="workspaceMark" aria-hidden="true">
            <CircleDot size={30} />
            <span>山水</span>
          </div>
        </header>

        <div className="deskScene">
          <div
            className="deskSunset"
            role="img"
            aria-label="Emplacement pour la photographie du coucher de soleil"
          >
            <span className="deskSun" />
            <span className="deskMountains" />
            <span className="deskReflection" />
            <div className="imageNote">
              <small>Image repère</small>
              <strong>Entre l’ombre et le jour</strong>
            </div>
          </div>

          <div className="folderCards">
            {content.cards.map(([label, value], index) => (
              <article key={label} className={`folderNote note-${index + 1}`}>
                <span className="notePin" aria-hidden="true" />
                <small>{label}</small>
                <strong>{value}</strong>
              </article>
            ))}
          </div>

          <div className="openFolder">
            <FolderOpen size={31} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <small>Dossier ouvert</small>
              <strong>{folders.find((folder) => folder.id === active)?.label}</strong>
            </div>
          </div>
        </div>
      </section>

      <aside className="deskThread">
        <header>
          <Sparkles size={24} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <strong>Fil de reprise</strong>
            <small>Ne pas perdre le chemin</small>
          </div>
        </header>

        <article>
          <small>Intention actuelle</small>
          <p>
            Créer le contenant de l’univers artistique sans fabriquer le contenu à la place de l’artiste.
          </p>
        </article>

        <article>
          <small>Couleur repère</small>
          <div className="colorSwatch">
            <span />
            <strong>Rose du couloir du jour</strong>
          </div>
        </article>

        <article>
          <small>Matière à demander</small>
          <ul>
            <li><FileText size={15} aria-hidden="true" /> textes déjà écrits</li>
            <li><Images size={15} aria-hidden="true" /> œuvres antérieures</li>
            <li><Landmark size={15} aria-hidden="true" /> expositions et parcours</li>
          </ul>
        </article>

        <div className="nextStep">
          <small>Prochaine étape</small>
          <strong>Importer les œuvres et choisir les séries.</strong>
        </div>
      </aside>
      </main>
    </>
  );
}
