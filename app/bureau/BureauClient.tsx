"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  FileText,
  FolderOpen,
  Images,
  Landmark,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { BureauContent, Folder, FolderId } from "./bureau-data";

const folderIcons: Record<FolderId, LucideIcon> = {
  atelier: PenLine,
  memoire: Archive,
  matiere: Images,
  engagement: Landmark,
  oeuvres: Images,
  archives: FileText,
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
            <div className="workspaceMark" role="img" aria-label="Nawel Sergoua">
              <Images size={25} aria-hidden="true" />
              <span>NS</span>
            </div>
          </header>

          <div className="deskScene">
            <div
              className="deskMaterial"
              role="img"
              aria-label="Composition abstraite de matières et de fragments"
            >
              <span className="materialGlow" />
              <span className="materialRibbon materialRibbonOne" />
              <span className="materialRibbon materialRibbonTwo" />
              <div className="imageNote">
                <small>Matière repère</small>
                <strong>Mémoire en mouvement</strong>
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
              <strong>Fil de recherche</strong>
              <small>Ne pas perdre le chemin</small>
            </div>
          </header>

          <article>
            <small>Intention actuelle</small>
            <p>
              Rendre visible le travail de Nawel sans fabriquer le contenu à la place de l’artiste.
            </p>
          </article>

          <article>
            <small>Gamme repère</small>
            <div className="colorSwatch">
              <span />
              <strong>Terre, matière, trace</strong>
            </div>
          </article>

          <article>
            <small>Matière à réunir</small>
            <ul>
              <li><FileText size={15} aria-hidden="true" /> biographie et parcours</li>
              <li><Images size={15} aria-hidden="true" /> œuvres et photographies</li>
              <li><Landmark size={15} aria-hidden="true" /> expositions et Biennale</li>
            </ul>
          </article>

          <div className="nextStep">
            <small>Prochaine étape</small>
            <strong>Importer les œuvres et construire le catalogue.</strong>
          </div>
        </aside>
      </main>
    </>
  );
}
