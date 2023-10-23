import Link from 'next/link';

const NavItem = ({ href, title, primary }) => {
  return (
    <li>
      <Link href={href} className="text-color-white text-sm hover:text-color-white/70 transition-colors duration-200 relative group py-1">
        <span>{title}</span>
        { primary && <span className="absolute h-[0.2rem] font-extralight w-1/3 rounded-full bg-color-secondary top-[120%] right-0 group-hover:w-full transition-width duration-200"></span> }
      </Link>
    </li>
  );
};

export default NavItem;
