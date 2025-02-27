import React from "react";
import { Container } from "react-bootstrap";
import CanHero from "../../../Assets/Projects/can_design.jpg";

function CanDesign() {
  return (
    <Container className="blog-container">
      <div className="blog-hero-container">
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
      </div>

      <p className="blog-date">OCT. 2024 - NOV. 2024</p>

      <div className="blog-content">
        <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
        <p>
          ForestVitae is an imaginary company that produces a variety of
          flavored sparkling waters. For this project, I designed three versions
          of can packaging to represent different flavors: pure spring sparkling
          water, chocolate, and apple.
        </p>
        <p>
          These designs were created using Photoshop and Adobe Illustrator, with
          the goal of evoking the sensation of enjoying ingredients sourced
          directly from a natural forest when drinking the refreshment.
        </p>
        <h3 className="blog-subheading">Main Technique Used</h3>
        <p>
          This project was designed and created using Adobe Photoshop and
          Illustrator.
        </p>
        <h3 className="blog-subheading">Struggles & Success</h3>
        <p>
          The main challenge I faced was blending the photo of the man with the
          landscape while incorporating elements that pop out around his head to
          create a brainstorming effect. To achieve this, I watched
          instructional videos on YouTube, specifically following a tutorial
          from LetsPhotoshop
          (https://www.youtube.com/watch?v=iOYz669WNpU&feature=youtu.be).
          Another challenge was integrating the layout of the ingredients and
          labels into my design. Initially, I overlooked the fact that the can
          could be rotated, meaning my design had to accommodate both official
          languages—English and French—on opposite sides. This required
          adjusting the image size and repositioning the label content
          accordingly. With guidance from Professor Daemon in BCIT’s D3 Program,
          I successfully created three versions of the drink. The final designs
          are more consistent and feature properly formatted labels.
        </p>
        <h3 className="blog-subheading">Mockups</h3>

        <section className="blog-products-mockup-gallary">
          <div className="blog-gallary-container">
            <div class="grid">
            <div class="column-xs-12 column-md-4">
            <figure class="blog-img-container">
          <img src="../../../" />
          <figcaption class="img-content">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
            
            </div>
            </div>

          </div>

        </section>

      </div>
    </Container>
  );
}

export default CanDesign;
