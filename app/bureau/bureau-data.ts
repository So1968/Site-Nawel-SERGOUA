export type FolderId =
  | "atelier"
  | "paysages"
  | "jardin"
  | "poemes"
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
  { id: "paysages", label: "Paysages", subtitle: "peintures et recherches" },
  { id: "jardin", label: "Jardin", subtitle: "formes et symboles" },
  { id: "poemes", label: "Poèmes", subtitle: "textes et inscriptions" },
  { id: "oeuvres", label: "Œuvres", subtitle: "catalogue public" },
  { id: "archives", label: "Archives", subtitle: "matière antérieure" },
];

export const folderContent: BureauContent = {
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
