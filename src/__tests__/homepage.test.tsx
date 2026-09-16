import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("homepage", () => {
  it("presents the factual profile and all three projects", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      "Je transforme des idées en solutions concrètes.",
    );
    expect(screen.getByRole("heading", { name: "StockFlow" })).toBeVisible();
    expect(screen.getByRole("heading", { name: /prédiction du risque de crédit/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /prospection numérique/i })).toBeVisible();
  });

  it("separates learning from practised skills", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Currently exploring" })).toBeVisible();
    expect(screen.getByText("Next.js")).toBeVisible();
    expect(screen.getByText("Compétences en pratique")).toBeVisible();
  });

  it("exposes direct contact without a form", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("link", { name: /écrire un email/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:zakaria.batlim2@gmail.com"),
    );
    expect(container.querySelector("form")).not.toBeInTheDocument();
  });
});
