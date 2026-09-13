import type { Project } from "@/types/portfolio";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-5 sm:p-8" aria-label={`Blueprint conceptuel du projet ${project.title}`}>
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
        <span>Flux fonctionnel</span>
        <span className="text-[var(--terracotta)]">{project.shortTitle}</span>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {project.architecture.map((item, index) => (
          <div key={item} className="relative rounded-lg border border-[var(--line)] bg-[var(--background)] p-4">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--cobalt)]">0{index + 1}</span>
            <p className="mt-8 text-sm font-semibold leading-5">{item}</p>
            {index < project.architecture.length - 1 ? <span className="absolute -bottom-3 left-1/2 z-10 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-[var(--cobalt)] text-xs text-white md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0">→</span> : null}
          </div>
        ))}
      </div>
      <p className="text-muted mt-6 text-sm">Représentation conceptuelle — les captures réelles pourront être ajoutées depuis les données du projet.</p>
    </div>
  );
}
