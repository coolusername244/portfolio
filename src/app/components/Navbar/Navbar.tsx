'use client';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';

const items: string[] = ['About', 'Projects', 'Contact'];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const navBarHeight = window.innerHeight * 0.1;
      const scrollPosition = window.scrollY + navBarHeight;

      const newActiveIndex = items.findIndex(item => {
        const section = document.querySelector(`#${item.toLowerCase()}`);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          const sectionBottom =
            section.getBoundingClientRect().bottom + window.scrollY;
          return (
            sectionTop <= scrollPosition + navBarHeight &&
            scrollPosition + navBarHeight <= sectionBottom
          );
        }
        return false;
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        setHoverIndex(-1);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <nav className="sticky top-0 h-[10vh] flex items-center w-screen border-b border-emerald-500 backdrop-blur-2xl bg-black/30">
      <ul className="flex ml-auto">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mr-5 cursor-pointer group hover:tracking-widest transition-all duration-2000 ${
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
      </ul>
    </nav>
  );
};

export default Navbar;
