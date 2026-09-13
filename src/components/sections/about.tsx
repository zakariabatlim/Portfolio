import { SectionHeading } from "@/components/ui/section-heading";

const indicators = [
  ["Formation", "Technicien spécialisé", "Développement informatique · MIAGE"],
  ["Focus", "Software · Python", "Backend · Data / IA · Automatisation"],
  ["Actuellement", "Ouvert aux opportunités", "Stage · Junior · Freelance adapté"],
];

export function About() {
  return (
    <section id="a-propos" className="section-block">
      <div className="container-shell">
        <SectionHeading index="01" eyebrow="À propos" title="Construire d’abord. Approfondir ensuite." description="Mon parcours relie développement logiciel et données. Je consolide chaque compétence à travers un projet concret, documenté et améliorable." />
        <div className="mt-14 grid border-y border-[var(--line)] md:grid-cols-3">
          {indicators.map(([label, value, detail], index) => (
            <div key={label} className={`py-7 md:px-7 ${index ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""}`}>
              <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--terracotta)]">{label}</span>
              <strong className="mt-4 block text-xl font-semibold tracking-[-0.02em]">{value}</strong>
              <span className="text-muted mt-1 block text-sm">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
