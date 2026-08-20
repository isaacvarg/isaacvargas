import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;


const BaseLink = ({ href, children, className, ...rest }: Props) => {

  const isInternal = href.startsWith("/")
  const layoutClasses = className ?? "inline-block hover:scale-105"
  const baseClasses = `text-accent hover:underline decoration-dashed underline-offset-2 transition-transform duration-300 cursor-pointer ${layoutClasses}`

  if (isInternal) {
    return (
      <Link href={href} className={baseClasses} {...rest}>
        {children}
      </Link>
    )
  }


  return (
    <a
      href={href}
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )

}

export default BaseLink
