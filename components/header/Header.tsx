'use client'
import Breadcrumbs from "./Breadcrumbs";
import Menu from "./Menu";

const Header = () => {
  return (
    <div
      className="page-container flex justify-between items-center gap-3 py-3 md:py-6"
    >
      <Breadcrumbs />

      <Menu />

    </div>
  )
}

export default Header
