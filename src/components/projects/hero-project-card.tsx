import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/portfolio";

interface HeroProjectCardProps {
  project: Project;
  index: number;
}

export function HeroProjectCard({ project, index }: HeroProjectCardProps) {
  return (
    <article
      aria-label={`Projet ${project.shortTitle}`}
      className={`hero-project-card hero-reveal hero-card-delay-${index + 1}`}
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Voir le projet ${project.shortTitle}`}
        className="hero-project-link group"
      >
        <span className="hero-project-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="hero-project-content">
          <span className="hero-project-category">{project.category}</span>
          <strong className="hero-project-title">{project.shortTitle}</strong>
          <p className="hero-project-summary">{project.summary}</p>
          <ul
            className="hero-project-technologies"
            aria-label={`Technologies de ${project.shortTitle}`}
          >
            {project.technologies.slice(0, 3).map((technology) => (
              <li className="tech-chip" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <ArrowUpRight className="hero-project-arrow" aria-hidden="true" size={19} />
      </Link>
    </article>
  );
}
