import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const NowPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section columns">
              
              <div className="column is-two-thirds"><h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              </div>
            
            <div className="column is-one-third">
            
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a class="twitter-timeline" data-theme="light" data-link-color="#FD461E" href="https://twitter.com/jepras_?ref_src=twsrc%5Etfw">Tweets by jepras_</a></p> </blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
