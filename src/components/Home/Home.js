import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/celine_w_vector_bg.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Tilt from "react-parallax-tilt";

import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Congling Wang</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>

              <div className="home-button-container">
                <a
                  href="https://www.linkedin.com/in/congling-wang-22a475172/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-connect-button"
                  aria-label="Linkedin Profile"
                >
                  <span>Let's Connect!</span>
                </a>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: -20 }}
              />
             
             </Tilt>
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
