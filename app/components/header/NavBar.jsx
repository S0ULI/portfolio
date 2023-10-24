import NavItem from "./NavItem"

const NavBar = () => {
  return (
    <nav>
        <ul className="flex items-center gap-8">
            <NavItem href='/#about' title='About' />
            <NavItem href='/#projects' title='Projects' />
            <NavItem href='/#contact-me' title='Contact Me' primary={true}/>
        </ul>
    </nav>
  )
}

export default NavBar