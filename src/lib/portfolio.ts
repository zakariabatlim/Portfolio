import { projects } from "@/data/projects";

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectHref = (slug: string) => `/projects/${slug}`;
