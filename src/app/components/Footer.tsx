import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-emerald-500 py-7 bg-black/30">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <p className="ml-5 italic text-slate-400">
            Designed and developed by&nbsp;
          </p>
          <a
            href="https://www.linkedin.com/in/leesheppard244/"
            target="_blank"
            className="text-emerald-500 transition-all duration-2000 italic"
          >
            <span className="group">
              Lee Sheppard
              <span className="block transition-all duration-2000 w-0 h-[1px] bg-emerald-500 group-hover:w-full"></span>
            </span>
          </a>
        </div>
        <div className="flex flex-row">
          <p className="italic text-slate-400">Built with&nbsp;</p>
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="text-emerald-500 transition-all duration-2000 mr-5 italic"
          >
            <span className="group">
              NextJS 13
              <span className="block transition-all duration-2000 w-0 h-[1px] bg-emerald-500 group-hover:w-full"></span>
            </span>
          </a>
          <p className="italic text-slate-400">Styled with&nbsp;</p>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-emerald-500 transition-all duration-2000 mr-5 italic"
          >
            <span className="group">
              Tailwind
              <span className="block transition-all duration-2000 w-0 h-[1px] bg-emerald-500 group-hover:w-full"></span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
