import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.gif`} alt="" />
      </Link>
      <header>
        <h2>AJ Southammavong</h2>
        {/* <p>
          <a href="mailto:arnoldsouth@gmail.com">arnoldsouth@gmail.com</a>
        </p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m AJ. I'm an accountant-turned-software developer with a passion
        for creating web apps and services and a hunger to continually expand my
        knowledge and skills.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? (
            <Link to="/about" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/resume" className="button">
              Resume
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        📍 bay area, ca
        {/* &copy; AJ Southammavong <Link to="/">arnold.wtf</Link>. */}
      </p>
    </section>
  </section>
);

export default SideBar;
