import React from 'react';
import NavItem from './NavItem';
import LightDark from './LightDark';

const items: string[] = ['About', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <nav className="sticky top-0 h-[10vh] flex flex-row items-center w-screen border-b border-emerald-500 backdrop-blur-md bg-black/30">
      <ul className="flex flex-row ml-auto">
        {items.map((item, index) => {
          return <NavItem key={index} item={item} />;
        })}
        <LightDark />
      </ul>
    </nav>
  );
};

export default Navbar;
