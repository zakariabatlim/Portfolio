import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/sections/hero";

describe("Hero", () => {
  it("leads with Zakaria's value while keeping the diploma secondary", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /je construis des solutions logicielles qui relient le code, les données et les besoins réels/i,
      }),
    ).toBeVisible();
    expect(screen.getByText("SOFTWARE · PYTHON · BACKEND · DATA/AI")).toBeVisible();
    expect(
      screen.getByText(/Diplômé MIAGE · Technicien spécialisé en développement informatique/i),
    ).toBeVisible();
  });

  it("turns the system map into direct proof links for all three projects", () => {
    render(<Hero />);

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
