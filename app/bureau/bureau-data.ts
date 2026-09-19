export type FolderId =
  | "atelier"
  | "memoire"
  | "matiere"
  | "engagement"
  | "oeuvres"
  | "archives";

export type Folder = Readonly<{
  id: FolderId;
  label: string;
  subtitle: string;
}>;

export type FolderContent = Readonly<{
  eyebrow: string;
  title: string;
  intro: string;
  cards: readonly (readonly [label: string, value: string])[];
}>;

export type BureauContent = Readonly<Record<FolderId, FolderContent>>;

export const folders: readonly Folder[] = [
  { id: "atelier", label: "Atelier", subtitle: "travail en cours" },
  { id: "memoire", label: "Mémoire", subtitle: "origines et transmission" },
  { id: "matiere", label: "Matière", subtitle: "relief et assemblage" },
  { id: "engagement", label: "Engagement", subtitle: "écologie et ateliers" },
  { id: "oeuvres", label: "Œuvres", subtitle: "catalogue et vente" },
  { id: "archives", label: "Archives", subtitle: "parcours et documents" },
];

export const folderContent: BureauContent = {
  atelier: {
    eyebrow: "Table de travail",
    title: "Matière en mouvement",
    intro:
      "Rassembler les images, les objets, les fragments et les décisions qui accompagnent le travail de Nawel.",
    cards: [
      ["Recherche active", "Mémoire, matière et transmission"],
      ["À réunir", "Photographies, notes et fragments"],
      ["Prochaine action", "Choisir les œuvres à présenter"],
    ],
  },
  memoire: {
    eyebrow: "Axe de recherche",
    title: "Mémoire et transmission",
    intro:
      "Documenter les formes qui relient les souvenirs, la famille, les origines, l’histoire et les blessures.",
    cards: [
      ["Formes", "Volumes, tiroirs et compartiments"],
      ["Fil", "Ce qui relie les générations"],
      ["À recueillir", "Récits et textes de l’artiste"],
    ],
  },
  matiere: {
    eyebrow: "Répertoire de travail",
    title: "Collage, relief et assemblage",
    intro:
      "Classer les matières, les détails et les matériaux récupérés qui entrent dans la construction des œuvres.",
    cards: [
      ["Gestes", "Assembler, superposer, transformer"],
      ["Matières", "Supports, traces et récupérations"],
      ["À photographier", "Détails et états intermédiaires"],
    ],
  },
  engagement: {
    eyebrow: "Projets et liens",
    title: "Art, écologie et transmission",
    intro:
      "Conserver la mémoire des ateliers, des créations partagées et des projets liés au respect du vivant.",
    cards: [
      ["Ateliers", "Création avec les enfants et les adolescents"],
      ["Écologie", "Réemploi, environnement et matière"],
      ["À documenter", "Projets collectifs et partenaires"],
    ],
  },
  oeuvres: {
    eyebrow: "Catalogue",
    title: "Œuvres à présenter",
    intro:
      "Préparer une sélection claire avec titre, année, technique, dimensions, photographie, prix et disponibilité.",
    cards: [
      ["Sélection", "À constituer avec Nawel"],
      ["Classement", "Par œuvres, séries et projets"],
      ["Vente", "Demandes et modalités à préciser"],
    ],
  },
  archives: {
    eyebrow: "Parcours",
    title: "Archives et expositions",
    intro:
      "Rassembler les éléments biographiques, les participations à la Biennale, les expositions et les documents utiles.",
    cards: [
      ["À récupérer", "Biographie et parcours"],
      ["À vérifier", "Dates, lieux et crédits"],
      ["But", "Rendre le travail visible et accessible"],
    ],
  },
};
