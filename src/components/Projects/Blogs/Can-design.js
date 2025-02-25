import React from "react";
import { Container } from "react-bootstrap";
import CanHero from "../../../Assets/Projects/can_design.jpg"; 

function CanDesign() {
  return (
    <Container className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">CAN DESIGN</h1>
        <p className="blog-category">GRAPHIC DESIGN</p>
      </div>

      <div className="blog-image-section">
        <img
          src={CanHero} 
          alt="Forest Vitae Can Design"
          className="blog-image"
        />
      </div>

      <p className="blog-date">OCT. 2024 - NOV. 2024</p>

      <div className="blog-content">
        <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
        <p>
          ForestVitae is an imaginary company that produces a variety of flavored
          sparkling waters. For this project, I designed three versions of can packaging
          to represent different flavors: pure spring sparkling water, chocolate, and apple.
        </p>
        <p>
          These designs were created using Photoshop and Adobe Illustrator, with the goal
          of evoking the sensation of enjoying ingredients sourced directly from a natural
          forest when drinking the refreshment.
        </p>
      </div>
    </Container>
  );
}

export default CanDesign;
