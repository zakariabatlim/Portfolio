import { Code2, FileDown, UsersRound } from "lucide-react";
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
          <a className="hidden rounded-md p-2 text-[var(--muted)] hover:text-[var(--cobalt)] lg:block" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Zakaria Batlamouss">
            <Code2 aria-hidden="true" size={19} />
          </a>
          <a className="hidden rounded-md p-2 text-[var(--muted)] hover:text-[var(--cobalt)] lg:block" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Zakaria Batlamouss">
            <UsersRound aria-hidden="true" size={19} />
          </a>
          <a className="hidden min-h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 text-sm font-semibold hover:border-[var(--cobalt)] md:flex" href={profile.cvPath} download>
            <FileDown aria-hidden="true" size={17} /> CV
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
