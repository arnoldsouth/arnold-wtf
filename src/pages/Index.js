import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const Index = () => (
  <>
    <Main
      description={
        "AJ Southammavong's personal website. Chicago based University of Illinois graduate, " +
        'Ex-accountant at Curology and Grant Thornton.'
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              Meet my chow chow, Touka
              {/* <Link to="/">About this site</Link> */}
            </h2>
            {/* <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p> */}
          </div>
        </header>
        <p id="intro">
          <div className="logo side-by-side-img">
            <a
              href="https://www.instagram.com/toukachow/"
              target="_blank"
              rel="noreferrer"
              className="logo"
            >
              <img
                src={`${PUBLIC_URL}/images/touka-chewing-stick.png`}
                alt=""
              />
            </a>

            <a
              href="https://www.instagram.com/toukachow/"
              target="_blank"
              rel="noreferrer"
              className="logo"
            >
              <img src={`${PUBLIC_URL}/images/touka-baby-zebra.png`} alt="" />
            </a>
          </div>

          {/* Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me. */}
        </p>
      </article>
    </Main>
  </>
);

export default Index;
