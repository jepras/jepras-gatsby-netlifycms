import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    {/* <Helmet>
      <title>Hey</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Helmet> */}

    <Helmet
      title="JepRas | Personal Website"
      script="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
