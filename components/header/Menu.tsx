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
    <div className="flex gap-2 items-center">
      {menuItems.map(item => <MenuButton key={item.href} menuItem={item} />)}
    </div>
  )
}

export default Menu
