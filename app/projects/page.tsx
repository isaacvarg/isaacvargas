import { projects } from "@/lib/content/projects";

const Projects = async () => {

  const allProjects = await projects.getEntries();


  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-semibold">
        Projects
      </div>

      <div>
        <ul>
          {allProjects.map((project: any) => {
            return (
              <li key={project.slug}>
                {project.isFeatured.toString()}
              </li>
            )
          })}
        </ul>

      </div>
    </div>

  )
}

export default Projects
