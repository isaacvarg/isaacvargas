import { LuArrowRight, LuStar } from "react-icons/lu";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "Lumexia",
    image: "/projects/lumexia-1.webp",
    description: "Lumexia brings procurement, inventory, production, quality, pricing, and research & development into one place so your business stays organized, traceable, and in control.",
    href: "/about",
    tags: ['next', 'ts', 'psql', 'docker']
  },
  {
    name: "Helm",
    image: "/projects/helm-1.png",
    description: "A self-hosted, deeply customizable bookmark dashboard and browser start page. Organizes your links into tabs, sections, and bookmarks, and lets you restyle almost every pixel. You can change gradients, themes, background images, per-element colors and borders, keyboard shortcuts, and more.",
    href: "",
    tags: ['next', 'ts', 'sqlite', 'docker']
  },
  {
    name: "Con Cariño",
    image: "/projects/con-carino-1.png",
    description: "A self-hosted app for coordinating the care of one loved one alongside the household finances that surround it. It keeps the shared family ledger, the caregiver coverage calendar, invoices for caregivers, and the document library in one place.",
    href: "",
    tags: ['ts', 'sqlite', 'psql', 'docker']
  },
  {
    name: "INCI to UNII",
    image: "/projects/inci-to-unii.png",
    description: "A utility that converts cosmetic ingredient list to FDA (US Food & Drug Administration) compliant UNII entries. Helps regulatory chemist register formulations under MoCRA (Modernization of Cosmetics Regulation Act of 2022).",
    href: "/hehe",
    tags: ['ts', 'sqlite', 'compliance']
  },

]


const FeaturedProjects = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">

          <LuStar className="size-8 text-accent" />
          <span className="text-base-content text-2xl font-semibold">Featured Projects</span>
        </div>

        <div>
          <button className="btn btn-ghost btn-accent">
            See all
            <LuArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.name} project={p} />)}
      </div>


    </div>
  )
}

export default FeaturedProjects
