import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import jeppe from '../../static/img/jeppe-with-bg.jpg';
import SocialMedia from '../components/SocialMedia';



export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section hero-body is-fullheight">
          <div className="container">
          <div className="columns is-centered">
          <div className="column is-2">
            <h1 className="title is-4">Jeppe Rasmussen</h1>
            <p className="subtitle is-7">Project Manager @ Microsoft</p>
            <hr />
            <img src={jeppe} alt="Jeppe" className="margin-bottom-0" />
            <br /><hr />
            <SocialMedia /> 
          
          </div>
            <div className="content column is-10">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>          

            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
            </div>
          </div>
          </div>
          
        </section>
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
