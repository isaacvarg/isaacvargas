import Link from "next/link";
import { usePathname } from "next/navigation";
import BlockCursor from "./BlockCursor";
import { TbSlash } from "react-icons/tb";

type Breadcrumb = {
  label: string;
  href: string;
}

const humanizeSlug = (slug: string) =>
  slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toLowerCase());

const Breadcrumbs = () => {
  const path = usePathname();
  // filter strips out the blank segment for the first forwardslash 
  const segments = path.split("/").filter(Boolean);

  const breadcrumbs: Breadcrumb[] = [
    { label: "~", href: "/" },
    ...segments.map((segment, i) => ({
      label: humanizeSlug(segment),
      href: `/${segments.slice(0, i + 1).join("/")}`
    }))
  ]

  return (
    <div className="text-lg text-base-content flex gap-1 items-center">

      {breadcrumbs.map((crumb, i) => {
        const isLast = i === breadcrumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center">
            <Link
              href={crumb.href}
              className={`hover:text-accent hover:animate-pulse ${i === 0 && 'text-accent'}`}
            >
              {crumb.label}
            </Link>
            <span className="text-base-content/40"><TbSlash /></span>
            {isLast && <BlockCursor />}
          </div>
        )
      })}



    </div>
  )
}

export default Breadcrumbs
