import { ArrowUpRight } from "lucide-react";

import { currentlyExploring } from "@/data/skills";

export function CurrentlyLearning() {
  return (
    <section className="container-shell pb-[clamp(4.75rem,9vw,8rem)]">
      <div className="grid gap-8 rounded-xl bg-[var(--cobalt)] p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/70">Progression continue</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Currently exploring</h2>
        </div>
        <div>
          <p className="max-w-xl text-lg text-white/80">Des technologies que j’étudie actuellement, séparées volontairement de mes compétences déjà mises en pratique.</p>
          <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/25 sm:grid-cols-3">
            {currentlyExploring.map((item) => (
              <span key={item} className="flex items-center justify-between bg-[var(--cobalt)] px-4 py-3 font-[family-name:var(--font-mono)] text-sm">
                {item}<ArrowUpRight aria-hidden="true" size={14} className="opacity-60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
