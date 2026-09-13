# Portfolio — Zakaria Batlamouss

Portfolio professionnel construit avec Next.js, React, TypeScript et Tailwind CSS. Le contenu est centralisé dans des fichiers TypeScript afin de rester simple à modifier et prêt pour une évolution future.

## Lancer le projet

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

Vérifications de production :

```bash
npm test -- --run
npm run lint
npm run build
```

## Modifier le contenu

- Profil et liens : `src/data/profile.ts`
- Projets et études de cas : `src/data/projects.ts`
- Compétences et technologies en apprentissage : `src/data/skills.ts`
- Formation et parcours : `src/data/journey.ts`
- Certifications vérifiables : `src/data/certifications.ts`
- CV français : `public/documents/Zakaria_Batlamouss_CV_FR.pdf`

Pour ajouter un projet, dupliquer un objet dans `projects.ts`, choisir un `slug` unique et renseigner uniquement des informations vérifiées. La page `/projects/[slug]` est générée automatiquement.

Les boutons GitHub et démo d’un projet apparaissent seulement après ajout de `githubUrl` ou `demoUrl`. Pour une certification, renseigner l’organisme, la date et le lien de vérification dans `certifications.ts`.

## Captures de projets

La version actuelle utilise des blueprints abstraits, car aucune capture réelle n’a été fournie. Lorsque les captures seront disponibles, les ajouter sous `public/images/projects/`, puis étendre le type `Project` avec une liste d’images et les afficher avec `next/image`.

## URL du site et SEO

Copier `.env.example` en `.env.local`, puis remplacer l’URL locale par le domaine final :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

Cette valeur alimente les URL canoniques, le sitemap et `robots.txt`.

## Concepts React et Next.js utilisés

- **Composants React** : chaque section est une fonction réutilisable qui retourne son interface.
- **Props** : `ProjectCaseCard`, `ProjectSection` et les composants UI reçoivent des données typées depuis leur parent.
- **State et hooks** : `useState` et `useEffect` sont réservés au menu mobile et au thème, les seules interactions ayant besoin du navigateur.
- **Server Components** : toutes les pages et sections statiques restent côté serveur par défaut, ce qui réduit le JavaScript envoyé.
- **Client Components** : la directive `"use client"` apparaît seulement sur le menu mobile et le sélecteur de thème.
- **App Router** : les dossiers sous `src/app` définissent les routes, le layout partagé et les fichiers SEO.
- **Layouts** : `src/app/layout.tsx` centralise les polices, métadonnées et styles globaux.
- **Routes dynamiques** : `src/app/projects/[slug]/page.tsx` crée une étude de cas par projet grâce à `generateStaticParams`.
- **Metadata** : les métadonnées générales vivent dans le layout et chaque projet génère son titre, sa description et sa canonique.
- **next/image** : prévu pour les futures captures réelles ; aucune fausse capture n’est livrée dans cette version.

## Déploiement Vercel

Importer le dépôt dans Vercel, conserver les commandes Next.js détectées automatiquement et définir `NEXT_PUBLIC_SITE_URL` avec l’URL de production. Aucun service externe ni backend n’est nécessaire.
