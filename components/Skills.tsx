import { Fragment } from "react";
import { LuBraces } from "react-icons/lu";
import { UI } from "./ui";

const skills = {
  languages: [
    "Typescript/Javascript",
    "Go",
    "Bash",
    "Lua",
    "LaTeX",
    "HTML",
    "CSS/SCSS",
  ],
  devOps: [
    "Linux",
    "Docker (compose, buildx)",
    "Cloudflare",
    "Github Actions",
    "AWS",
    "Nginx",
  ],
  toolsFrameworks: [
    "Git",
    "React",
    "Next.js",
    "Postman",
  ],
  databasesStorage: [
    "PostgreSQL",
    "S3 (RustFS)",
    "SQLite",
    "Redis",
    "MySQL",
  ],
  environments: [
    "Linux (server and PC)",
    "Neovim",
    "Node",
    "Deno",
    "Bun",
  ],
}

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Tools & Frameworks", items: skills.toolsFrameworks },
  { label: "DevOps", items: skills.devOps },
  { label: "Databases & Storage", items: skills.databasesStorage },
  { label: "Environments", items: skills.environments },
]

const Skills = () => {

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <LuBraces className="size-8 text-accent" />
        <span className="text-base-content text-2xl font-semibold">Skills</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_1fr] gap-x-6 gap-y-4 text-base-content">
        {categories.map(({ label, items }) => (
          <Fragment key={label}>
            <h3 className="font-semibold text-lg py-1">{label}</h3>
            <UI.TagList elements={items} />
          </Fragment>
        ))}
      </div>

    </div>
  )
}

export default Skills
