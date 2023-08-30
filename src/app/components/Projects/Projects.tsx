import React from 'react';
import { FaGithub, FaHammer } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { projects } from './ProjectData';
import { Project } from '../../types/Project';

const renderProjects = (items: Project[]) =>
  items.map((item, index) => (
    <article key={index} className="rounded-xl bg-white/10 m-5 p-5">
      <h3 className="text-lg font-mono text-center mb-5">{item.name}</h3>
      <p>{item.description}</p>
      <p className="flex mt-3 items-center">
        <FaGithub />
        <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
          &nbsp;&nbsp;&nbsp;GitHub Repo
        </a>
      </p>
      <p className="flex mt-3 items-center">
        <BsGlobe />
        <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
          &nbsp;&nbsp;&nbsp;Live Site
        </a>
      </p>
      <p className="flex mt-3 items-center">
        <FaHammer />
        &nbsp;&nbsp;&nbsp;Technology Used:
      </p>
      <ul className=" pl-8 pt-3 list-inside">
        {item.techUsed.map((tech, index) => (
          <li key={index} className="list-disc">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  ));

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-mono font-bold text-center mt-10">
        Projects
      </h2>
      <div className="mt-10 md:grid md:grid-cols-2 md:gap-5">
        {renderProjects(projects)}
      </div>
    </section>
  );
};

export default Projects;
