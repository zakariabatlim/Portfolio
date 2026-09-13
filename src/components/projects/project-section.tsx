import type { ReactNode } from "react";

export function ProjectSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-[var(--line)] py-10 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--terracotta)]">{index}</div>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{title}</h2>
        <div className="text-muted mt-5 space-y-4 leading-7">{children}</div>
      </div>
    </section>
  );
}
