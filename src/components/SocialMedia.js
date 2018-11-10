import React from 'react';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';
import github from '../img/github-icon.svg';

const SocialMedia = () => (
  <div className="has-text-centered">
    <img
      src={instagram}
      href="https://www.instagram.com/jep.ras/"
      alt="instagram"
      className="image display-inline is-16x16"
    />
    <img
      src={twitter}
      href="https://twitter.com/jepras_"
      alt="twitter"
      className="image display-inline is-16x16"
    />
    <img
      src={github}
      href="https://github.com/jepras/"
      alt="github"
      className="image display-inline is-16x16"
    />
    <img
      src={linkedin}
      href="https://www.linkedin.com/in/jepras/"
      alt="linkedin"
      className="image display-inline is-16x16"
    />
  </div>
);

export default SocialMedia;
