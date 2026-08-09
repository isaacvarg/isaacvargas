import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import MenuButton, { MenuItem } from "./MenuButton";

const menuItems: MenuItem[] = [
  { label: "~ Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  //  { label: "Posts", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const Menu = () => {
  return (
    <>
      {/* daisyUI's focus-based dropdown closes on blur, so tapping a link both
          navigates and dismisses the panel -- no open/close state needed. */}
      <div className="dropdown dropdown-end shrink-0 md:hidden">
        <div
          tabIndex={0}
          role="button"
          aria-label="Menu"
          className="btn btn-ghost btn-accent btn-square"
        >
          <LuMenu className="size-5" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu z-30 mt-2 w-44 rounded-box bg-base-200 p-2 shadow-lg"
        >
          {menuItems.map(item => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden shrink-0 gap-2 items-center md:flex">
        {menuItems.map(item => <MenuButton key={item.href} menuItem={item} />)}
      </div>
    </>
  )
}

export default Menu
