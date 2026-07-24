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

const Skills = () => {

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <LuBraces className="size-8 text-accent" />
        <span className="text-base-content text-2xl font-semibold">Skills</span>
      </div>

      <div className="flex flex-col gap-3 text-base-content">
        <div className="flex items-center">
          <div className="font-semibold text-lg w-60">Languages</div>
          <UI.HorizontalList elements={skills.languages} />
        </div>

        <div className="flex items-center">
          <div className="font-semibold text-lg w-60">Tools &amp; Frameworks</div>
          <UI.HorizontalList elements={skills.toolsFrameworks} />
        </div>
        <div className="flex items-center">
          <div className="font-semibold text-lg w-60">DevOps</div>
          <UI.HorizontalList elements={skills.devOps} />
        </div>
        <div className="flex items-center">
          <div className="font-semibold text-lg w-60">Environments</div>
          <UI.HorizontalList elements={skills.environments} />
        </div>

      </div>

    </div>
  )
}

export default Skills
