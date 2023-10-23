import NavItem from "./NavItem"

const NavBar = () => {
  return (
    <nav>
        <ul className="flex items-center gap-6">
            <NavItem href='/' title='About' />
            <NavItem href='/' title='Projects' />
            <NavItem href='/' title='Contact Me' primary={true}/>
        </ul>
    </nav>
  )
}

export default NavBar