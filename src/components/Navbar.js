import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/jr.png';
import circusmonkey from '../img/monkey/circus-monkey.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image is-32x32">
            <img src={logo} alt="JepRas" />
          </figure>
        </Link>
      </div>
      <div className="navbar-menu">
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
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
