'use client'

import { useState, useEffect } from 'react';

import Wrapper from '../Wrapper';
import NavBar from './NavBar';
import Logo from './Logo';

// backdrop-blur-sm

const Header = () => {
  const [scroll, setScroll] = useState('')

  useEffect(() => {
    let lastScroll = Number;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 10) {
        setScroll('');
        return;
      }
      if (currentScroll > lastScroll && scroll !== 'scroll-down') {
        setScroll('scroll-down');
      }
      if (currentScroll < lastScroll && scroll === 'scroll-down') {
        setScroll('scroll-up');
      }

      lastScroll = currentScroll;
    });
  }, [scroll]);

  return (
    <header className={`${scroll} fixed top-0 left-0 w-full z-[99] transition ease duration-300 origin-top`}>
      <Wrapper mt={true} myStyle='flex justify-between items-center py-4'>
        <Logo />
        <NavBar />
      </Wrapper>
    </header>
  );
};

export default Header;
