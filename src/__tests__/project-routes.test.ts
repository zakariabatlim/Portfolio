import { describe, expect, it } from "vitest";

import { generateStaticParams } from "@/app/projects/[slug]/page";
import sitemap from "@/app/sitemap";

describe("project routes and SEO", () => {
  it("pre-renders every factual project", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "stockflow" },
      { slug: "credit-risk-prediction" },
      { slug: "prospection-numerique-maroc" },
    ]);
  });

  it("includes every case study in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.some((url) => url.endsWith("/projects/stockflow"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/projects/credit-risk-prediction"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/projects/prospection-numerique-maroc"))).toBe(true);
  });
});
