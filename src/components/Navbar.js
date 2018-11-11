import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/jr.png';

class Navbar extends React.Component {
  /* constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  } */

  render() {
/*     const { isOpen } = this.state;*/   
   return (
      <nav className="navbar hero-head" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image is-32x32">
                <img src={logo} alt="JepRas" />
              </figure>
            </Link>
    
            <a role="button" class="navbar-burger burger toggle" aria-label="menu" aria-expanded="false" data-target="jeprasNav">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
    
          <div id="jeprasNav" className="navbar-menu">
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
        </div>
      </nav>
    );
  }
} 

export default Navbar;
