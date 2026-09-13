import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("offers project navigation, real social links and the real CV", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Projets" })).toHaveAttribute("href", "/#projets");
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/zakariabatlim",
    );
    expect(screen.getByRole("link", { name: /CV/i })).toHaveAttribute(
      "href",
      "/documents/Zakaria_Batlamouss_CV_FR.pdf",
    );
    expect(screen.getByRole("button", { name: /thème/i })).toBeVisible();
  });
});
