import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  item: string;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <li className="m-4 cursor-pointer">
      <Link href={`#${item.toLowerCase()}`}>{item}</Link>
    </li>
  );
};

export default NavItem;
