interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[12rem_1fr]">
      <div className="flex items-start gap-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--terracotta)]">
        <span>{index}</span>
        <span className="h-px flex-1 translate-y-2 bg-[var(--line)]" />
      </div>
      <div className="max-w-4xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="body-large text-muted mt-6 max-w-2xl">{description}</p> : null}
      </div>
    </div>
  );
}
