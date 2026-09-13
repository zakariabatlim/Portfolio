"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Changer de thème"
      className="grid size-10 place-items-center rounded-md border border-[var(--line)] text-[var(--foreground)] transition-colors hover:border-[var(--cobalt)]"
    >
      <Moon aria-hidden="true" size={18} className="theme-icon-light" />
      <Sun aria-hidden="true" size={18} className="theme-icon-dark" />
    </button>
  );
}
