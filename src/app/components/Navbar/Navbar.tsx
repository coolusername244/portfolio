import React from 'react';
import NavItem from './NavItem';
import LightDark from './LightDark';

const items: string[] = ['About', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-row w-screen border-b-2 border-gray-300">
      <h2 className="p-4 cursor-pointer">LS</h2>
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
