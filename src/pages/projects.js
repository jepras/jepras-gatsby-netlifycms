import React from "react";
import Layout from "../components/Layout";

export default class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-11 is-offset-1">
                  <div className="content">
                    {/* INTRODUCTION */}
                    <div className="columns">
                      <div className="column is-10">
                        <h3 className="has-text-weight-semibold is-size-2">
                          Things I have done so far..
                        </h3>
                        <p>
                          As an aspiring entrepreneur have I been a part of
                          projects in various areas. Hopefully in the future I
                          will be able to connect the dots looking backwards and
                          see a perfect trajectory towards something amazing -
                          but for now it is kinda messy.{" "}
                        </p>
                      </div>
                    </div>
                    <br />
                    <div>
                      <h1>Coding</h1>
                      <p>
                        As a front end React/Redux developer I love leveraging
                        the power of APIs to build and integrate many tools into
                        something powerful. I am a big fan of everthing
                        serverless, integrated and automated.
                      </p>

                      <br />

                      {/* Project 1: MFA Frontend */}
                      <div className="columns">
                        <div className="column is-6">
                          <div
                            style={{
                              position: "relative",
                              "padding-bottom": "62.5%",
                              height: "0"
                            }}
                          >
                            <iframe
                              src="https://www.useloom.com/embed/33ac3c9b23334a8796b8fb8938e68ff4"
                              frameBorder="0"
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowfullscreen
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="column is-6">
                          <div>
                            <p className="">
                              <strong>
                                Front end Auth0 MFA login flow using React/Redux
                                with MaterialUI
                              </strong>
                              <br />
                              <a href="https://github.com/jepras/auth-frontend-react">
                                https://github.com/jepras/auth-frontend-react
                              </a>
                            </p>
                          </div>
                          <div
                            className="tags"
                            style={{ "margin-top": "0.5rem" }}
                          >
                            <span class="tag is-success">React</span>
                            <span class="tag is-success">Redux</span>
                            <span class="tag">Auth0</span>
                            <span class="tag">MaterialUI</span>
                          </div>

                          <p>
                            This login flow was created together with a startup
                            that had provided the API endpoints from express
                            servers. <br />
                            <br />
                            The front end was tested with Mocha & helped the
                            company detect errors and improve error handling
                            through their UI.
                          </p>
                        </div>
                      </div>

                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      {/* Project 2: Coding Coach */}
                      <div className="columns">
                        <div className="column is-6">
                          <div>
                            <p className="">
                              <strong>
                                Coding Coach: React/Redux UI with
                                Typeform/Airtable integrations.
                              </strong>
                              <br />
                              <a href="https://github.com/jepras/coding-coach">
                                https://github.com/jepras/coding-coach
                              </a>
                            </p>
                          </div>
                          <div
                            className="tags"
                            style={{ "margin-top": "0.5rem" }}
                          >
                            <span class="tag is-success">React</span>
                            <span class="tag is-success">Redux</span>
                            <span class="tag">Firebase</span>
                            <span class="tag">Typeform</span>
                            <span class="tag">Airtable</span>
                          </div>

                          <p>
                            My entry for #24hrstartup challenge I did in 12
                            hours while in transit from Madrid to CPH
                            <br />
                            <br />
                            Collects requests for coding help through Typeform,
                            notifies coaches on platform with requested skills &
                            updates interface when request have been accepted.
                            Authentication through Firebase.
                          </p>
                        </div>
                        <div className="column is-6">
                          <div
                            style={{
                              position: "relative",
                              "padding-bottom": "62.5%",
                              height: "0"
                            }}
                          >
                            <iframe
                              src="https://www.useloom.com/embed/0ff92dcc723b4387a47addfa4de86b33"
                              frameBorder="0"
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowfullscreen
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <br />
                      <hr />
                      <br />
                      <br />
                      {/* Project 3: JepRas */}
                      <div className="columns">
                        <div className="column is-6">
                          <img
                            style={{ borderRadius: "5px" }}
                            src={"/img/gatsbyarchitecture.jpg"}
                            alt="Gatsby Architecture"
                          />
                        </div>
                        <div className="column is-6">
                          <div className="is-vcentered">
                            <p className="">
                              <strong>
                                JepRas: Personal website & blog created with
                                Gatsby & GraphQL
                              </strong>
                              <br />
                              <a href="https://github.com/jepras/jepras-gatsby-netlifycms">
                                https://github.com/jepras/jepras-gatsby-netlifycms
                              </a>
                            </p>
                          </div>
                          <div
                            className="tags"
                            style={{ "margin-top": "0.5rem" }}
                          >
                            <span class="tag is-success">React</span>
                            <span class="tag is-success">Gatsby</span>
                            <span class="tag is-success">GraphQL</span>
                            <span class="tag is-primary">Markup</span>
                            <span class="tag">Bulma</span>
                          </div>

                          <p>
                            This website follows the JAMstack architecture for
                            blazing fast rendering, low maintenance cost,
                            scalability & security <br />
                            <br />
                            Blog content is provided through Netlify's headless
                            CMS and served through GraphQL, which makes it easy
                            for content writers to update.
                            <br />
                            Styled with Bulma CSS framework.
                          </p>
                        </div>
                      </div>

                      <br />
                      <br />
                      <hr />
                      <br />
                      <br />
                      {/* Project 4: Scan 2 Sheet */}
                      <div className="columns">
                        <div className="column is-6">
                          <div>
                            <p className="">
                              <strong>
                                Scan2Sheet: Inventory Management System for
                                craftsmen
                              </strong>
                              <br />
                              <a href="https://github.com/jepras/auth-frontend-react">
                                https://github.com/jepras/auth-frontend-react
                              </a>
                            </p>
                          </div>
                          <div
                            className="tags"
                            style={{ "margin-top": "0.5rem" }}
                          >
                            <span class="tag is-success">React</span>
                            <span class="tag is-success">Redux</span>
                            <span class="tag">Firebase</span>
                            <span class="tag">Google Sheets</span>
                            <span class="tag">Airtable</span>
                          </div>

                          <p>
                            Created for a locksmith who needed a quick way to
                            scan items in his warehouse & calculate final cost
                            of items used <br />
                            <br />
                            Made everything serverless with
                            Sheets/Firebase/Airtable to keep security high,
                            maintenance cost low & for users to easily update
                            pricelists from vendors.
                          </p>
                        </div>
                        <div className="column is-6">
                          <div
                            style={{
                              position: "relative",
                              "padding-bottom": "62.5%",
                              height: "0"
                            }}
                          >
                            <iframe
                              src="https://www.useloom.com/embed/4fa9896392d649b58833af293380e7c5"
                              frameBorder="0"
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowfullscreen
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    {/* BOTTOM TEXT & IMAGES */}
                    <div className="columns">
                      <div className="column is-11">
                        <div>
                          <h1 className="has-text-weight-semibold">Social</h1>
                          <p>
                            As I am grateful for having growed up in a safe
                            environment, my thoughts naturally run towards how I
                            can help others. Especially with technology.
                          </p>
                          <br />
                        </div>

                        <div>
                          <h3>Infinite Climbing</h3>
                          <p>
                            <strong>
                              An Augmented Reality climbing game that supports
                              kids in their rehabilitation.
                            </strong>
                            <br /> Infinite Climbing helps sick kids perform
                            tedious exercises by turning it into a game.
                            <br />
                            <br />
                            The idea emerged after the Future Children Hospital
                            of Copenhagen needed ideas to activate hospitalized
                            kids. If kids have been hospitalized for 6 months,
                            they come out with the physical level of 70year
                            olds.
                            <br /> <br />
                            Keeping or gaining their strength in their upper
                            body speeds up their recovery, hence the idea for{" "}
                            <a
                              href="https://infiniteclimbing.netlify.com"
                              target="_blank"
                            >
                              Infinite Climbing
                            </a>
                            ..
                            <br />
                          </p>
                        </div>
                        <div className="tile is-ancestor">
                          <div className="tile is-vertical">
                            <div className="tile">
                              <div className="tile is-parent is-vertical">
                                <article className="tile is-child">
                                  <img
                                    style={{ borderRadius: "5px" }}
                                    src={"/img/rib4.png"}
                                    alt="alt text"
                                  />
                                </article>
                              </div>
                              <div className="tile is-parent">
                                <article className="tile is-child">
                                  <img
                                    style={{ borderRadius: "5px" }}
                                    src="/img/ribclimbing.png"
                                    alt="alt"
                                  />
                                </article>
                              </div>
                            </div>
                            <div className="tile is-parent columns">
                              <article className="tile is-child column is-12">
                                <iframe
                                  width="100%"
                                  height="500"
                                  src="https://www.youtube.com/embed/i1H5X_d0qYA"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                />
                              </article>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <div>
                          <h3>PinoleroGO</h3>
                          <p>
                            Over the course of multiple months while travelling
                            the idea was emerging; I wanted to build sport
                            facilities for the school in Nicaragua where I had
                            lived. <br />
                            <br />
                            In 3 months I took it from idea to finished build.{" "}
                            <ul>
                              <li>
                                The first month was spent validating the idea
                                with the village, absorbing all knowledge I
                                needed to execute on this and preparing the{" "}
                                <a
                                  href="https://indiegogo.com/projects/empower-nicaraguan-kids-through-sport"
                                  target="_blank"
                                >
                                  crowdfunding campaign
                                </a>
                                .
                              </li>
                              <li>
                                Month 2 was a constant effort to create as much
                                awareness as possible while educating the kids
                                on the school on physical education.
                              </li>
                              <li>
                                Thanks to hundreds of kind souls we had the
                                money 3 days before our all-or-nothing campaign
                                deadline, so the last month was spent building
                                the actual field.
                              </li>
                            </ul>
                            <br />
                            This was the outcome..
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tile is-ancestor">
                      <div className="tile is-vertical">
                        <div className="tile">
                          <div className="tile is-parent is-vertical">
                            <a
                              href="https://indiegogo.com/projects/empower-nicaraguan-kids-through-sport"
                              target="_blank"
                            >
                              <article className="tile is-child">
                                <img
                                  style={{ borderRadius: "5px" }}
                                  src={
                                    "/img/12244720_1649204598629703_6545847221523179536_o.jpg"
                                  }
                                  alt="alt text"
                                />
                              </article>
                            </a>
                          </div>
                          <div className="tile is-parent">
                            <a
                              href="https://indiegogo.com/projects/empower-nicaraguan-kids-through-sport"
                              target="_blank"
                            >
                              <article className="tile is-child">
                                <img
                                  style={{ borderRadius: "5px" }}
                                  src="/img/12418865_1661239594092870_5006679964399066812_o.jpg"
                                  alt="alt"
                                />
                              </article>
                            </a>
                          </div>
                        </div>
                        <div className="tile is-parent columns">
                          <article className="tile is-child column is-12">
                            <iframe
                              width="100%"
                              height="500"
                              src="https://www.youtube.com/embed/5lpXoREGyEQ"
                              frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            />
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
