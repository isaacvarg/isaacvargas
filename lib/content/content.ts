import path from "node:path"
import { getSlugs } from "./getSlugs";
import type { Metadata } from "next"
import type { ComponentType } from "react"

type FrontMatter = Metadata & Record<string, any>

type ContentEntry = {
  default: ComponentType;
  metadata: FrontMatter
}

export const getCollection = (directory: string) => {

  const collectionDirectory = path.join(process.cwd(), 'content', directory)

  const slugs = getSlugs(collectionDirectory);

  // gets the content entry
  const getEntry = async (slug: string): Promise<ContentEntry | null> => {
    try {
      return await import(`@/content/${directory}/${slug}.mdx`)
    } catch {
      return null
    }
  }

  // gets all entries with their slug and frontmatter
  // so we can show all the projects/blog posts
  // conditionally returns null if missing/err entries
  const getEntries = async () => {
    const entries = await Promise.all(
      slugs.map(async (slug) => {
        const entry = await getEntry(slug);
        return entry ? { slug, ...entry.metadata } : null
      })
    )

    return entries.filter(entry => entry !== null)
  }

  return { slugs, getEntry, getEntries }

}
