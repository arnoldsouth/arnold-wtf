import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  return (
    <Main
      title="Projects"
      description="Learn about AJ Southammavong's projects."
    >
      <article className="post markdown" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">Projects</Link>
            </h2>
            <p>Recent works</p>
          </div>
        </header>

        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
