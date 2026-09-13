import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projectProofs = [
  { slug: "stockflow", title: "StockFlow", category: "Application desktop", stack: "Python · PostgreSQL", output: "Application" },
  { slug: "credit-risk-prediction", title: "Credit Risk", category: "Machine learning", stack: "Pandas · scikit-learn", output: "Classification" },
  { slug: "prospection-numerique-maroc", title: "Prospection", category: "Automatisation & Data", stack: "Python · SQLite", output: "Outil métier" },
];

export function SystemMap() {
  return (
    <aside className="proof-deck overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 shadow-[var(--shadow)] sm:p-5" aria-label="Trois projets réalisés">
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        <span>Selected systems / 03</span>
        <span className="inline-flex items-center gap-2 text-[var(--terracotta)]">
          <span className="size-1.5 rounded-full bg-current" aria-hidden="true" /> Réalisés
        </span>
      </div>

      <div className="mt-3 grid gap-2">
        {projectProofs.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            aria-label={`Voir le projet ${project.title}`}
            className="project-signal group grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-lg border border-[var(--line)] bg-[var(--background)] p-3 no-underline"
          >
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--cobalt)]">0{index + 1}</span>
            <span className="min-w-0">
              <span className="block font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.11em] text-[var(--muted)]">{project.category}</span>
              <strong className="mt-0.5 block text-base font-semibold tracking-[-0.02em]">{project.title}</strong>
              <span className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted)]">
                <span>{project.stack}</span><span aria-hidden="true">→</span><span>{project.output}</span>
              </span>
            </span>
            <ArrowUpRight aria-hidden="true" size={17} className="text-[var(--muted)] transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--cobalt)] group-focus-visible:text-[var(--cobalt)]" />
          </Link>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.1em] text-[var(--muted)]">
        <span className="h-px flex-1 bg-[var(--line)]" />
        Code · Données · Usage
      </div>
    </aside>
  );
}
