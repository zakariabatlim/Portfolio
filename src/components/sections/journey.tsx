import { journey } from "@/data/journey";
import { SectionHeading } from "@/components/ui/section-heading";

export function Journey() {
  return (
    <section id="parcours" className="section-block bg-[var(--surface)]">
      <div className="container-shell">
        <SectionHeading index="04" eyebrow="Parcours" title="Une trajectoire qui se construit par la pratique." description="Formation, projets et approfondissement progressif vers le backend et l’ingénierie IA." />
        <ol className="mt-14 ml-3 border-l border-[var(--line)] lg:ml-[12.5rem]">
          {journey.map((item) => (
            <li key={`${item.title}-${item.period}`} className="relative grid gap-4 border-b border-[var(--line)] py-8 pl-8 md:grid-cols-[9rem_1fr] md:gap-8">
              <span className="absolute -left-1.5 top-10 size-3 rounded-full border-2 border-[var(--surface)] bg-[var(--terracotta)]" aria-hidden="true" />
              <div>
                <span className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--cobalt)]">{item.type}</span>
                <span className="text-muted mt-2 block text-sm">{item.period}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                  {item.status ? <span className="rounded-full bg-[var(--cobalt-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--cobalt)]">{item.status}</span> : null}
                </div>
                <p className="mt-1 font-medium text-[var(--terracotta)]">{item.organization}</p>
                <p className="text-muted mt-3 max-w-2xl">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
