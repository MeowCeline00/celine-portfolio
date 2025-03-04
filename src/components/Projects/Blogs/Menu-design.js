import React, { useContext, useState, useCallback } from "react";
import { ThemeContext } from "../../../Context/theme"; 
import { Link } from "react-router-dom";
import PSicon from "../../../Assets/Projects/ps.png";
import Illustratoricon from "../../../Assets/Projects/illustrator.png";
import CanHero from "../../../Assets/Projects/can_design.jpg";
import Canfront from "../../../Assets/Projects/original_taste_front.jpg";
import Canflavors from "../../../Assets/Projects/can_various_flavors.jpg";
import Canside from "../../../Assets/Projects/original_taste_side.jpg";
import Canspread from "../../../Assets/Projects/can_spread_apple.jpg";

import "./blog.css"; 

function CanDesign() {
  const [{ themename }] = useContext(ThemeContext);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const blogNavigation = {
    prev: {
      path: "/projects/blogs/logo-design", 
      title: "Logo Design"
    },
    next: {
      path: "/projects/blogs/web-design", 
      title: "Web Design"
    }
  };
  
  const mockupImages = [
    { src: Canfront, alt: "Forest Vitae Can Front Design", caption: "Pure Taste - Front" },
    { src: Canside, alt: "Forest Vitae Can Side Design", caption: "Pure Taste - Side" },
    { src: Canspread, alt: "Forest Vitae Can Spread View", caption: "Apple Taste - Spread View" },
    { src: Canflavors, alt: "Forest Vitae Can Different Flavors", caption: "Different Taste of Flavors" }
  ];
  
  const openSlideshow = useCallback((index) => {
    setCurrentSlide(index);
    setShowSlideshow(true);
    document.body.style.overflow = 'hidden'; 
  }, []);
  
  const closeSlideshow = useCallback(() => {
    setShowSlideshow(false);
    document.body.style.overflow = 'auto';
  }, []);
  
  
  const prevSlide = useCallback((e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? mockupImages.length - 1 : prev - 1));
  }, [mockupImages.length]);
  
  const nextSlide = useCallback((e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === mockupImages.length - 1 ? 0 : prev + 1));
  }, [mockupImages.length]);
  
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);
  
  const handleKeyDown = useCallback((e) => {
    if (!showSlideshow) return;
    
    if (e.key === 'Escape') {
      closeSlideshow();
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev === 0 ? mockupImages.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setCurrentSlide((prev) => (prev === mockupImages.length - 1 ? 0 : prev + 1));
    }
  }, [showSlideshow, closeSlideshow, mockupImages.length]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; 
    };
  }, [handleKeyDown]);

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
          
          <h3 className="blog-subheading">Main Tools Used</h3>
          <div className="blog-icon-container">
            <img src={PSicon} alt="Photoshop icon" className="blog-icon-image" />
            <img src={Illustratoricon} alt="Illustrator icon" className="blog-icon-image" />
          </div>
          
          <h3 className="blog-subheading">Struggles</h3>
          <p>
            The main challenge I faced was blending the photo of the man with the landscape while incorporating elements that 
            pop out around his head to create a brainstorming effect. To achieve this, I watched instructional videos on YouTube, 
            specifically following a tutorial from <a href="https://youtu.be/iOYz669WNpU?si=UtCl5sd5aYnnbThu" target="_blank" rel="noopener noreferrer"><strong>LetsPhotoshop</strong></a>.
          </p>
          <p>
            Another challenge was integrating the layout of the ingredients and labels into my design. Initially, I overlooked the fact 
            that the can could be rotated, meaning my design had to accommodate both official languages—English and French—on 
            opposite sides. This required adjusting the image size and repositioning the label content accordingly.
          </p>
          
          <h3 className="blog-subheading">Success</h3>
          <p>
            With guidance from Professor Daemon in BCIT's D3 Program, I successfully created three versions of the drink. The final designs are more consistent and feature properly formatted labels.
          </p>
          
          <h3 className="blog-subheading">Mockups</h3>
          <div className="can-mockup-container">
            {mockupImages.map((image, index) => (
              <div className="mockup-section" key={index}>
                <h4 className="mockup-subheading">{image.caption}</h4>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="can-image" 
                  onClick={() => openSlideshow(index)}
                />
              </div>
            ))}
          </div>
          
          <div className="blog-navigation">
            {blogNavigation.prev && (
              <Link to={blogNavigation.prev.path} className="nav-link prev">
                <span className="nav-arrow nav-prev-arrow">←</span>
                <span className="nav-text">Previous: {blogNavigation.prev.title}</span>
              </Link>
            )}
            
            {blogNavigation.next && (
              <Link to={blogNavigation.next.path} className="nav-link next">
                <span className="nav-text">Next: {blogNavigation.next.title}</span>
                <span className="nav-arrow nav-next-arrow">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    
      {showSlideshow && (
        <div className="slideshow-modal" onClick={closeSlideshow}>
          <div className="slideshow-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSlideshow}>×</button>
            
            <div className="slide">
              <img 
                src={mockupImages[currentSlide].src} 
                alt={mockupImages[currentSlide].alt} 
                className="slide-image" 
              />
            </div>
            
            <p className="slide-caption">{mockupImages[currentSlide].caption}</p>
            
            <div className="slide-indicators">
              {mockupImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
            
            <button className="nav-button prev-button" onClick={prevSlide}>←</button>
            <button className="nav-button next-button" onClick={nextSlide}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CanDesign;