import React from 'react';
import TechStackIcons from './TechStack';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] w-[90%] items-center ml-[5%] md:pt-[5vh]"
    >
      <article className="px-12">
        <h2 className="text-2xl font-mono font-bold text-center">
          Hello there! 👋
        </h2>
        <p className="my-5 text-left">
          As someone who always had an eye for improvements in efficiency within
          a business yet struggled with the gaining momentum against the
          monolithic business structures, I decided to become a part of the
          solution.
        </p>
        <p className="my-5 text-left">
          My first &quot;Hello World&quot; was written in February 2020 when I
          tried the 5 day coding challenge from{' '}
          <a
            className="underline text-emerald-500"
            target="_blank"
            href="https://codeinstitute.net/se/5-day-coding-challenge/"
          >
            Code Institute
          </a>
          .
        </p>
        <p className="my-5 text-left">
          Since then I have made numerous websites from a Google front end clone
          to a functional e-commerce store written with Django and Python and a
          stock trading simulator built with NextJS
        </p>
        <p className="my-5 text-left">
          But thats enough of me, carry to see what I have been up to! Want to
          get in touch? Click{' '}
          <a href="#contact" className="underline text-emerald-500">
            here
          </a>
          !
        </p>
      </article>
      <div className="w-[100%] my-9 text-center">
        <a href="/lee-sheppard-resume.pdf" download>
          <button className="bg-emerald-500 hover:bg-emerald-700 p-3 rounded-md transition duration-200 ease-in-out">
            Want a copy of my resume?
          </button>
        </a>
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
