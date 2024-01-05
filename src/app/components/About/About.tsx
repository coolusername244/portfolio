import React from 'react';
import TechStackIcons from './TechStack';

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
      <div className="w-[100%] my-9 text-center">
        <button className="bg-emerald-500 hover:bg-emerald-700 p-3 rounded-md transition duration-200 ease-in-out">
          Want a copy of my resume?
        </button>
      </div>
      <article className="">
        <h2 className="text-2xl font-mono font-bold text-center mt-5">
          What I&apos;ve Been Using
        </h2>
        <TechStackIcons />
      </article>
    </section>
  );
};

export default About;
