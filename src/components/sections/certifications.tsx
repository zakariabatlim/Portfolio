import { Award } from "lucide-react";

import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-[var(--line)] py-12">
      <div className="container-shell grid gap-5 md:grid-cols-[12rem_1fr]">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--terracotta)]">Certifications</p>
        {certifications.length ? (
          <div>{certifications.map((certification) => <p key={certification.title}>{certification.title}</p>)}</div>
        ) : (
          <div className="flex max-w-2xl items-start gap-4">
            <Award aria-hidden="true" className="mt-1 shrink-0 text-[var(--cobalt)]" size={22} />
            <div>
              <h2 className="text-lg font-semibold">Des preuves vérifiables, au bon moment.</h2>
              <p className="text-muted mt-1">Les certifications officielles seront ajoutées ici après obtention, avec leur lien de vérification.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
