import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { profile } from "@/data/profile";
import { ThemeScript } from "@/components/theme/theme-script";

import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Zakaria Batlamouss — Développeur Python & Data",
    template: "%s — Zakaria Batlamouss",
  },
  description:
    "Portfolio de Zakaria Batlamouss, technicien spécialisé en développement informatique : Python, données, applications et automatisation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Zakaria Batlamouss — Développeur Python & Data",
    description: "Projets concrets en développement Python, données et automatisation.",
  },
  twitter: {
    card: "summary",
    title: "Zakaria Batlamouss — Développeur Python & Data",
    description: "Projets concrets en développement Python, données et automatisation.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
