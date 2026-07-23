'use client'
import Breadcrumbs from "./Breadcrumbs";
import Menu from "./Menu";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center px-40 py-6"
    >
      <Breadcrumbs />

      <Menu />

    </div>
  )
}

export default Header
