'use client';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';
import LightDark from './LightDark';

const items: string[] = ['About', 'Projects', 'Contact'];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item =>
        document.querySelector(`#${item.toLowerCase()}`),
      ) as HTMLElement[];
      const newActiveIndex = sections.findIndex(section => {
        const sectionTop = section.getBoundingClientRect().top || 0;
        const sectionBottom = section.getBoundingClientRect().bottom || 0;
        return (
          sectionTop <= window.innerHeight * 0.11 &&
          sectionBottom >= window.innerHeight * 0.11
        );
      });
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <nav className="sticky top-0 h-[10vh] flex items-center w-screen border-b border-emerald-500 backdrop-blur-md bg-black/30">
      <ul className="flex ml-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className={`ml-5 cursor-pointer group hover:tracking-widest transition-all duration-2000 ${
              activeIndex === index || hoverIndex === index
                ? 'tracking-widest'
                : ''
            }`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <NavItem item={item} />
            <span
              className={`block max-w-0 transition-all h-[1px] bg-emerald-500 ${
                activeIndex === index || hoverIndex === index
                  ? 'max-w-full'
                  : ''
              }`}
            ></span>
          </li>
        ))}
        <LightDark />
      </ul>
    </nav>
  );
};

export default Navbar;
