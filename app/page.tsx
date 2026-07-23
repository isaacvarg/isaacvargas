import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
