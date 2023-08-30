import React from 'react';
import Image from 'next/image';
import { ImageLink } from '../../types/ImageLink';
import { frontEnd, backEnd, tools, frameworks } from './TechStackData';

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

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] w-[90%] items-center ml-[5%] md:pt-[5vh]"
    >
      <article>
        <h2 className="text-2xl font-mono font-bold text-center">
          A Bit About Me
        </h2>
        <p className="my-5 text-center">
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
      <article className="">
        <h2 className="text-2xl font-mono font-bold text-center mt-5">
          What I&apos;ve Been Using
        </h2>
        <h3 className="text-center font-mono text-xl my-5">Front End</h3>
        {renderImageLinks(frontEnd)}
        <h3 className="text-center font-mono text-xl my-5">Back End</h3>
        {renderImageLinks(backEnd)}
        <h3 className="text-center font-mono text-xl my-5">Tools</h3>
        {renderImageLinks(tools)}
        <h3 className="text-center font-mono text-xl my-5">Frameworks</h3>
        {renderImageLinks(frameworks)}
      </article>
    </section>
  );
};

export default About;
