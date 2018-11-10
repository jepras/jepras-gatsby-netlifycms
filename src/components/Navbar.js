import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/jr.png';

const Navbar = () => (
  <nav className="navbar hero-head">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image is-32x32">
            <img src={logo} alt="JepRas" />
          </figure>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link className="navbar-item" to="/now">
          Now
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
