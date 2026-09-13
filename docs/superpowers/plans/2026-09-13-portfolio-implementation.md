# Portfolio professionnel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un portfolio Next.js complet, factuel, responsive et prêt pour un déploiement Vercel pour Zakaria Batlamouss.

**Architecture:** L'App Router rend la homepage et les études de cas en Server Components. Les données TypeScript typées constituent l'unique source de vérité ; seuls le thème et le menu mobile utilisent des Client Components. Le rendu reste statique, sans backend ni CMS.

**Tech Stack:** Next.js récent, React, TypeScript, Tailwind CSS, Lucide React, Vitest, Testing Library.

**Spec:** `docs/superpowers/specs/2026-09-13-portfolio-design.md`

## Global Constraints

- Utiliser App Router et des Server Components par défaut.
- Conserver les données dans des fichiers TypeScript structurés.
- Ne jamais inventer une certification, expérience, URL de projet, métrique ou capture d'écran.
- Présenter React, Next.js, TypeScript, FastAPI, Docker et Cloud comme technologies en exploration.
- Utiliser le CV réel `Zakaria_Batlamouss_CV_FR.pdf`.
- Respecter le thème clair ivoire/charbon/cobalt/terracotta et fournir un mode sombre accessible.
- Ne pas ajouter de backend, CMS, formulaire distant, Three.js ou dépendance d'animation lourde.
- Vérifier les largeurs 375, 768, 1024 et 1440 pixels.

---

## File Map

- `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`: configuration du projet.
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`: enveloppe, homepage et design system.
- `src/app/projects/[slug]/page.tsx`: études de cas statiques.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/icon.svg`: SEO technique et identité.
- `src/types/portfolio.ts`: contrats de données.
- `src/data/profile.ts`, `projects.ts`, `skills.ts`, `journey.ts`, `certifications.ts`: contenu modifiable.
- `src/lib/portfolio.ts`: accès aux projets et génération d'URL.
- `src/components/layout/*`: navigation, menu mobile et footer.
- `src/components/sections/*`: sections de la homepage.
- `src/components/projects/*`: présentation réutilisable des projets.
- `src/components/ui/*`: boutons, titres de section, chips et illustration abstraite.
- `src/components/theme/*`: initialisation et contrôle du thème.
- `src/__tests__/*`: tests comportementaux des données, routes et liens conditionnels.
- `public/documents/Zakaria_Batlamouss_CV_FR.pdf`: CV téléchargeable.

---

### Task 1: Socle Next.js et contrats de données

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `src/test/setup.ts`
- Create: `src/types/portfolio.ts`
- Create: `src/data/profile.ts`, `src/data/projects.ts`, `src/data/skills.ts`, `src/data/journey.ts`, `src/data/certifications.ts`
- Create: `src/lib/portfolio.ts`
- Test: `src/__tests__/portfolio-data.test.ts`

**Interfaces:**
- Produces: `Project`, `SkillGroup`, `JourneyItem`, `Certification`, `Profile`; `getProject(slug: string): Project | undefined`; `getProjectHref(slug: string): string`.

- [ ] **Step 1: Écrire les tests de données en échec**

```ts
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { getProject, getProjectHref } from "@/lib/portfolio";

describe("portfolio data", () => {
  it("expose exactly the three factual case studies", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "stockflow",
      "credit-risk-prediction",
      "prospection-numerique-maroc",
    ]);
  });

  it("does not render invented project links", () => {
    expect(projects.every((project) => !project.githubUrl && !project.demoUrl)).toBe(true);
  });

  it("keeps certifications empty until verified data exists", () => {
    expect(certifications).toEqual([]);
  });

  it("resolves project routes", () => {
    expect(getProject("stockflow")?.title).toBe("StockFlow");
    expect(getProjectHref("stockflow")).toBe("/projects/stockflow");
  });
});
```

- [ ] **Step 2: Installer les dépendances et vérifier l'échec attendu**

Run: `npm install && npm test -- --run src/__tests__/portfolio-data.test.ts`

Expected: FAIL parce que les modules de données n'existent pas encore.

- [ ] **Step 3: Ajouter la configuration, les types et les données factuelles**

Créer les scripts et dépendances, puis laisser `npm install` résoudre et verrouiller les versions récentes compatibles dans `package-lock.json` :

```json
{
  "name": "zakaria-batlamouss-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test": "vitest"
  },
  "dependencies": {
    "lucide-react": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "latest",
    "@testing-library/jest-dom": "latest",
    "@testing-library/react": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "jsdom": "latest",
    "tailwindcss": "latest",
    "typescript": "latest",
    "vitest": "latest"
  }
}
```

Configurer Vitest avec l'alias `@` vers `src`, l'environnement `jsdom` et `src/test/setup.ts` chargeant `@testing-library/jest-dom/vitest`. Configurer Next.js en rendu standard compatible Vercel, TypeScript strict et Tailwind via `@tailwindcss/postcss`.

```ts
export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  status: "Terminé" | "En cours";
  technologies: string[];
  features: string[];
  architecture: string[];
  challenges: string[];
  learnings: string[];
  nextSteps: string[];
  githubUrl?: string;
  demoUrl?: string;
}
```

Créer ensuite les trois objets avec les slugs, titres, technologies et fonctionnalités exactes listées dans la spécification. Les champs éditoriaux utilisent uniquement ces formulations factuelles : StockFlow résout la centralisation du suivi de stock ; le projet crédit structure la préparation et la comparaison de modèles ; le projet de prospection structure des données publiques et le suivi de campagnes. Implémenter :

```ts
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getProjectHref = (slug: string) => `/projects/${slug}`;
```

- [ ] **Step 4: Vérifier le test**

Run: `npm test -- --run src/__tests__/portfolio-data.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs src/types src/data src/lib src/__tests__
git commit -m "feat: scaffold typed portfolio data"
```

---

### Task 2: Design system, thème et navigation

**Files:**
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/icon.svg`
- Create: `src/components/theme/theme-script.tsx`, `src/components/theme/theme-toggle.tsx`
- Create: `src/components/layout/site-header.tsx`, `src/components/layout/mobile-nav.tsx`
- Create: `src/components/ui/button-link.tsx`, `src/components/ui/section-heading.tsx`, `src/components/ui/tech-chip.tsx`
- Test: `src/__tests__/navigation.test.tsx`

**Interfaces:**
- Consumes: `profile` from `src/data/profile.ts`.
- Produces: `SiteHeader`, `ButtonLink`, `SectionHeading`, `TechChip`, light/dark theme persistence under `portfolio-theme`.

- [ ] **Step 1: Écrire le test de navigation en échec**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("offers navigation, real social links and the real CV", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: /projets/i })).toHaveAttribute("href", "/#projets");
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute("href", "https://github.com/zakariabatlim");
    expect(screen.getByRole("link", { name: /cv/i })).toHaveAttribute("href", "/documents/Zakaria_Batlamouss_CV_FR.pdf");
    expect(screen.getByRole("button", { name: /thème/i })).toBeVisible();
  });
});
```

- [ ] **Step 2: Vérifier l'échec**

Run: `npm test -- --run src/__tests__/navigation.test.tsx`

Expected: FAIL avec `SiteHeader` introuvable.

- [ ] **Step 3: Implémenter les tokens et composants**

Définir les variables claires et sombres dans `globals.css`, le layout avec `next/font`, le script de thème exécuté avant hydratation, le toggle accessible et une navigation mobile contrôlée par état React. Utiliser `aria-expanded`, `aria-controls`, un focus visible et fermer le menu après sélection.

```css
:root {
  --background: #f7f5ef;
  --foreground: #171a21;
  --surface: #eef0f2;
  --line: #d7dbe0;
  --cobalt: #1747d1;
  --terracotta: #b95f43;
}

[data-theme="dark"] {
  --background: #11141a;
  --foreground: #f4f1e9;
  --surface: #1a1f29;
  --line: #303746;
  --cobalt: #7d9cff;
  --terracotta: #e08a69;
}
```

- [ ] **Step 4: Vérifier le test**

Run: `npm test -- --run src/__tests__/navigation.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app src/components/theme src/components/layout src/components/ui src/__tests__/navigation.test.tsx
git commit -m "feat: add editorial theme and navigation"
```

---

### Task 3: Homepage éditoriale complète

**Files:**
- Create: `src/components/sections/hero.tsx`, `about.tsx`, `featured-projects.tsx`, `skills.tsx`, `journey.tsx`, `certifications.tsx`, `currently-learning.tsx`, `contact.tsx`
- Create: `src/components/projects/project-case-card.tsx`
- Create: `src/components/ui/system-map.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/app/page.tsx`
- Test: `src/__tests__/homepage.test.tsx`

**Interfaces:**
- Consumes: toutes les sources de `src/data` et `getProjectHref`.
- Produces: homepage sémantique avec les identifiants `accueil`, `a-propos`, `projets`, `competences`, `parcours`, `certifications`, `contact`.

- [ ] **Step 1: Écrire le test de contenu en échec**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("homepage", () => {
  it("presents the factual profile and all three featured projects", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/technicien spécialisé/i);
    expect(screen.getByRole("heading", { name: "StockFlow" })).toBeVisible();
    expect(screen.getByRole("heading", { name: /risque de crédit/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /prospection numérique/i })).toBeVisible();
  });

  it("labels technologies still being learned", () => {
    render(<Home />);
    expect(screen.getByText("Currently exploring")).toBeVisible();
    expect(screen.getByText("Next.js")).toBeVisible();
  });
});
```

- [ ] **Step 2: Vérifier l'échec**

Run: `npm test -- --run src/__tests__/homepage.test.tsx`

Expected: FAIL parce que la homepage n'existe pas.

- [ ] **Step 3: Construire la homepage**

Composer les sections avec des composants focalisés. Le Hero affiche le diplôme, le positionnement, les CTA et la carte abstraite. Les projets utilisent un rythme alterné et rendent les liens GitHub/démo uniquement lorsqu'ils existent. La section Certifications rend un message honnête lorsque le tableau est vide. Le contact utilise `mailto:zakaria.batlim2@gmail.com`.

```tsx
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Journey />
        <Certifications />
        <CurrentlyLearning />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 4: Vérifier le test**

Run: `npm test -- --run src/__tests__/homepage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/sections src/components/projects src/components/ui/system-map.tsx src/components/layout/site-footer.tsx src/__tests__/homepage.test.tsx
git commit -m "feat: build editorial portfolio homepage"
```

---

### Task 4: Études de cas dynamiques et SEO

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`
- Create: `src/components/projects/project-hero.tsx`, `project-section.tsx`, `project-visual.tsx`, `project-links.tsx`
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`
- Test: `src/__tests__/project-pages.test.tsx`, `src/__tests__/seo.test.ts`

**Interfaces:**
- Consumes: `projects`, `getProject`, `profile.siteUrl`.
- Produces: `generateStaticParams()`, `generateMetadata({ params })`, `sitemap()` et `robots()`.

- [ ] **Step 1: Écrire les tests de routes en échec**

```ts
import { describe, expect, it } from "vitest";
import { generateStaticParams } from "@/app/projects/[slug]/page";
import sitemap from "@/app/sitemap";

describe("project routes and SEO", () => {
  it("pre-renders every project", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "stockflow" },
      { slug: "credit-risk-prediction" },
      { slug: "prospection-numerique-maroc" },
    ]);
  });

  it("includes every case study in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls.some((url) => url.endsWith("/projects/stockflow"))).toBe(true);
  });
});
```

- [ ] **Step 2: Vérifier l'échec**

Run: `npm test -- --run src/__tests__/project-pages.test.tsx src/__tests__/seo.test.ts`

Expected: FAIL avec modules de routes introuvables.

- [ ] **Step 3: Implémenter les pages et métadonnées**

Utiliser `notFound()` pour un slug inconnu, générer les métadonnées depuis chaque projet et rendre les sections Contexte, Problème, Solution, Fonctionnalités, Architecture, Technologies, Difficultés, Apprentissages et Améliorations futures. Ne rendre `ProjectLinks` que pour les URLs définies.

```ts
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}
```

- [ ] **Step 4: Vérifier les tests**

Run: `npm test -- --run src/__tests__/project-pages.test.tsx src/__tests__/seo.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/projects src/app/sitemap.ts src/app/robots.ts src/components/projects src/__tests__/project-pages.test.tsx src/__tests__/seo.test.ts
git commit -m "feat: add project case studies and SEO"
```

---

### Task 5: CV, documentation et vérification finale

**Files:**
- Create: `public/documents/Zakaria_Batlamouss_CV_FR.pdf`
- Create: `.env.example`, `README.md`
- Modify: any file implicated by verification findings

**Interfaces:**
- Consumes: application complète.
- Produces: projet documenté, compilable et prêt pour Vercel.

- [ ] **Step 1: Copier le CV réel et vérifier son empreinte**

Run: `Copy-Item -LiteralPath 'C:\Users\zakar\Downloads\Zakaria_Batlamouss_CV_FR.pdf' -Destination 'public\documents\Zakaria_Batlamouss_CV_FR.pdf'`

Run: `Get-FileHash 'C:\Users\zakar\Downloads\Zakaria_Batlamouss_CV_FR.pdf'; Get-FileHash 'public\documents\Zakaria_Batlamouss_CV_FR.pdf'`

Expected: les deux empreintes SHA256 sont identiques.

- [ ] **Step 2: Documenter le lancement et la personnalisation**

Le README doit contenir `npm install`, `npm run dev`, `npm run build`, l'emplacement des fichiers `src/data`, la procédure de remplacement des liens/captures/certifications et la variable :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- [ ] **Step 3: Exécuter la suite complète**

Run: `npm test -- --run`

Expected: tous les tests passent, zéro échec.

- [ ] **Step 4: Vérifier qualité et compilation**

Run: `npm run lint`

Expected: zéro erreur.

Run: `npm run build`

Expected: build Next.js terminé avec succès et quatre routes statiques de contenu au minimum.

- [ ] **Step 5: Vérifier visuellement et au clavier**

Lancer `npm run dev`, ouvrir la homepage et `/projects/stockflow`, puis contrôler 375, 768, 1024 et 1440 pixels en clair et sombre. Vérifier menu mobile, toggle, CTA, focus visible, absence de débordement horizontal, réduction des animations et téléchargement du CV.

- [ ] **Step 6: Refaire le contrôle anti-copie**

Comparer le résultat à `https://www.elmachhoune.me/` et confirmer : palette distincte, Hero sans portrait, cartes et grille différentes, aucune copie de texte, aucune reprise des témoignages/logos et mouvement distinct.

- [ ] **Step 7: Commit final**

```bash
git add public/documents .env.example README.md src
git commit -m "docs: prepare portfolio for deployment"
```
