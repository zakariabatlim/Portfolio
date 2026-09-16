import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/sections/hero";

describe("Hero", () => {
  it("presents a calm, concise message with one rotating specialty line", () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Je transforme des idées en solutions concrètes.",
      }),
    ).toBeVisible();
    expect(screen.getAllByText("Développeur logiciel · Python · Data")).toHaveLength(1);
    expect(screen.getByText("Je développe →")).toBeInTheDocument();
    expect(screen.getByText("Applications Python")).toBeInTheDocument();
    expect(screen.getByText("Outils Data")).toBeInTheDocument();
    expect(screen.getByText("Automatisation")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Des solutions pensées pour des besoins réels.")).toBeVisible();
    expect(screen.queryByText("gestion de stock")).not.toBeInTheDocument();
    expect(screen.queryByText("machine learning")).not.toBeInTheDocument();
    expect(screen.queryByText("|", { exact: true })).not.toBeInTheDocument();
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

  it("presents the portrait inside a continuous pixel-built Batlamouss identity visual", () => {
    const { container } = render(<Hero />);

    expect(
      screen.getByRole("img", { name: "Portrait de Zakaria Batlamouss" }),
    ).toBeVisible();
    expect(
      screen.getByLabelText("Identité visuelle de Zakaria Batlamouss"),
    ).toBeVisible();
    expect(container.querySelector(".pixel-name-matrix")).toBeInTheDocument();
    expect(container.querySelectorAll('[data-pixel="active"]').length).toBeGreaterThan(100);
    expect(screen.queryByRole("article", { name: /Projet/i })).not.toBeInTheDocument();
  });
});
