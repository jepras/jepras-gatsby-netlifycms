import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import monkey from "../img/monkey/monkey.png";
import circusmonkey from "../img/monkey/circus-monkey.png";
import tailmonkey from "../img/monkey/tailmonkey.png";
import jeppe from "../img/jeppe-no-bg.png";
import pinolerogogirl from "../img/pinolerogogirl.jpg";
import SocialMedia from "../components/SocialMedia";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="is-white is-halfheight has-text-centered jumbotron">
          <img
            src={circusmonkey}
            alt="circusmonkey"
            className="image is-32x32 is-pulled-right monkey-top"
          />
          <div className="container">
            <div className="columns is-offset-one-quarter">
              <div className="column hero">
                <div className="hero-body">
                  <div className="center">
                    <h2 className="title">Jeppe Rasmussen</h2>
                    <h2 className="subtitle">
                      <br />I am a tech nerd who is constantly exploring new
                      technologies to figure out how they can be used to improve
                      the world.
                    </h2>

                    <SocialMedia />
                  </div>
                </div>
              </div>

              <div className="column">
                <img src={jeppe} alt="Jeppe" className="margin-bottom-0" />
              </div>
            </div>
          </div>
        </section>

        <section className="section hero is-primary no-padding">
          <div className="container has-text-centered hero-body no-padding">
            <div className="column is-half is-offset-one-quarter no-padding">
              <h1 className="title is-2">Me in 10 seconds</h1>
              <hr />
              <p className="subtitle">
                Schooled as a marketeer, previously managed cloud + security
                projects in Microsoft & now on a journey to build my own impact
                startup (while coding on the side){" "}
                <span role="img" aria-label="strong-arm">
                  💪
                </span>
                <br />
                <br />
                Previously I have crowdfunded my way to create sport facilities
                for a school in Nicaragua, lived as a digital nomad with my
                data-driven marketing consulting business and done Digital
                Marketing for a startup{" "}
                <span role="img" aria-label="strong-arm">
                  ✈️
                </span>
                <br />
                <br /> Currently living, socializing, reading, coding, climbing
                & running around Copenhagen{" "}
                <span role="img" aria-label="strong-arm">
                  ☀️
                </span>
                <br />
                <br />
                <Link to="/now">Want to know more?</Link>
              </p>
              <img src={monkey} alt="Monkey" className="less-padding" />
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-body container">
            <h1 className="title is-2 has-text-centered">Projects</h1>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification tile-1">
                      <p className="title">
                        <span role="img" aria-label="strong-arm">
                          🏗 ️
                        </span>{" "}
                        <a href="https://beresourceful.org">BeResourceful</a>
                      </p>
                      <p className="subtitle">
                        IoT platform to trace building components in the
                        construction sector to enable more reuse of materials
                      </p>
                    </article>
                    <article className="tile is-child notification tile-2">
                      <p className="title">
                        <span role="img" aria-label="strong-arm">
                          🎤
                        </span>{" "}
                        <a href="https://reccall.herokuapp.com/">
                          Audiorecorder
                        </a>{" "}
                      </p>
                      <p className="subtitle">
                        Curious about your voice output? call this number and
                        get your recording
                      </p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification tile-2">
                      <p className="title">
                        <span role="img" aria-label="strong-arm">
                          ⚽
                        </span>{" "}
                        <a href="https://www.youtube.com/watch?v=5lpXoREGyEQ">
                          PinoleroGO
                        </a>
                      </p>
                      <p className="subtitle">
                        Crowdfunded 10k to build sport facilities for a school
                        in Nicaragua{" "}
                        <span role="img" aria-label="strong-arm">
                          😍
                        </span>
                      </p>
                      <figure className="image is-4by3">
                        <img
                          alt="test"
                          src={pinolerogogirl}
                          style={{ borderRadius: "5px" }}
                        />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification tile-1">
                    <p className="title">
                      <span role="img" aria-label="strong-arm">
                        💡
                      </span>
                      Any ideas?{" "}
                    </p>
                    <p className="subtitle">
                      Would love to collaborate on stuff!{" "}
                      <span role="img" aria-label="strong-arm">
                        🙌
                      </span>
                      Reach out to me on{" "}
                      <a href="https://twitter.com/jepras_">Twitter</a>
                    </p>
                    <div className="content" />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification tile-1">
                  <div className="content">
                    <p className="title">
                      <span role="img" aria-label="strong-arm">
                        🕶️
                      </span>{" "}
                      <a href="https://infiniteclimbing.netlify.com">
                        Infinite Climbing
                      </a>{" "}
                    </p>
                    <p className="subtitle">
                      An Augmented Reality climbing game that supports kids in
                      their rehabilitation. <br />
                      <div className="tile is-parent columns">
                        <article className="tile is-child column is-12">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/i1H5X_d0qYA"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          />
                        </article>
                      </div>
                      Infinite Climbing helps sick kids perform tedious
                      exercises by turning it into a game.
                      <br /> <br />
                      <Link to="/now">
                        Press here to see my portfolio and more projects
                      </Link>
                    </p>

                    <div className="content" />
                  </div>
                </article>
              </div>
            </div>
          </div>
          <img
            src={tailmonkey}
            alt="tailmonkey"
            className="image is-64x64 is-pulled-left"
          />
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
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

    site {
      siteMetadata {
        title
      }
    }
  }
`;
