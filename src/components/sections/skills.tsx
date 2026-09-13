import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechChip } from "@/components/ui/tech-chip";

export function Skills() {
  return (
    <section id="competences" className="section-block">
      <div className="container-shell">
        <SectionHeading index="03" eyebrow="Compétences" title="Compétences en pratique" description="Une lecture par usages et domaines, sans pourcentages arbitraires." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="bg-[var(--background)] p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.025em]">{group.title}</h3>
              <p className="text-muted mt-2 text-sm">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <TechChip key={skill}>{skill}</TechChip>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
