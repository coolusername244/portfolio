import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialIcons = () => {
  return (
    <>
      <li className="cursor-pointer hover:text-emerald-500 transition-all duration-200">
        <a href="https://www.linkedin.com/in/leesheppard244/" target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="cursor-pointer hover:text-emerald-500 transition-all duration-200">
        <a href="https://github.com/coolusername244" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="cursor-pointer hover:text-emerald-500 transition-all duration-200">
        <a href="mailto:leesheppard2404@gmail.com">
          <SiGmail />
        </a>
      </li>
    </>
  );
};

export default SocialIcons;
