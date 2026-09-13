import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Python & données",
    description: "Transformer, explorer et structurer des données.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Extraction web", "Gestion de fichiers"],
  },
  {
    title: "Machine Learning",
    description: "Préparer, comparer et évaluer des modèles classiques.",
    skills: ["scikit-learn", "Classification", "Régression logistique", "KNN", "Random Forest", "SVM", "K-Means"],
  },
  {
    title: "Bases de données & applications",
    description: "Relier les interfaces, la logique métier et la persistance.",
    skills: ["SQL", "PostgreSQL", "SQLite", "psycopg2", "Tkinter / ttk", "CRUD"],
  },
  {
    title: "Développement",
    description: "Construire des projets modulaires et versionnés.",
    skills: ["Git", "GitHub", "Architecture Python", "HTTP / JSON", "API Web", "Export Excel"],
  },
];

export const currentlyExploring = ["React", "Next.js", "TypeScript", "FastAPI", "Docker", "Cloud"];
