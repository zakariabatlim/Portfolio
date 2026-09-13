import Link from "next/link";

import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="container-shell flex flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <nav aria-label="Navigation de pied de page" className="flex flex-wrap gap-5">
          <Link className="rule-link" href="/#projets">Projets</Link>
          <a className="rule-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="rule-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <Link className="rule-link" href="/#accueil">Haut de page</Link>
        </nav>
      </div>
    </footer>
  );
}
