import { ArrowDownRight, FileDown } from "lucide-react";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HeroProjectCard } from "@/components/projects/hero-project-card";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section id="accueil" className="hero-shell container-shell relative grid items-center gap-10 py-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:py-12">
      <div className="hero-copy relative z-10">
        <p className="eyebrow hero-reveal hero-delay-1 mb-4">Développeur logiciel · Python · Data</p>
        <h1 className="hero-title hero-title-reveal max-w-3xl">
          Je construis des solutions logicielles qui relient le <span className="hero-accent">code</span>, les <span className="hero-accent">données</span> et les besoins réels.
        </h1>
        <p className="hero-reveal hero-delay-3 mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          Je transforme des besoins concrets en applications structurées, de la gestion de stock au machine learning et à l’automatisation.
        </p>

        <div className="hero-reveal hero-delay-4 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="#projets">
            Voir mes projets <ArrowDownRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={profile.cvPath} variant="secondary" download>
            <FileDown aria-hidden="true" size={18} /> Télécharger mon CV
          </ButtonLink>
        </div>

        <div className="hero-reveal hero-delay-5 mt-4 flex items-center gap-5 text-sm text-[var(--muted)]">
          <a className="rule-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="rule-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="hero-status hero-reveal hero-delay-6 mt-7" aria-label="Disponibilité et profil">
          <p className="hero-availability">
            <span className="availability-dot" aria-hidden="true" />
            Disponible pour Stage / Junior
          </p>
          <p>Maroc · Remote</p>
          <p className="hero-qualification">Technicien spécialisé en développement informatique</p>
        </div>
      </div>

      <div className="hero-projects relative z-10 grid gap-4" aria-label="Projets sélectionnés">
        {projects.slice(0, 3).map((project, index) => (
          <HeroProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
