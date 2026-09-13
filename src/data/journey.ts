import type { JourneyItem } from "@/types/portfolio";

export const journey: JourneyItem[] = [
  {
    period: "Diplôme obtenu",
    type: "Formation",
    title: "Technicien spécialisé en développement informatique",
    organization: "MIAGE",
    description: "Formation professionnalisante en développement informatique.",
  },
  {
    period: "2026",
    type: "Formation",
    title: "Python pratique & Introduction à l’IA",
    organization: "GoMyCode",
    description: "Python, POO, NumPy, Pandas, visualisation, apprentissage supervisé, clustering, fichiers et interfaces Tkinter.",
  },
  {
    period: "Aujourd’hui",
    type: "Parcours",
    title: "Ingénierie IA",
    organization: "Apprentissage en cours",
    description: "Approfondissement progressif des API Web, du backend, des bases de données et des systèmes IA de production.",
    status: "En cours",
  },
];
