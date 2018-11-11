import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../img/logo-text.svg';

const StyledNav = styled('nav')(`
  background-color: white;
  display: grid;
  grid-template-areas:
    "brand menu menu";
  align-items: center;
  grid-template-rows: minmax(3em, auto);
  -webkit-box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
  -moz-box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
  box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
  
  a {
    text-decoration: none;
    color: inherit;
  }

  .cta {
    background-color: orange;
    //color: white;
    padding: 0.3em 0.5em;
  }

  @media (max-width: 650px) {
    position: sticky;
    z-index: 99;
    top: 0;
    grid-template-areas:
      "brand toggle"
      "menu menu";
    grid-template-rows: minmax(3em, auto) auto;
  }

  .brand {
    grid-area: brand;
    justify-self: left;
    line-height: 0; // make anchor wrap logo image
    margin-left: 1rem;
  }

  .toggle {
    grid-area: toggle;
    justify-self: right;
    display: none; // see media query
    align-items: center;
    margin-right: 1rem;

    img {
      vertical-align: center;
    }

    @media (max-width: 650px) {
      display: grid;
    }
  }

  .menu {
    grid-area: menu;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-column-gap: 2rem;
    justify-content: end;
    align-items: center;
    margin-right: 1rem;

    @media (max-width: 650px) {
      grid-auto-flow: row;
      grid-auto-rows: minmax(3em, auto);
      grid-auto-columns: 1fr;
      justify-items: stretch;
      align-items: stretch;
      margin: 0;
      border-top: solid 1px lightgray;

      &.is-closed {
        display: none;
      }

      & > * {
        border-bottom: solid 1px lightgray;
        text-align: center;
        display: grid;
        align-content: center;
      }
    }
  }
`);

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <StyledNav
        role="navigation"
        ariaLabel="main navigation"
      >
        <Link to="/" className="brand">
          <img className={css`margin: 0;`} src={logo} alt="Urban Sai Gon logo" />
        </Link>
        <div
          className="toggle"
          role="button"
          tabIndex="0"
          aria-label="menu"
          aria-expanded="false"
          onClick={this.toggleHamburger}
          onKeyDown={this.toggleHamburger}
        >
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <div className={isOpen ? 'menu' : 'menu is-closed'}>
          <Link to="/studios">
            <h3 className={css`padding: 0; margin: 0;`}>Studios</h3>
          </Link>
          <Link to="/guide">
            <h3 className={css`padding: 0; margin: 0;`}>Guide</h3>
          </Link>
          <Link className="cta" to="/contact">
            <h3 className={css`padding: 0; margin: 0;`}>Contact</h3>
          </Link>
        </div>
      </StyledNav>
    );
  }
}

export default Navbar;
