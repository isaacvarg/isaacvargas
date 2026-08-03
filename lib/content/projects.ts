import { getCollection } from "./content";
import type { TagId } from "@/components/ProjectTag";

export type ProjectMetadata = {
  name: string;
  image: string;
  description: string;
  tags: TagId[];
  isFeatured: boolean;
  order?: number;
  slug: string
  repoUrl?: string;
  docsUrl?: string;
  demoUrl?: string;
  roadmapUrl?: string;
}

export const projects = getCollection<ProjectMetadata>("projects")
