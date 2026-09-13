import type { Profile } from "@/types/portfolio";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const profile: Profile = {
  name: "Zakaria Batlamouss",
  initials: "ZB",
  location: "Maroc",
  email: "zakaria.batlim2@gmail.com",
  github: "https://github.com/zakariabatlim",
  linkedin: "https://www.linkedin.com/in/zakaria-batlamouss",
  cvPath: "/documents/Zakaria_Batlamouss_CV_FR.pdf",
  siteUrl: configuredSiteUrl || "http://localhost:3000",
};
