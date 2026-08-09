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
    <div className="text-base md:text-lg text-base-content flex gap-1 items-center min-w-0 flex-1 overflow-hidden">

      {breadcrumbs.map((crumb, i) => {
        const isLast = i === breadcrumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center min-w-0">
            <Link
              href={crumb.href}
              className={`truncate hover:text-accent hover:animate-pulse ${i === 0 && 'text-accent'}`}
            >
              {crumb.label}
            </Link>
            <span className="text-base-content/40 shrink-0"><TbSlash /></span>
            {isLast && <BlockCursor />}
          </div>
        )
      })}



    </div>
  )
}

export default Breadcrumbs
