import Link from "next/link";

export type MenuItem = {
  label: string;
  href: string;
}

type Props = { menuItem: MenuItem }

const MenuButton = ({ menuItem }: Props) => {
  return (
    <Link href={menuItem.href}>
      <button className="btn btn-ghost btn-accent">
        {menuItem.label}
      </button>
    </Link>
  )
}

export default MenuButton
