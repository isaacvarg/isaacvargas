import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content/projects";

const Projects = async () => {

  const allProjects = await projects.getEntries();


  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl sm:text-3xl font-semibold text-base-content">
        Projects
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {allProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>

  )
}

export default Projects
