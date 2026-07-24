import { getCollection } from "./content";
import type { TagId } from "@/components/ProjectTag";

export type ProjectMetadata = {
  name: string;
  image: string;
  description: string;
  tags: TagId[];
  isFeatured: boolean;
  slug: string
}

export const projects = getCollection<ProjectMetadata>("projects")
