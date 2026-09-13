"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { profile } from "@/data/profile";
import { navigationLinks } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 place-items-center rounded-md border border-[var(--line)]"
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[var(--background)] px-4 py-5 shadow-[var(--shadow)]"
        >
          <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
            {navigationLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-medium hover:bg-[var(--surface)]"
              >
                {label}
              </Link>
            ))}
            <a className="button-primary mt-3" href={profile.cvPath} download>
              Télécharger le CV
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
