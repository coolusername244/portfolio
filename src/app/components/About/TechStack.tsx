'use client';
import React from 'react';
import Image from 'next/image';
import { frontEnd, backEnd, tools, frameworks } from './TechStackData';
import { ImageLink } from '../../types/ImageLink';

const renderImageLinks = (items: ImageLink[]) => (
  <>
    <div className="grid grid-cols-3 md:grid-cols-4 md:w-[60%] md:ml-[20%] place-items-center rounded-xl bg-white/10">
      {items.map((item, index) => (
        <a key={index} href={item.link} target="_blank">
          <Image
            className="m-5 hover:drop-shadow-lg hover:-translate-y-1 shadow-emerald-500 transition-all duration-200"
            src={item.src}
            alt={item.alt}
            width={75}
            height={75}
          />
        </a>
      ))}
    </div>
    <hr className="mt-5 border-t border-emerald-500 md:w-[80%] md:ml-[10%] md:my-10" />
  </>
);

const TechStackIcons = () => {
  return (
    <>
      <h3 className="text-center font-mono text-xl my-5">Front End</h3>
      {renderImageLinks(frontEnd)}
      <h3 className="text-center font-mono text-xl my-5">Back End</h3>
      {renderImageLinks(backEnd)}
      <h3 className="text-center font-mono text-xl my-5">Tools</h3>
      {renderImageLinks(tools)}
      <h3 className="text-center font-mono text-xl my-5">Frameworks</h3>
      {renderImageLinks(frameworks)}
    </>
  );
};

export default TechStackIcons;
