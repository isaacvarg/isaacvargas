import { LuTag } from "react-icons/lu";
import ProjectTag, { TagId } from "./ProjectTag";
import Link from "next/link";
import { ProjectMetadata } from "@/lib/content/projects";


const ProjectCard = ({ project }: { project: ProjectMetadata }) => {
  const { name, image, description, tags, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
      <div className="h-full w-full rounded-2xl overflow-hidden bg-base-300 font-mono shadow-2xl">

        <div className="bg-base-content/50 p-4 sm:p-6 flex justify-center items-center">

          <div className="w-full overflow-hidden rounded-xl shadow-sm ">
            <img
              src={image}
              alt="Card preview"
              className="w-full h-40 sm:h-52 object-cover block"
            />
          </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-3.5">
          <h3 className="text-lg sm:text-xl font-bold text-base-content tracking-wide">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex items-center gap-2 pt-2 flex-wrap">
            <LuTag className="w-4 h-4 text-base-content/70 shrink-0 mr-1" />
            {tags.map((tag) => <ProjectTag key={tag} tagId={tag} />)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
