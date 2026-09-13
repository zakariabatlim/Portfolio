import { ArrowUpRight, Code2, Mail, UsersRound } from "lucide-react";

import { profile } from "@/data/profile";

const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunité — Zakaria Batlamouss")}`;

export function Contact() {
  return (
    <section id="contact" className="section-block">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <p className="text-muted mt-5 max-w-sm">Maroc · Ouvert aux opportunités sur place ou à distance.</p>
        </div>
        <div>
          <h2 className="section-title max-w-4xl">Vous recherchez un profil motivé en Python, logiciel ou Data&nbsp;? Parlons-en.</h2>
          <a href={mailHref} className="mt-10 inline-flex items-center gap-3 border-b-2 border-[var(--cobalt)] pb-2 text-xl font-semibold text-[var(--cobalt)] sm:text-2xl" aria-label="Écrire un email à Zakaria Batlamouss">
            <Mail aria-hidden="true" /> {profile.email} <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" size={18} /> GitHub</a>
            <a className="button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><UsersRound aria-hidden="true" size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
