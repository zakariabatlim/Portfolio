import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("keeps desktop navigation focused while retaining CV and theme controls", () => {
    render(<SiteHeader />);

    const desktopNavigation = screen.getByRole("navigation", {
      name: "Navigation principale",
    });
    const primaryLinks = Array.from(desktopNavigation.querySelectorAll("a"));

    expect(primaryLinks).toHaveLength(3);
    expect(primaryLinks.map((link) => link.textContent)).toEqual([
      "Projets",
      "Parcours",
      "Contact",
    ]);
    expect(primaryLinks.map((link) => link.getAttribute("href"))).toEqual([
      "/#projets",
      "/#parcours",
      "/#contact",
    ]);
    expect(screen.queryByRole("link", { name: /GitHub/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /CV/i })).toHaveAttribute(
      "href",
      "/documents/Zakaria_Batlamouss_CV_FR.pdf",
    );
    expect(screen.getByRole("button", { name: /thème/i })).toBeVisible();
  });
});
