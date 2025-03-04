import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/theme"; 
import CanHero from "../../../Assets/Projects/can_design.jpg";
import Footer from "../../../components/footer/Footer";


import "./blog.css"; 

function CanDesign() {
  const [{ themename }] = useContext(ThemeContext); 

  return (
    <div className={`blog-page ${themename}`}>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-text">
            <h1 className="blog-title">CAN DESIGN</h1>
            <p className="blog-category">GRAPHIC DESIGN</p>
          </div>
          <div className="blog-image-container">
            <img src={CanHero} alt="Forest Vitae Can Design" className="blog-image" />
          </div>
        </div>

        <p className="blog-date">OCT. 2024 - NOV. 2024</p>

        <div className="blog-content">
          <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
          <p>
            ForestVitae is an imaginary company that produces a variety of flavored 
            sparkling waters. For this project, I designed three versions of can 
            packaging to represent different flavors: pure spring sparkling water, 
            chocolate, and apple. These designs were created using Photoshop and 
            Adobe Illustrator, with the goal of evoking the sensation of enjoying 
            ingredients sourced directly from a natural forest when drinking the refreshment.
          </p>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default CanDesign;
