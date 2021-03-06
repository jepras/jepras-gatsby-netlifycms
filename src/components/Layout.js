import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div className="screen hero">
    <Helmet>
      <title>JepRas | Personal Website</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js" />
    </Helmet>

    <Navbar />
    <div className="page">{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
