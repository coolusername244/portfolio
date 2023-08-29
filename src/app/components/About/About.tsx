import React from 'react';
import Image from 'next/image';
import { ImageLink } from '../../types/ImageLink';
import { frontEnd, backEnd, tools, frameworks } from './TechStackData';

const renderImageLinks = (items: ImageLink[]) => (
  <div className="grid grid-cols-3 place-items-center bg-white/10">
    {items.map((item, index) => (
      <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
        <Image
          className="m-5"
          src={item.src}
          alt={item.alt}
          width={75}
          height={75}
        />
      </a>
    ))}
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] w-[90%] ml-[5%] block md:flex md:pt-[10vh]"
    >
      <article className="md:h-[90%] md:w-[50%]">
        <h2 className="text-2xl font-mono font-bold text-center">
          A Bit About Me
        </h2>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          deserunt possimus ipsam odit eum, saepe incidunt earum doloremque amet
          libero hic at similique tempore sed. Atque expedita aperiam veritatis,
          mollitia aliquam inventore numquam optio dolorum magnam laudantium
          officia ullam et odio accusamus ut consectetur aliquid cumque
          exercitationem animi aspernatur. Itaque, minus ipsam. Facere est
          reprehenderit nobis corrupti et iste. Quos quo consequuntur eos
          placeat nam consectetur modi ipsam fuga iste rem voluptate, culpa eum
          accusantium unde provident dignissimos corrupti ducimus nulla fugiat,
          officia aperiam ipsa dolores id! Ab laudantium magni quasi, minus
          labore veniam quisquam aperiam eos veritatis consequuntur modi facere
          sed aspernatur praesentium enim, repellat earum doloremque error
          exercitationem voluptatum. Molestiae aspernatur laudantium quae iste
          a. Quis asperiores assumenda voluptas quam, obcaecati quod nulla atque
          dolores quaerat temporibus sequi saepe error, recusandae mollitia
          veritatis. Expedita optio reiciendis sunt excepturi iure sequi
          cupiditate! Eaque vel mollitia amet maiores placeat voluptatum tenetur
          nobis sit ullam ut? Aliquam quo consectetur neque ea fuga? Quasi
          pariatur dicta a fugit ullam, iusto nemo rerum maxime animi velit.
          Consequuntur voluptate ab, nisi laboriosam deleniti fugit! Sapiente
          officia molestias est error tempore nemo magni eius a temporibus
          asperiores voluptatibus, saepe natus molestiae, aut eligendi vero
          doloremque!
        </p>
      </article>
      <article className="md:h-[90%] md:w-[50%] border-t-[1px] md:border-t-0 md:border-l-[1px] border-emerald-500">
        <h2 className="text-2xl font-mono font-bold text-center mt-5">
          What I&apos;ve Been Using
        </h2>
        <div className="flex flex-col">
          <h3 className="text-center font-mono text-xl my-5">Front End</h3>
          {renderImageLinks(frontEnd)}
          <hr className="mt-5 border-t border-emerald-500" />
          <h3 className="text-center font-mono text-xl my-5">Back End</h3>
          {renderImageLinks(backEnd)}
          <hr className="mt-5 border-t border-emerald-500" />
          <h3 className="text-center font-mono text-xl my-5">Tools</h3>
          {renderImageLinks(tools)}
          <hr className="mt-5 border-t border-emerald-500" />
          <h3 className="text-center font-mono text-xl my-5">Frameworks</h3>
          {renderImageLinks(frameworks)}
          <hr className="mt-5 border-t border-emerald-500" />
        </div>
      </article>
    </section>
  );
};

export default About;
