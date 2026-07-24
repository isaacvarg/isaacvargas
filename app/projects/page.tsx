import { projects } from "@/lib/content/projects";
import Link from "next/link";

const Projects = async () => {

  const allProjects = await projects.getEntries();


  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-semibold">
        Projects
      </div>

      <div>
        <ul>
          {allProjects.map((project) => {
            return (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <li>
                  {project.isFeatured.toString()}
                </li>
              </Link>
            )
          })}
        </ul>

      </div>
    </div>

  )
}

export default Projects
