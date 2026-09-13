import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { CurrentlyLearning } from "@/components/sections/currently-learning";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <CurrentlyLearning />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
