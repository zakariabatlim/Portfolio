import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/sections/hero";

describe("Hero", () => {
  it("keeps one discreet eyebrow and a focused value proposition", () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /je construis des solutions logicielles qui relient le code, les données et les besoins réels/i,
      }),
    ).toBeVisible();
    expect(screen.getAllByText("Développeur logiciel · Python · Data")).toHaveLength(1);
    expect(
      screen.getByText("Technicien spécialisé en développement informatique"),
    ).toBeVisible();
    expect(screen.queryByText(/3 projets réalisés/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/selected systems/i)).not.toBeInTheDocument();

    expect(container.querySelectorAll(".button-primary, .button-secondary")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Voir mes projets" })).toHaveAttribute(
      "href",
      "#projets",
    );
    expect(screen.getByRole("link", { name: "Télécharger mon CV" })).toHaveAttribute(
      "href",
      "/documents/Zakaria_Batlamouss_CV_FR.pdf",
    );
  });

  it("renders three semantic project cards linked to their real routes", () => {
    render(<Hero />);

    expect(screen.getAllByRole("article", { name: /Projet/i })).toHaveLength(3);

    expect(screen.getByRole("link", { name: "Voir le projet StockFlow" })).toHaveAttribute(
      "href",
      "/projects/stockflow",
    );
    expect(screen.getByRole("link", { name: "Voir le projet Credit Risk" })).toHaveAttribute(
      "href",
      "/projects/credit-risk-prediction",
    );
    expect(screen.getByRole("link", { name: "Voir le projet Prospection" })).toHaveAttribute(
      "href",
      "/projects/prospection-numerique-maroc",
    );
  });
});
