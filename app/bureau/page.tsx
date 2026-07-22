"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

type FolderId = "atelier" | "paysages" | "jardin" | "poemes" | "oeuvres" | "archives";

const folders = [
  {
    id: "atelier" as FolderId,
    label: "Atelier",
    subtitle: "travail en cours",
    icon: PenLine,
  },
  {
    id: "paysages" as FolderId,
    label: "Paysages",
    subtitle: "peintures et recherches",
    icon: Mountain,
  },
  {
    id: "jardin" as FolderId,
    label: "Jardin",
    subtitle: "formes et symboles",
    icon: Flower2,
  },
  {
    id: "poemes" as FolderId,
    label: "Poèmes",
    subtitle: "textes et inscriptions",
    icon: BookOpenText,
  },
  {
    id: "oeuvres" as FolderId,
    label: "Œuvres",
    subtitle: "catalogue public",
    icon: Images,
  },
  {
    id: "archives" as FolderId,
    label: "Archives",
    subtitle: "matière antérieure",
    icon: Archive,
  },
];

const folderContent = {
  atelier: {
    eyebrow: "Table de travail",
    title: "Le couloir du jour",
    intro:
      "Rassembler les images, les couleurs, les mots et les premières décisions autour de la nouvelle série.",
    cards: [
      ["Recherche active", "Passage entre obscurité et lumière"],
      ["Matière", "Photographies de coucher de soleil"],
      ["Prochaine action", "Choisir les premières œuvres à présenter"],
    ],
  },
  paysages: {
    eyebrow: "Dossier de recherche",
    title: "Peinture de paysage",
    intro:
      "Études de composition, vides, lignes d’eau, montagnes, brumes et perspectives inspirées de la peinture chinoise.",
    cards: [
      ["Axe 1", "Le paysage comme espace intérieur"],
      ["Axe 2", "Le chemin du regard"],
      ["À documenter", "Références de la période Song"],
    ],
  },
  jardin: {
    eyebrow: "Architecture symbolique",
    title: "Le jardin du lettré",
    intro:
      "Un répertoire vivant de formes : pierre, eau, porte circulaire, pont, pavillon, orchidée et bambou.",
    cards: [
      ["Passage", "Pont en arc et porte circulaire"],
      ["Éléments", "Pierre · eau · plantes · vide"],
      ["Question", "Comment faire entrer le visiteur dans le tableau ?"],
    ],
  },
  poemes: {
    eyebrow: "Écriture",
    title: "Poèmes et inscriptions",
    intro:
      "Textes courts, citations, fragments et poèmes destinés à dialoguer avec les œuvres sans les expliquer entièrement.",
    cards: [
      ["Texte repère", "La lumière ouvre un chemin sur l’eau"],
      ["Forme", "Poème vertical ou inscription discrète"],
      ["À recueillir", "Écrits antérieurs de l’artiste"],
    ],
  },
  oeuvres: {
    eyebrow: "Catalogue",
    title: "Œuvres à présenter",
    intro:
      "Préparer une sélection claire avec titre, année, technique, dimensions, série et photographie de qualité.",
    cards: [
      ["Sélection", "À constituer avec l’artiste"],
      ["Classement", "Par séries plutôt que seulement par dates"],
      ["Site public", "Grandes images et textes courts"],
    ],
  },
  archives: {
    eyebrow: "Matière déjà maîtrisée",
    title: "Archives et chemin parcouru",
    intro:
      "Retrouver la matière qui précède le travail actuel : œuvres, recherches, gestes, textes et expériences déjà acquis.",
    cards: [
      ["À récupérer", "Photographies des travaux antérieurs"],
      ["À écouter", "Récit du parcours de l’artiste"],
      ["But", "Faire apparaître la continuité, pas enfermer dans le passé"],
    ],
  },
};

export default function BureauPage() {
  const [active, setActive] = useState<FolderId>("atelier");
  const content = useMemo(() => folderContent[active], [active]);

  return (
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
          {folders.map(({ id, label, subtitle, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => setActive(id)}
            >
              <Icon size={19} strokeWidth={1.6} />
              <span>
                {label}
                <small>{subtitle}</small>
              </span>
            </button>
          ))}
        </nav>

        <Link href="/" className="backToSite">Voir le site public</Link>
      </aside>

      <section className="deskWorkspace">
        <header className="workspaceHeader">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
          <div className="workspaceMark" aria-hidden="true">
            <CircleDot size={30} />
            <span>山水</span>
          </div>
        </header>

        <div className="deskScene">
          <div className="deskSunset" aria-label="Emplacement pour la photographie du coucher de soleil">
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
            <FolderOpen size={31} strokeWidth={1.4} />
            <div>
              <small>Dossier ouvert</small>
              <strong>{folders.find((folder) => folder.id === active)?.label}</strong>
            </div>
          </div>
        </div>
      </section>

      <aside className="deskThread">
        <header>
          <Sparkles size={24} strokeWidth={1.5} />
          <div>
            <strong>Fil de reprise</strong>
            <small>Ne pas perdre le chemin</small>
          </div>
        </header>

        <article>
          <small>Intention actuelle</small>
          <p>Créer le contenant de l’univers artistique sans fabriquer le contenu à la place de l’artiste.</p>
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
            <li><FileText size={15} /> textes déjà écrits</li>
            <li><Images size={15} /> œuvres antérieures</li>
            <li><Landmark size={15} /> expositions et parcours</li>
          </ul>
        </article>

        <div className="nextStep">
          <small>Prochaine étape</small>
          <strong>Importer les œuvres et choisir les séries.</strong>
        </div>
      </aside>
    </main>
  );
}
