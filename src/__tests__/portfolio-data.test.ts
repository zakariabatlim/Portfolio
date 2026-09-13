import { describe, expect, it } from "vitest";

import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { getProject, getProjectHref } from "@/lib/portfolio";

describe("portfolio data", () => {
  it("exposes the three factual case studies in the intended order", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "stockflow",
      "credit-risk-prediction",
      "prospection-numerique-maroc",
    ]);
  });

  it("does not expose invented project links", () => {
    expect(projects.every((project) => !project.githubUrl && !project.demoUrl)).toBe(true);
  });

  it("keeps certifications empty until verified data exists", () => {
    expect(certifications).toEqual([]);
  });

  it("resolves a known project and its route", () => {
    expect(getProject("stockflow")?.title).toBe("StockFlow");
    expect(getProjectHref("stockflow")).toBe("/projects/stockflow");
  });

  it("returns undefined for an unknown project", () => {
    expect(getProject("unknown")).toBeUndefined();
  });
});
