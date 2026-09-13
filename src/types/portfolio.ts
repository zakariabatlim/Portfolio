export type ProjectStatus = "Réalisé" | "En cours";

export interface Profile {
  name: string;
  initials: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  siteUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  architecture: string[];
  challenges: string[];
  learnings: string[];
  nextSteps: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface JourneyItem {
  period: string;
  type: "Formation" | "Parcours";
  title: string;
  organization: string;
  description: string;
  status?: "En cours";
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}
