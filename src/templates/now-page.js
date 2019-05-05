import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const NowPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient hero-body is-fullheight">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section columns">
              <div className="column is-two-thirds">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>

              <div className="column is-one-third">
                <blockquote class="twitter-tweet" data-lang="en">
                  <p lang="en" dir="ltr">
                    <a
                      class="twitter-timeline"
                      data-height="400"
                      data-theme="light"
                      data-link-color="#FD461E"
                      href="https://twitter.com/jepras_?ref_src=twsrc%5Etfw"
                    >
                      Tweets by jepras_
                    </a>
                  </p>{" "}
                </blockquote>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                />
              </div>
            </div>
            <hr />
            <div className="section columns">
              <div className="column">
                For years I have dreamt about starting my own business.
                <br />I have done a social project where i crowdfunded money,
                and have done some consulting that traded my time for money, but
                now it is time to take it to the next level.
                <br />
                <br />
                With my current savings I have until August before I am broke
                and need to move back in with my parents. <br />
                That should give me the motivation I need to make something
                happen quick.
                <br />
                <br />
                The big goal would be to get 1500€ MRR within a year. Follow my
                progress here.
              </div>
            </div>
            <div className="section columns">
              <div className="column">
                <canvas id="myChart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const NowPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NowPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

NowPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default NowPage;

export const nowPageQuery = graphql`
  query NowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
