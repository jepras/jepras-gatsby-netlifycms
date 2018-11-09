import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div className="screen">
    <Helmet>
      <title>JepRas | Personal Website</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Helmet>

    {/* <Helmet
      title="JepRas | Personal Website - v2"
      script="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    /> */}
    <Navbar />
    <div className="page">{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
