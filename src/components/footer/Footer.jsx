import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme"; 
import "./footer.css";

function Footer() {
  const [{ themename }] = useContext(ThemeContext);
  
  return (
    <Container fluid className={`footer ${themename}`}>
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Designed and Developed by{" "}
            <i className="primary-header">Congling Wang</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="github"
                href="https://github.com/MeowCeline00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
           
            <li className="social-icons">
            <a  
                style={{ color: `var(--clr-primary)` }}
                className="linkedin"
                href="https://www.linkedin.com/in/congling-wang-22a475172/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
            <a  
                style={{ color: `var(--clr-primary)` }}
                className="instagram"
                href="https://www.instagram.com/celinemumu_00/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
            <a  
                style={{ color: `var(--clr-primary)` }}
                className="email"
                href="mailto:congling00369@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;