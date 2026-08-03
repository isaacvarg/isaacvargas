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
      <div className="flex justify-between items-center">
        <div className="flex gap-2">

          <LuStar className="size-8 text-accent" />
          <span className="text-base-content text-2xl font-semibold">Featured Projects</span>
        </div>

        <div>
          <button className="btn btn-ghost btn-accent">
            See all
            <LuArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {featuredProjects.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>


    </div>
  )
}

export default FeaturedProjects
