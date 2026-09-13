import { Braces, Database, LineChart, PanelsTopLeft } from "lucide-react";

const modules = [
  { label: "Entrées", value: "Données", Icon: LineChart },
  { label: "Traitement", value: "Python", Icon: Braces },
  { label: "Persistance", value: "SQL", Icon: Database },
  { label: "Interface", value: "Produit", Icon: PanelsTopLeft },
];

export function SystemMap() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 shadow-[var(--shadow)] sm:p-6" aria-label="Schéma décoratif d’un flux logiciel">
      <div className="mb-8 flex items-center justify-between border-b border-[var(--line)] pb-4 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.15em] text-[var(--muted)]">
        <span>System map / 01</span>
        <span className="text-[var(--terracotta)]">En construction</span>
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        <svg className="pointer-events-none absolute inset-0 size-full text-[var(--line)]" viewBox="0 0 400 260" aria-hidden="true" preserveAspectRatio="none">
          <path d="M100 65H200V195H300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 6" />
          <circle cx="200" cy="130" r="4" fill="var(--terracotta)" />
        </svg>
        {modules.map(({ label, value, Icon }, index) => (
          <div key={label} className={`relative min-h-32 rounded-lg border border-[var(--line)] bg-[var(--background)] p-4 ${index === 1 || index === 2 ? "translate-y-4" : ""}`}>
            <Icon aria-hidden="true" size={20} className="mb-8 text-[var(--cobalt)]" />
            <span className="block font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted)]">{label}</span>
            <strong className="text-lg font-semibold">{value}</strong>
          </div>
        ))}
      </div>
      <div className="mt-9 flex items-center gap-3 text-xs text-[var(--muted)]">
        <span className="h-px flex-1 bg-[var(--line)]" />
        Apprendre · Construire · Documenter
      </div>
    </div>
  );
}
