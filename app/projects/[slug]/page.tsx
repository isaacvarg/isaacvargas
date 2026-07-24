import ProjectTag from "@/components/ProjectTag";
import { projects } from "@/lib/content/projects";
import type { Metadata } from "next"
import Image from "next/image";
import { notFound } from "next/navigation";
import { LuAppWindow, LuBook, LuGithub, LuTag } from "react-icons/lu";

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.slugs.map((slug) => ({ slug }))
}

// from the next/mdx docs to get a 404
export const dynamicParams = false

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = await projects.getEntry(slug);

  return entry?.metadata ?? {}
}

const ProjectDetails = async ({ params }: Params) => {
  const { slug } = await params;
  const entry = await projects.getEntry(slug);

  if (!entry) notFound()
  const { default: Content, metadata } = entry;

  return (
    <div className="flex flex-col gap-10 ">

      <img src={metadata.image} alt={metadata.name} className="rounded-xl overflow-hidden object-cover max-h-100" />

      <h1 className="text-accent text-3xl font-semibold">{metadata.name}</h1>

      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <a href={"/"} target="_blank" rel="noopener noreferrer">
            <button className="w-28 btn  btn-sm btn-accent btn-outline">
              <LuGithub className="size-4" />
              Repo
            </button>
          </a>
          <a href={"/"} target="_blank" rel="noopener noreferrer">
            <button className="w-28 btn btn-sm btn-accent btn-outline">
              <LuAppWindow className="size-4" />
              Demo
            </button>
          </a>
          <a href={"/"} target="_blank" rel="noopener noreferrer">
            <button className="w-28 btn btn-sm btn-accent btn-outline">
              <LuBook className="size-4" />
              Docs
            </button>
          </a>
        </div>


        <div className="flex items-center gap-2 pt-2 flex-wrap">
          <LuTag className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {metadata.tags.map((tag) => <ProjectTag key={tag} tagId={tag} background="elevated" />)}
        </div>
      </div>


      <hr className="bg-accent" />


      <Content />
    </div>
  )
}

export default ProjectDetails
