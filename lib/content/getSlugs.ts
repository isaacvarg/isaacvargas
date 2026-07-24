import fs from "node:fs"

// this reads the collection directory
// and generates slugs for each file
// that is an mdx

export const getSlugs = (collectionDirectory: string) => {
  const slugs = fs
    .readdirSync(collectionDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
  return slugs;
}
