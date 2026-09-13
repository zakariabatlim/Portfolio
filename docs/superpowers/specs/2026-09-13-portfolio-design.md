# Portfolio professionnel de Zakaria Batlamouss - Spécification de conception

## 1. Objectif et public

Le site présente Zakaria Batlamouss aux recruteurs, responsables RH, responsables techniques et clients potentiels. Il doit faciliter trois décisions : comprendre rapidement son profil, évaluer ses compétences à travers des projets concrets et le contacter pour un stage, une opportunité junior ou une mission freelance adaptée à son niveau.

La communication reste factuelle. Zakaria est présenté comme titulaire d'un diplôme de technicien spécialisé en développement informatique à MIAGE. Les technologies encore en apprentissage sont identifiées comme telles. Aucun utilisateur, client, revenu, résultat commercial, certification ou niveau de maîtrise non fourni n'est inventé.

## 2. Direction visuelle

Le concept retenu est « Dossier éditorial technique » : une publication numérique contemporaine combinant la lisibilité d'un dossier de candidature et la précision visuelle d'un schéma logiciel.

- Thème principal clair : ivoire, texte charbon, surfaces gris froid très léger.
- Couleur principale : bleu cobalt, utilisée pour les actions, repères et liens.
- Accent secondaire : terracotta, limité à quelques numéros et détails éditoriaux.
- Thème sombre : charbon profond, surfaces bleutées sombres et accents conservant un contraste accessible.
- Typographie : sans-serif éditoriale pour les titres et le texte ; monospace seulement pour les libellés techniques et métadonnées.
- Formes : lignes fines, rayons modérés, grandes zones typographiques et compositions asymétriques. Pas de glassmorphism, néons, terminal, blobs ou effets 3D.
- Élément mémorable : le Hero contient une « carte de construction » abstraite reliant Software, Python, Backend et Data/AI comme les modules d'un produit en cours d'évolution.
- Mouvement : révélations légères et micro-interactions respectant `prefers-reduced-motion`.

Cette direction se distingue du site de référence par sa palette claire, son Hero sans portrait circulaire, son absence de témoignages et de logos clients, ses projets structurés comme études de cas et sa composition inspirée d'un dossier technique.

## 3. Contenu factuel

### Identité

- Nom : Zakaria Batlamouss
- Initiales : ZB
- Localisation : Maroc
- Email : zakaria.batlim2@gmail.com
- GitHub : https://github.com/zakariabatlim
- LinkedIn : https://www.linkedin.com/in/zakaria-batlamouss
- Formation : titulaire d'un diplôme de technicien spécialisé en développement informatique, MIAGE
- Positionnement : développeur Python junior, données, IA et automatisation

### Projets présentés

1. **StockFlow** - application de bureau de gestion de stock en Python, Tkinter/ttk, PostgreSQL et psycopg2. Fonctionnalités déclarées : authentification, tableau de bord, CRUD produits/catégories/fournisseurs, entrées-sorties, historique, recherche, filtres et rôles administrateur/gestionnaire.
2. **Prédiction du risque de crédit** - préparation et exploration de 32 581 dossiers, comparaison de modèles de classification et interface simple de prédiction avec Python, Pandas, NumPy, scikit-learn et Tkinter.
3. **Prospection numérique - Maroc** - collecte de données publiques d'entreprises, audit de présence web, déduplication, priorisation, export Excel et tableau de bord local avec Python, SQLite et OpenStreetMap.

Les liens GitHub et démos de chaque projet restent absents tant qu'ils ne sont pas fournis. L'interface affiche uniquement les actions réellement disponibles.

### Compétences et apprentissage

- Python et données : Python, Pandas, NumPy, Matplotlib, nettoyage et transformation, fichiers, extraction web.
- Machine Learning : scikit-learn, classification, régression logistique, KNN, arbre de décision, Random Forest, SVM linéaire, K-Means et évaluation.
- Bases de données et applications : SQL, PostgreSQL, SQLite, psycopg2, Tkinter/ttk, CRUD et rôles.
- Outils et fondamentaux : Git, GitHub, architecture Python modulaire, bases HTTP/JSON, API Web et export Excel.
- En exploration : React, Next.js, TypeScript, FastAPI, Docker et Cloud. Ces éléments sont visuellement séparés des compétences pratiquées.

### Parcours

- MIAGE - diplôme de technicien spécialisé en développement informatique.
- GoMyCode - Python pratique et introduction à l'IA, 2026.
- Parcours Ingénierie IA - en cours.

La section Certifications n'affiche aucune fausse carte. Elle indique sobrement que les certifications vérifiables seront ajoutées ultérieurement, avec une structure de données vide prête à évoluer.

## 4. Architecture de l'expérience

### Navigation

Navigation sticky avec marque ZB, liens vers Accueil, À propos, Projets, Compétences, Parcours et Contact. Les accès GitHub, LinkedIn, CV et thème clair/sombre restent directement accessibles. Le menu mobile est clavier-compatible, refermable et correctement annoncé aux technologies d'assistance.

### Homepage

1. Hero répondant à l'identité, aux domaines de travail et aux opportunités recherchées.
2. À propos court avec indicateurs Formation, Focus et Disponibilité.
3. Projets sélectionnés, section dominante, présentés comme mini études de cas.
4. Compétences regroupées par pratiques réelles.
5. Parcours sous forme de timeline éditoriale.
6. Zone Certifications sans contenu fictif.
7. Currently exploring, distinct des compétences.
8. Contact avec `mailto`, email, GitHub et LinkedIn.
9. Footer avec année dynamique et mention « Built with Next.js ».

### Pages projets

Chaque projet possède une route statiquement générée `/projects/[slug]`. La page affiche : Hero, contexte, problème, solution, fonctionnalités, architecture, technologies, captures disponibles, difficultés, apprentissages, améliorations futures et liens disponibles. Les sections sans information factuelle sont rédigées prudemment à partir du CV ou signalées dans les données comme contenu à compléter avant publication.

Les captures d'écran absentes sont remplacées par une composition graphique abstraite et non par une fausse interface présentée comme réelle. Cette composition est explicitement décorative et possède un texte alternatif adapté.

## 5. Architecture technique

- Next.js récent avec App Router, React, TypeScript et Tailwind CSS.
- Server Components par défaut pour la page d'accueil, les sections et les pages projets.
- Client Components uniquement pour le sélecteur de thème, le menu mobile et les animations nécessitant le navigateur.
- `src/data` centralise le profil, les projets, les compétences, le parcours et les certifications.
- `src/types` décrit les structures de données.
- `src/components/layout`, `sections`, `projects` et `ui` séparent les responsabilités sans architecture excessive.
- Le PDF du CV est copié dans `public/documents/Zakaria_Batlamouss_CV_FR.pdf` et téléchargé depuis les boutons CV.
- Les illustrations techniques sont réalisées en CSS/SVG non représentatif ; aucune image générée ou photo n'est nécessaire.
- Aucun backend, CMS, base de données ou formulaire distant n'est ajouté.

## 6. SEO, accessibilité et performance

- Métadonnées racine et métadonnées dynamiques par projet.
- URL canonique configurable par variable d'environnement avec une valeur locale sûre par défaut.
- Open Graph et Twitter cards textuelles ; aucune image sociale n'est inventée.
- `sitemap.ts`, `robots.ts` et favicon SVG ZB.
- Structure sémantique, ordre logique des titres, focus visible, contrastes contrôlés, libellés accessibles et navigation clavier.
- Mise en page mobile-first vérifiée aux largeurs 375, 768, 1024 et 1440 pixels.
- Polices optimisées avec `next/font`, chargement d'images avec `next/image` lorsque des captures réelles seront ajoutées, rendu statique des pages projets et JavaScript client réduit.

## 7. États et comportements

- Le thème suit initialement la préférence système, peut être changé manuellement et persiste localement.
- Le menu mobile se ferme après navigation et ne masque pas le focus.
- Les boutons GitHub ou démo d'un projet ne sont rendus que si leur URL existe.
- Le CV pointe toujours vers le fichier réel fourni.
- Le contact ouvre le client email avec une adresse préremplie ; aucun message n'est stocké.
- Les animations sont désactivées ou fortement réduites selon la préférence utilisateur.

## 8. Vérification

- Tests unitaires ciblés sur les fonctions de données et la disponibilité conditionnelle des liens.
- Vérification TypeScript et lint.
- `npm run build` comme validation finale obligatoire.
- Contrôle visuel de la page d'accueil et d'au moins une page projet aux quatre largeurs demandées, en clair et sombre.
- Vérification clavier des éléments interactifs et contrôle de l'absence de débordement horizontal.
- Comparaison conceptuelle finale avec la référence pour confirmer l'absence de reprise de palette, Hero, cartes, typographie, textes, animations ou composition.

## 9. Critères d'acceptation

Le livrable est accepté lorsque le projet se lance localement, compile sans erreur, expose la homepage et trois études de cas, utilise le CV fourni, n'affiche aucune donnée personnelle fictive, reste responsive et accessible, offre les deux thèmes et peut être déployé sur Vercel avec des instructions simples de personnalisation.
