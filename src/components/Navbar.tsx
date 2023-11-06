import { NavLinksComponent } from './NavLinksComponent'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-20 flex w-full items-center bg-primary px-6 py-5 sm:px-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <NavLinksComponent />
      </div>
    </nav>
  )
}
