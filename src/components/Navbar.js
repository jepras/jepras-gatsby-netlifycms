import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/jr.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="JepRas" />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Me
        </Link>
        <Link className="navbar-item" to="/now">
          Now
        </Link>
        <Link className="navbar-item" to="/products">
          Projects
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={logo} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
