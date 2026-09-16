import { ArrowDownRight, FileDown } from "lucide-react";

import { profile } from "@/data/profile";
import { PixelIdentityVisual } from "@/components/sections/pixel-identity-visual";
import { ButtonLink } from "@/components/ui/button-link";

const specialties = ["Applications Python", "Outils Data", "Automatisation", "Backend"];

export function Hero() {
  return (
    <section id="accueil" className="hero-shell container-shell relative grid items-center gap-10 py-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-6 lg:py-12">
      <div className="hero-copy hero-copy-reveal relative z-10">
        <p className="eyebrow mb-4">Développeur logiciel · Python · Data</p>
        <h1 className="hero-title max-w-3xl" aria-label="Je transforme des idées en solutions concrètes.">
          <span className="block">Je transforme des idées en </span>
          <span className="hero-title-accent block">solutions concrètes.</span>
        </h1>
        <p className="hero-specialty-line">
          <span>Je développe →</span>
          <span className="sr-only">
            Applications Python, Outils Data, Automatisation et Backend.
          </span>
          <span className="hero-specialty-window" aria-hidden="true">
            {specialties.map((specialty, index) => (
              <span key={specialty} className={`hero-specialty-item hero-specialty-${index + 1}`}>
                {specialty}
              </span>
            ))}
          </span>
        </p>
        <p className="hero-description">
          Des solutions pensées pour des besoins réels.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="#projets">
            Voir mes projets <ArrowDownRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={profile.cvPath} variant="secondary" download>
            <FileDown aria-hidden="true" size={18} /> Télécharger mon CV
          </ButtonLink>
        </div>

        <div className="mt-4 flex items-center gap-5 text-sm text-[var(--muted)]">
          <a className="rule-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="rule-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="hero-status mt-7" aria-label="Disponibilité et profil">
          <p className="hero-availability">
            <span className="availability-dot" aria-hidden="true" />
            Disponible pour Stage / Junior
          </p>
          <p>Maroc · Remote</p>
          <p className="hero-qualification">Technicien spécialisé en développement informatique</p>
        </div>
      </div>

      <div className="hero-visual-column relative z-10">
        <PixelIdentityVisual />
      </div>
    </section>
  );
}
