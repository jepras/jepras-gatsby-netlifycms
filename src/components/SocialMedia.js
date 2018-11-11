import React from 'react';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';
import github from '../img/github-icon.svg';

const SocialMedia = () => (
  <div className="has-text-centered">
    <a href="https://www.instagram.com/jep.ras/"><img
      src={instagram}
      alt="instagram"
      className="image display-inline is-16x16"
    /></a>
    <a href="https://twitter.com/jepras_"><img
      src={twitter}
      alt="twitter"
      className="image display-inline is-16x16"
    /></a>
    <a href="https://github.com/jepras/"><img
      src={github}
      alt="github"
      className="image display-inline is-16x16"
    /></a>
    <a href="https://www.linkedin.com/in/jepras/"><img
      src={linkedin}
      alt="linkedin"
      className="image display-inline is-16x16"
    /></a>
  </div>
);

export default SocialMedia;
