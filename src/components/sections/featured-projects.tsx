import { projects } from "@/data/projects";
import { ProjectCaseCard } from "@/components/projects/project-case-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section id="projets" className="section-block bg-[var(--surface)]">
      <div className="container-shell">
        <SectionHeading index="02" eyebrow="Travaux sélectionnés" title="Des projets expliqués, pas seulement exposés." description="Chaque étude de cas montre le besoin, la solution construite et les choix techniques — sans métriques ni résultats inventés." />
        <div className="mt-16 border-b border-[var(--line)]">
          {projects.map((project, index) => <ProjectCaseCard key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
