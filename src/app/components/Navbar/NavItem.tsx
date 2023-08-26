'use client';
import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  item: string;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const navbarHeight = 0.1 * window.innerHeight;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const target = document.querySelector(`#${item.toLowerCase()}`);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset - navbarHeight,
      });
    }
  };

  return (
    <>
      <li className="ml-5 cursor-pointer group hover:tracking-widest transition-all duration-2000">
        <Link href={`#${item.toLowerCase()}`} onClick={handleClick}>
          {item}
        </Link>
        <span className="block max-w-0 group-hover:max-w-full transition-all  h-[1px] bg-emerald-500"></span>
      </li>
    </>
  );
};

export default NavItem;
