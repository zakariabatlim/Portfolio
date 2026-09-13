import { ArrowDownRight, Code2, FileDown, GraduationCap, MapPin, UsersRound } from "lucide-react";

import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { SystemMap } from "@/components/ui/system-map";

export function Hero() {
  return (
    <section id="accueil" className="hero-shell container-shell relative grid items-center gap-10 py-4 sm:py-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:py-8">
      <div className="hero-copy">
        <p className="eyebrow hero-reveal hero-delay-1 mb-2 sm:mb-3">Zakaria Batlamouss — Développeur Python & Data</p>
        <p className="hero-reveal hero-delay-2 mb-3 font-[family-name:var(--font-mono)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:mb-4 sm:text-xs">
          SOFTWARE · PYTHON · BACKEND · DATA/AI
        </p>
        <h1 className="hero-title hero-title-reveal max-w-3xl">
          Je construis des solutions logicielles qui relient le <span className="hero-accent">code, les données</span> et les besoins réels.
        </h1>
        <p className="hero-reveal hero-delay-4 mt-4 max-w-2xl text-[0.95rem] leading-6 text-[var(--muted)] sm:mt-5 sm:text-lg sm:leading-7">
          De la gestion de stock au machine learning et à l’automatisation, je transforme des besoins concrets en applications structurées.
        </p>

        <div className="hero-reveal hero-delay-5 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[var(--line)] py-3 text-xs sm:mt-5 sm:text-sm">
          <span className="inline-flex items-center gap-2 font-semibold">
            <GraduationCap aria-hidden="true" size={17} className="text-[var(--cobalt)]" />
            Diplômé MIAGE · Technicien spécialisé en développement informatique
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--muted)]">3 projets réalisés</span>
        </div>

        <div className="hero-reveal hero-delay-6 mt-3 flex flex-wrap items-center gap-3 text-sm sm:mt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 font-medium">
            <span className="availability-dot size-2 rounded-full bg-[var(--terracotta)]" aria-hidden="true" />
            Disponible · Stage / Junior
          </span>
          <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
            <MapPin aria-hidden="true" size={14} /> Maroc · Remote
          </span>
        </div>

        <div className="hero-reveal hero-delay-7 mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="#projets">
            Voir mes projets <ArrowDownRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={profile.cvPath} variant="secondary" download>
            <FileDown aria-hidden="true" size={18} /> Télécharger mon CV
          </ButtonLink>
          <div className="flex items-center justify-center gap-5 px-1 text-sm font-semibold sm:justify-start">
            <a className="rule-link inline-flex items-center gap-2" href={profile.github} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={17} /> GitHub
            </a>
            <a className="rule-link inline-flex items-center gap-2" href={profile.linkedin} target="_blank" rel="noreferrer">
              <UsersRound aria-hidden="true" size={17} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="hero-reveal hero-delay-5">
        <SystemMap />
      </div>

      <a className="hero-next rule-link absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-[var(--muted)] lg:flex" href="#projets">
        Selected work <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
