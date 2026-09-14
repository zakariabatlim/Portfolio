import Link from "next/link";

import { profile } from "@/data/profile";
import { navigationLinks } from "@/data/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between gap-5">
        <Link href="/#accueil" className="flex items-center gap-3 no-underline" aria-label="Accueil — Zakaria Batlamouss">
          <span className="grid size-10 place-items-center rounded-md bg-[var(--foreground)] font-[family-name:var(--font-mono)] text-sm font-bold text-[var(--background)]">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold leading-tight sm:block">
            Zakaria
            <br />
            Batlamouss
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 md:flex">
          {navigationLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="rule-link text-sm font-medium">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="hidden min-h-10 items-center rounded-md border border-[var(--line)] px-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-[var(--cobalt)] hover:text-[var(--foreground)] md:flex" href={profile.cvPath} download>
            CV
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
