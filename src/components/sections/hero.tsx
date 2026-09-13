import { ArrowDownRight, Code2, FileDown, UsersRound } from "lucide-react";

import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { SystemMap } from "@/components/ui/system-map";

export function Hero() {
  return (
    <section id="accueil" className="container-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
      <div>
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm font-medium">
            <span className="size-2 rounded-full bg-[var(--terracotta)]" aria-hidden="true" />
            Ouvert aux stages et opportunités junior
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Maroc · Remote</span>
        </div>
        <p className="eyebrow mb-5">Zakaria Batlamouss · Développeur Python & Data</p>
        <h1 className="display-title max-w-4xl">
          Titulaire d’un diplôme de <span className="text-[var(--cobalt)]">technicien spécialisé</span> en développement informatique.
        </h1>
        <p className="body-large text-muted mt-8 max-w-2xl">
          Je transforme Python, les données et des besoins métier concrets en applications structurées — de la gestion de stock à la prédiction et à l’automatisation.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#projets">
            Voir mes projets <ArrowDownRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={profile.cvPath} variant="secondary" download>
            <FileDown aria-hidden="true" size={18} /> Télécharger mon CV
          </ButtonLink>
        </div>
        <div className="mt-7 flex items-center gap-5 text-sm font-semibold">
          <a className="rule-link inline-flex items-center gap-2" href={profile.github} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={17} /> GitHub
          </a>
          <a className="rule-link inline-flex items-center gap-2" href={profile.linkedin} target="_blank" rel="noreferrer">
            <UsersRound aria-hidden="true" size={17} /> LinkedIn
          </a>
        </div>
      </div>
      <SystemMap />
    </section>
  );
}
