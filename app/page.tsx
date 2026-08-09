import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      <Hero />
      <FeaturedProjects />
      <Skills />
    </div>
  );
}
