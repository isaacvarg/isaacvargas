
const classes = {
  base: "bg-[#232535] px-2.5 py-1 rounded text-sm transition-colors",
  tags: {
    next: 'text-accent hover:bg-accent hover:text-accent-content',
    psql: 'text-warning hover:bg-warning hover:text-warning-content',
    ts: 'text-primary hover:bg-primary hover:text-primary-content',
    sqlite: 'text-info hover:bg-info hover:text-info-content ',
    docker: 'text-warning hover:bg-warning hover:text-warning-content',
    compliance: 'text-error hover:bg-error hover:text-error-content'
  }
}

type ProjectTagData = {
  id: keyof typeof classes.tags
  label: string;
  tooltip: string;
}


export const availableTags: ProjectTagData[] = [
  {
    id: "next",
    label: "next.js",
    tooltip: "Next.js is a React framework"
  },
  {
    id: "ts",
    label: "Typescript",
    tooltip: "Strongly typed javascript superset"
  },
  {
    id: "sqlite",
    label: "SQLite",
    tooltip: "Self-contained, serverless SQL database"
  },
  {
    id: "docker",
    label: "docker",
    tooltip: "Docker packages software and its dependencies into deployable containers."
  },
  {
    id: "psql",
    label: "PostgreSQL",
    tooltip: "Very powerful relational database"
  },
  {
    id: "compliance",
    label: "Compliance",
    tooltip: "So far I have build tools for chemistry and cosmetic compliance."
  },

]

export type TagId = keyof typeof classes.tags;

const ProjectTag = ({ tagId }: { tagId: TagId }) => {

  const { label, tooltip } = availableTags[availableTags.findIndex(t => t.id === tagId)];

  return (
    <div className="tooltip">
      <div className="tooltip-content">
        <div className="text-base-content text-sm">{tooltip}</div>
      </div>
      <span
        className={`${classes.base} ${classes.tags[tagId]}`}
      >
        {label}
      </span>
    </div>

  )
}

export default ProjectTag
