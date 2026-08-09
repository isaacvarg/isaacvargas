import Link from "next/link";
import { LuArrowRight, LuStar } from "react-icons/lu";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content/projects";

const FeaturedProjects = async () => {

  // pretty inefficient but fine for current project volume
  const featuredProjects = (await projects.getEntries())
    .filter(p => p.isFeatured == true)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));


  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-2">

          <LuStar className="size-6 sm:size-8 text-accent" />
          <span className="text-base-content text-xl sm:text-2xl font-semibold">Featured Projects</span>
        </div>

        <div>
          <Link href="/projects">
            <button className="btn btn-ghost btn-accent btn-sm sm:btn-md">
              See all
              <LuArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {featuredProjects.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>


    </div>
  )
}

export default FeaturedProjects
