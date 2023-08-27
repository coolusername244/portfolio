'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

type NavItemProps = {
  item: string;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [navbarHeight, setNavbarHeight] = React.useState(0);

  useEffect(() => {
    setNavbarHeight(0.1 * window.innerHeight);
  }, []);

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
      <Link href={`#${item.toLowerCase()}`} onClick={handleClick}>
        {item}
      </Link>
    </>
  );
};

export default NavItem;
