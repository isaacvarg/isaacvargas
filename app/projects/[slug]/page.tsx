import { projects } from "@/lib/content/projects";
import type { Metadata } from "next"
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.slugs.map((slug) => ({ slug }))
}

// from the next/mdx docs to get a 404
export const dynamicParams = false

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  console.log(slug)
  const entry = await projects.getEntry(slug);
  console.log(entry)

  return entry?.metadata ?? {}
}

const ProjectDetails = async ({ params }: Params) => {
  const { slug } = await params;
  const entry = await projects.getEntry(slug);


  if (!entry) notFound()
  const { default: Content } = entry;

  return (
    <div>
      <Content />
    </div>
  )
}

export default ProjectDetails
