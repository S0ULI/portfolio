import Wrapper from '../Wrapper';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-color-bg/80 backdrop-blur-md fixed top-0 left-0 w-full z-[99] transition ease duration-300 origin-top">
      <Wrapper mt={true} myStyle='flex justify-between items-center py-4'>
        <Logo />
        <NavBar />
      </Wrapper>
    </header>
  );
};

export default Header;
