import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

describe("client interactions", () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.clear();
  });

  it("persists the selected theme", () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: "Changer de thème" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("closes the mobile menu with Escape", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toBeVisible();

    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("navigation", { name: "Navigation mobile" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ouvrir le menu" })).toHaveFocus();
  });
});
