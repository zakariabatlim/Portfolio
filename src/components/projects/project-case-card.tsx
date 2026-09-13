import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/portfolio";
import { getProjectHref } from "@/lib/portfolio";
import { TechChip } from "@/components/ui/tech-chip";

export function ProjectCaseCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-8 border-t border-[var(--line)] py-10 lg:grid-cols-[11rem_1fr_1fr] lg:gap-12 lg:py-14">
      <div>
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--terracotta)]">0{index + 1}</span>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{project.category}</p>
        <span className="mt-4 inline-flex rounded-full bg-[var(--cobalt-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--cobalt)]">{project.status}</span>
      </div>
      <div>
        <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
        <p className="text-muted mt-5 max-w-xl text-lg">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <TechChip key={technology}>{technology}</TechChip>)}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="grid gap-5">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--terracotta)]">Problème</p>
            <p className="mt-2 text-sm leading-6">{project.problem}</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--cobalt)]">Solution</p>
            <p className="mt-2 text-sm leading-6">{project.solution}</p>
          </div>
        </div>
        <Link className="group inline-flex items-center gap-2 self-start font-semibold text-[var(--cobalt)]" href={getProjectHref(project.slug)}>
          Lire l’étude de cas
          <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
