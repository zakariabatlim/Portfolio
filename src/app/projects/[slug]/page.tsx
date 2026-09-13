import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectSection } from "@/components/projects/project-section";
import { ProjectVisual } from "@/components/projects/project-visual";
import { TechChip } from "@/components/ui/tech-chip";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { getProject } from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Zakaria Batlamouss`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-[var(--cobalt)]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="container-shell py-12 sm:py-18 lg:py-24">
          <Link href="/#projets" className="rule-link inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)]">
            <ArrowLeft aria-hidden="true" size={17} /> Retour aux projets
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">{project.category}</p>
              <h1 className="display-title">{project.title}</h1>
              <p className="body-large text-muted mt-7 max-w-3xl">{project.summary}</p>
            </div>
            <dl className="grid gap-5 border-l border-[var(--line)] pl-6 text-sm">
              <div><dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Statut</dt><dd className="mt-1 font-semibold">{project.status}</dd></div>
              <div><dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Rôle</dt><dd className="mt-1 font-semibold">{project.role}</dd></div>
            </dl>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">{project.technologies.map((technology) => <TechChip key={technology}>{technology}</TechChip>)}</div>
        </section>

        <div className="bg-[var(--surface)] py-10 sm:py-14">
          <div className="container-shell"><ProjectVisual project={project} /></div>
        </div>

        <div className="container-shell py-8 sm:py-14">
          <ProjectSection index="01 / Contexte" title="Le besoin de départ"><p>{project.problem}</p></ProjectSection>
          <ProjectSection index="02 / Solution" title="L’approche construite"><p>{project.solution}</p></ProjectSection>
          <ProjectSection index="03 / Fonctionnalités" title="Ce qui a été réalisé"><DetailList items={project.features} /></ProjectSection>
          <ProjectSection index="04 / Architecture" title="Un flux simple à suivre"><DetailList items={project.architecture} /></ProjectSection>
          <ProjectSection index="05 / Difficultés" title="Les points techniques travaillés"><DetailList items={project.challenges} /></ProjectSection>
          <ProjectSection index="06 / Apprentissages" title="Ce que ce projet met en pratique"><DetailList items={project.learnings} /></ProjectSection>
          <ProjectSection index="07 / Suite" title="Améliorations documentées"><DetailList items={project.nextSteps} /></ProjectSection>

          {(project.githubUrl || project.demoUrl) ? (
            <div className="flex flex-wrap gap-3 border-t border-[var(--line)] py-10">
              {project.githubUrl ? <a className="button-primary" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" size={18} /> Code source</a> : null}
              {project.demoUrl ? <a className="button-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">Voir la démo <ArrowUpRight aria-hidden="true" size={18} /></a> : null}
            </div>
          ) : null}

          <aside className="my-10 rounded-xl bg-[var(--cobalt)] p-7 text-white sm:p-10">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-white/70">Échanger sur ce projet</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Une question sur la démarche ou les choix techniques&nbsp;?</h2>
            <a className="mt-7 inline-flex items-center gap-2 font-semibold underline underline-offset-4" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Projet ${project.title}`)}`}>Contacter Zakaria <ArrowUpRight aria-hidden="true" size={18} /></a>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
