import React from 'react';
import circusmonkey from '../img/monkey/circus-monkey.png';
import SocialMedia from '../components/SocialMedia';

const Navbar = () => (
  <footer className="footer columns no-right-padding ftr">
    <div className="column" />
    <div className="column has-text-centered is-four-fifths">
      <p>
        <strong>Get in contact</strong>
      </p>
      <SocialMedia />
    </div>
    <div className="column">
      <img
        src={circusmonkey}
        alt="circusmonkey"
        className="image is-32x32 is-pulled-right"
      />
    </div>
  </footer>
);

export default Navbar;
