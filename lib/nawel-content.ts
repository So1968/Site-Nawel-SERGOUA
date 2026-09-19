/**
 * Source éditoriale du site de Nawel Sergoua.
 *
 * Ce fichier ne doit contenir que le projet de Nawel.
 * Aucun corpus extérieur ne doit être réutilisé ici.
 */

export const nawelProfile = {
  name: "Nawel Sergoua",
  role: "Artiste plasticienne",
  location: "Goa",
  title: "Mémoire, matière, transmission",
  description:
    "Site vitrine de Nawel Sergoua : œuvres, démarche, expositions et projets artistiques autour de la mémoire, de la matière, de l’écologie et de la transmission.",
} as const;

export const nawelThemes = [
  {
    number: "01",
    title: "Mémoire",
    text: "La mémoire prend forme dans les volumes, les traces, les compartiments et les histoires qui se transmettent.",
  },
  {
    number: "02",
    title: "Matière",
    text: "Sculpture, relief, collage et matériaux récupérés donnent une présence à ce qui a été vécu, déplacé ou transformé.",
  },
  {
    number: "03",
    title: "Engagement",
    text: "La création se relie au vivant, à l’écologie, au respect de l’environnement et aux expériences de transmission.",
  },
] as const;

export const nawelAxes = [
  {
    number: "01",
    title: "Mémoire en volume",
    category: "Sculpture · relief · transmission",
    text: "Un espace pour présenter les œuvres qui donnent une forme matérielle aux souvenirs, aux origines, à la famille et à l’histoire.",
  },
  {
    number: "02",
    title: "Matières en transformation",
    category: "Collage · assemblage · récupération",
    text: "Les matériaux, les détails et les traces deviennent une matière de travail, entre récupération, transformation et attention au vivant.",
  },
  {
    number: "03",
    title: "Formes suspendues",
    category: "Installation · volume · fragilité",
    text: "Un espace pour documenter les formes fragiles, les tensions et les œuvres qui semblent tenir entre présence et disparition.",
  },
] as const;
