import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "stockflow",
    title: "StockFlow",
    shortTitle: "StockFlow",
    category: "Application desktop",
    summary:
      "Une application de gestion de stock en français qui rassemble les opérations quotidiennes dans un flux structuré.",
    problem:
      "Suivre produits, fournisseurs et mouvements devient vite fragile lorsque les informations sont dispersées.",
    solution:
      "Une application Python reliée à PostgreSQL, organisée en couches distinctes pour séparer l’interface, la logique métier et les données.",
    role: "Conception et développement de l’application",
    status: "Réalisé",
    technologies: ["Python", "Tkinter / ttk", "PostgreSQL", "psycopg2"],
    features: [
      "Authentification et gestion des rôles administrateur / gestionnaire",
      "Gestion des produits, catégories et fournisseurs",
      "Entrées, sorties, historique, recherche et filtres",
      "Tableau de bord de suivi",
    ],
    architecture: [
      "Interface desktop Tkinter / ttk",
      "Logique métier Python",
      "Accès aux données avec psycopg2",
      "Persistance PostgreSQL",
    ],
    challenges: [
      "Maintenir une séparation nette entre interface, logique métier et base de données.",
      "Adapter les actions disponibles aux rôles de l’application.",
    ],
    learnings: [
      "Structurer une application Python en couches lisibles.",
      "Relier des opérations CRUD à une base PostgreSQL.",
      "Concevoir un flux métier centré sur les mouvements de stock.",
    ],
    nextSteps: [
      "Documenter l’installation et le schéma de données.",
      "Ajouter des captures réelles de l’application au portfolio.",
    ],
  },
  {
    slug: "credit-risk-prediction",
    title: "Prédiction du risque de crédit",
    shortTitle: "Credit Risk",
    category: "Machine Learning supervisé",
    summary:
      "Un pipeline d’analyse et de classification appliqué à 32 581 dossiers de crédit, complété par une interface simple de prédiction.",
    problem:
      "Un jeu de données de crédit brut doit être nettoyé, exploré et préparé avant de pouvoir comparer des modèles de manière cohérente.",
    solution:
      "Un workflow Python allant du prétraitement à l’évaluation comparative de plusieurs classificateurs.",
    role: "Préparation des données, expérimentation et interface",
    status: "Réalisé",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn", "Tkinter"],
    features: [
      "Traitement des valeurs manquantes et aberrantes",
      "Analyse de variables numériques et catégorielles",
      "Comparaison de cinq familles de modèles de classification",
      "Évaluation par exactitude, précision, rappel, F1 et AUC",
    ],
    architecture: [
      "Chargement et contrôle du jeu de données",
      "Nettoyage et prétraitement",
      "Entraînement et comparaison des modèles",
      "Interface Tkinter de prédiction",
    ],
    challenges: [
      "Appliquer un prétraitement cohérent à des variables de natures différentes.",
      "Comparer les modèles avec plusieurs métriques plutôt qu’un seul score.",
    ],
    learnings: [
      "Construire un pipeline d’analyse reproductible.",
      "Interpréter les compromis entre précision, rappel, F1 et AUC.",
      "Relier un modèle entraîné à une interface utilisateur simple.",
    ],
    nextSteps: [
      "Documenter la provenance et les limites du jeu de données.",
      "Ajouter les visualisations et résultats validés au case study.",
    ],
  },
  {
    slug: "prospection-numerique-maroc",
    title: "Prospection numérique — Maroc",
    shortTitle: "Prospection",
    category: "Automatisation & données",
    summary:
      "Un système local pour collecter, structurer et qualifier des données publiques d’entreprises au Maroc.",
    problem:
      "Les recherches de prospects deviennent difficiles à exploiter lorsqu’elles sont dispersées, dupliquées et sans historique.",
    solution:
      "Un flux Python qui rassemble des données publiques, audite la présence web et conserve le suivi des campagnes dans SQLite.",
    role: "Conception du flux de collecte et du tableau de bord local",
    status: "Réalisé",
    technologies: ["Python", "SQLite", "OpenStreetMap", "Excel"],
    features: [
      "Collecte de données publiques d’entreprises",
      "Audit de présence web, déduplication et priorisation",
      "Export structuré vers Excel",
      "Historique par campagnes, notes et statuts",
    ],
    architecture: [
      "Sources de données publiques",
      "Collecte et normalisation Python",
      "Qualification et déduplication",
      "Stockage SQLite, tableau de bord local et export Excel",
    ],
    challenges: [
      "Normaliser des informations publiques provenant de recherches différentes.",
      "Conserver l’historique sans écraser les campagnes précédentes.",
    ],
    learnings: [
      "Transformer une collecte brute en données structurées et actionnables.",
      "Concevoir un suivi local persistant avec SQLite.",
      "Organiser les résultats pour un export Excel exploitable.",
    ],
    nextSteps: [
      "Préciser les fonctionnalités terminées au fil des futures versions.",
      "Ajouter des captures réelles du tableau de bord.",
    ],
  },
];
