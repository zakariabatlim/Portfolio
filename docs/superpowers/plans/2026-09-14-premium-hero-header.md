# Premium Header and Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer uniquement le Header, le Hero et son aperçu des projets pour produire une première impression dark premium, claire, responsive et accessible.

**Architecture:** Conserver les composants serveur existants et les données de `src/data/projects.ts`. Remplacer le `SystemMap` autonome par un composant `HeroProjectCard` réutilisable et une liste légère de trois projets, puis simplifier la navigation et centraliser les styles spécifiques dans `globals.css` sans dépendance supplémentaire.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, CSS global ciblé, Vitest et Testing Library.

**Spec:** `C:/Users/zakar/.codex/attachments/2a0b5d42-d065-4544-a352-c5ad949bf09e/pasted-text.txt`

## Global Constraints

- Modifier uniquement le Header, le Hero, l’aperçu projets et leurs tests/styles nécessaires.
- Conserver toutes les autres sections et leurs données.
- Ne pas installer de nouvelle dépendance.
- Utiliser uniquement les trois projets réels de `src/data/projects.ts`.
- Afficher seulement deux CTA principaux dans le Hero.
- Respecter `prefers-reduced-motion`, le focus visible, le clavier et l’absence de défilement horizontal.
- Le H1 doit rester l’élément visuellement dominant et ne pas dépasser 56 px sur desktop.
- Conserver le thème clair fonctionnel tout en optimisant l’expérience dark premium.

---

### Task 1: Header, Hero and project preview

**Files:**
- Modify: `src/__tests__/hero.test.tsx`
- Modify: `src/__tests__/navigation.test.tsx`
- Modify: `src/data/navigation.ts`
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/mobile-nav.tsx`
- Modify: `src/components/sections/hero.tsx`
- Create: `src/components/projects/hero-project-card.tsx`
- Delete: `src/components/ui/system-map.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `projects: Project[]` from `src/data/projects.ts` and `profile` from `src/data/profile.ts`.
- Produces: `HeroProjectCard({ project, index })`, three project-detail links, a simplified desktop/mobile navigation, and an accessible compact profile status.

- [x] **Step 1: Write failing behavior tests**

Update the Hero tests to assert the intended public behavior:

```tsx
expect(screen.getByText("Développeur logiciel · Python · Data")).toBeVisible();
expect(screen.queryByText(/SOFTWARE · PYTHON/i)).not.toBeInTheDocument();
expect(screen.queryByText(/3 projets réalisés/i)).not.toBeInTheDocument();
expect(screen.queryByText(/Selected systems/i)).not.toBeInTheDocument();
expect(screen.getByRole("link", { name: "Voir mes projets" })).toHaveAttribute("href", "#projets");
expect(screen.getByRole("link", { name: /Télécharger mon CV/i })).toHaveAttribute("download");
expect(screen.getAllByRole("article", { name: /Projet/i })).toHaveLength(3);
```

Update the Header test to verify its reduced primary navigation:

```tsx
const navigation = screen.getByRole("navigation", { name: "Navigation principale" });
expect(within(navigation).getAllByRole("link")).toHaveLength(3);
expect(within(navigation).getByRole("link", { name: "Projets" })).toBeVisible();
expect(within(navigation).getByRole("link", { name: "Parcours" })).toBeVisible();
expect(within(navigation).getByRole("link", { name: "Contact" })).toBeVisible();
expect(screen.queryByRole("link", { name: /GitHub de Zakaria/i })).not.toBeInTheDocument();
```

- [x] **Step 2: Run tests and verify RED**

Run: `npm test -- --run src/__tests__/hero.test.tsx src/__tests__/navigation.test.tsx`

Expected: FAIL because the old metadata, five-link navigation and `SystemMap` are still rendered.

- [x] **Step 3: Implement the simplified Header and mobile menu**

Reduce `navigationLinks` to exactly these links and retain the separate CV action:

```ts
export const navigationLinks = [
  { label: "Projets", href: "/#projets" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
] as const;
```

Remove social icons from `SiteHeader`, keep the identity, restrained CV action, theme control and accessible mobile menu.

- [x] **Step 4: Implement the reusable project preview**

Create a semantic card consuming the existing project object:

```tsx
interface HeroProjectCardProps {
  project: Project;
  index: number;
}

export function HeroProjectCard({ project, index }: HeroProjectCardProps) {
  const technologies = project.technologies.slice(0, 3);
  return (
    <article aria-label={`Projet ${project.shortTitle}`} className="hero-project-card">
      <Link href={`/projects/${project.slug}`} aria-label={`Voir le projet ${project.shortTitle}`}>
        <span>{project.category}</span>
        <h2>{project.shortTitle}</h2>
        <p>{project.summary}</p>
        <ul aria-label={`Technologies de ${project.shortTitle}`}>
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
```

Delete `SystemMap` after all imports are removed. The three cards must use `projects.slice(0, 3)` rather than duplicate project facts.

- [x] **Step 5: Implement the Hero hierarchy**

Render one eyebrow, the existing value-oriented H1 with separate gradient spans for `code` and `données`, a concise description, exactly two button CTA elements, minimal GitHub/LinkedIn text links, then one compact status/formation block. Place the three cards in the right column without an enclosing dashboard panel.

- [x] **Step 6: Implement premium responsive styling**

Use a maximum content width of about 1280 px, a 55/45 desktop grid, `min-height: calc(100svh - 4.5rem)`, `clamp()` typography capped at 3.5rem, a subtle ambient pseudo-element glow, staggered opacity/translate reveals, full-width mobile CTA buttons, independent cards with `translateY(-4px)` hover and visible focus. Ensure the reduced-motion media query disables all movement.

- [x] **Step 7: Verify GREEN and regressions**

Run:

```powershell
npm test -- --run src/__tests__/hero.test.tsx src/__tests__/navigation.test.tsx
npm test -- --run
npm run lint
npm run build
```

Expected: all commands exit successfully with no errors.

- [x] **Step 8: Perform responsive visual QA**

Start with `npm run dev`, inspect `/` at 375×812, 1024×768 and 1440×900 in dark and light themes, and verify the CTA/navigation links plus all three project links. Confirm no horizontal overflow and no first-viewport crowding on desktop.

- [ ] **Step 9: Commit only scoped files**

```powershell
git add docs/superpowers/plans/2026-09-14-premium-hero-header.md src/__tests__/hero.test.tsx src/__tests__/navigation.test.tsx src/data/navigation.ts src/components/layout/site-header.tsx src/components/layout/mobile-nav.tsx src/components/sections/hero.tsx src/components/projects/hero-project-card.tsx src/components/ui/system-map.tsx src/app/globals.css
git commit -m "feat: refine premium portfolio hero"
```

Do not stage `next-env.d.ts`, `.vscode/`, or any unrelated user changes.
