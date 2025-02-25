import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/wing-waving_duck.gif";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import "../About/about.css";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Hi, I’m Celine—a digital designer and front-end developer based in
              Vancouver, BC, Canada. I’m currently in my 4th term of the Digital
              Design and Development (D3) Program at BCIT. Before diving into
              the world of design and development, I earned a Bachelor’s degree
              in Biology from the University of British Columbia. My scientific
              background honed my research and analytical skills, giving me a
              unique perspective when approaching challenges and working with
              data. I’m passionate about web development, graphic design, and
              photography, and I’m always eager to learn new skills and explore
              fresh perspectives. If you’d like to connect, feel free to reach
              out—I’m always happy to make new friends and collaborate!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid avatar-img"
                alt="avatar"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={11} className="home-about-description-part">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> Skillset </span> I Work With
            </h1>
            <br />
            <Techstack />
          </Col>
        </Row>

        <Row>
          <Col md={11} className="home-about-description-part">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> Tools </span> I Use
            </h1>
            <br />
            <Toolstack />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/MeowCeline00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/congling-wang-22a475172/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/celinemumu_00/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
