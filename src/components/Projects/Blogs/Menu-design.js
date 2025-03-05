import React, { useContext, useState, useCallback } from "react";
import { ThemeContext } from "../../../Context/theme"; 
import { Link, useNavigate } from "react-router-dom";
import Menuhero from "../../../Assets/Projects/menu_mockup1.jpg";
import Menu_before from "../../../Assets/Projects/menu-4.jpg";
import Menu_after from "../../../Assets/Projects/menu-1.jpg";
import SunnyMenu1 from "../../../Assets/Projects/menu-1.jpg";
import SunnyMenu2 from "../../../Assets/Projects/menu-2.jpg";
import SunnyMenu3 from "../../../Assets/Projects/menu-3.jpg";
import MenuMockup from "../../../Assets/Projects/menu_mockup2.jpg";

import "./blog.css"; 

function MenuDesign() {
  const [{ themename }] = useContext(ThemeContext);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const blogNavigation = {
    prev: {
      path: "/projects/blogs/Can-design", 
      title: "Can Design"
    },
    next: {
      path: "/projects/blogs/Alice-App", 
      title: "Alice Wonderland - Stress Relief App"
    }
  };
  
  const mockupImages = [
    { src: SunnyMenu1, alt: "SunnySide Menu Design Page 1", caption: "Menu Page 1" },
    { src: SunnyMenu2, alt: "SunnySide Menu Design Page 2", caption: "Menu Page 2" },
    { src: SunnyMenu3, alt: "SunnySide Menu Design Page 3", caption: "Menu Page 3" },
    { src: MenuMockup, alt: "SunnySide Menu Mockup", caption: "Menu Mockup" }
  ];
  
  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };
  
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

  const handleSlider = useCallback(() => {
    const slider = document.querySelector('.slider');
    const beforeImage = document.querySelector('.image-before');
    const sliderLine = document.querySelector('.slider-line');
    const sliderButton = document.querySelector('.slider-button');

    if (slider && beforeImage && sliderLine && sliderButton) {
      function updateSlider() {
        const sliderPos = slider.value;
        beforeImage.style.clipPath = `inset(0 ${100 - sliderPos}% 0 0)`;
        sliderLine.style.left = `${sliderPos}%`;
        sliderButton.style.left = `${sliderPos}%`;
      }

      slider.addEventListener('input', updateSlider);
      updateSlider(); 

      return () => {
        slider.removeEventListener('input', updateSlider);
      };
    }
    return () => {};
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    const cleanup = handleSlider();
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      cleanup();
    };
  }, [handleKeyDown, handleSlider]);

  return (
    <div className={`blog-page ${themename}`}>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-text">
            <h1 className="blog-title">MENU DESIGN</h1>
            <p className="blog-category">GRAPHIC DESIGN</p>
          </div>
          <div className="blog-image-container">
            <img src={Menuhero} alt="Hero image of Menu Design" className="blog-image" />
          </div>
        </div>

        <p className="blog-date">JAN. 2024 - APRIL 2024</p>

        <div className="blog-content">
          <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
          <p>
            SunnySide is a brunch restaurant catering to both families and individuals. For this project, I designed a menu for the restaurant, which embraces an old British-style aesthetic. The design, created using Adobe Illustrator and InDesign, aims to evoke a clean, inviting, and warmly welcoming atmosphere.
          </p>
          
          <h3 className="blog-subheading">The Menu</h3>
          <div className="menu-row-container">
            {mockupImages.slice(0, 3).map((image, index) => (
              <div className="menu-item" key={index} onClick={() => openSlideshow(index)}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="menu-thumbnail" 
                />
              </div>
            ))}
          </div>

          <h3 className="blog-subheading">Mockup</h3>
          <div className="mockup-section">
            <img 
              src={MenuMockup} 
              alt="SunnySide Menu Mockup" 
              className="menu-mockup-image" 
              onClick={() => openSlideshow(3)}
            />
          </div>

          <h3 className="blog-subheading">Struggles</h3>
          <p>
            I faced several challenges while working on this menu project. The first was designing the brand logo and selecting a name for the restaurant. As someone who isn't a morning person and often skips breakfast—an unhealthy habit—I wanted this design to serve as a reminder to embrace the warmth and energy of a hearty breakfast and to cherish those moments with family.
          </p>
          <p>
            I named the restaurant SunnySide to reflect the brightness and positivity of the morning. The color palette consists of light yellow, orange, brown, and black, evoking warmth and familiarity. The logo, a combination of a chef's hat and rays of sunshine, symbolizes the nourishment and vitality that a well-prepared breakfast provides. I incorporated brown to add a classic British touch and to emphasize the chef's role in starting the day off right.
          </p>
          <p>
            After completing the initial version, I realized the design felt too plain, with excessive content condensed into a single page and a lack of visual elements to guide the reader. To address this, I redesigned the menu, incorporating images and vector graphics to make it more engaging, structured, and interactive.
          </p>

          <h3 className="blog-subheading">Success</h3>
          <p>
            With guidance from Professor Daemon in BCIT's D3 Program, I introduced a soft yellow background and carefully curated vector images created in Illustrator to add depth and visual appeal. Additionally, I integrated a QR code, making the menu more interactive and modern.
            
          </p>
          <p>
            I also refined the tab spacing and alignment of product names and prices to improve readability and create a more organized, polished, and user-friendly layout. These adjustments resulted in a cohesive, visually appealing menu that effectively captures the essence of the restaurant's brand.
          </p>

          <h3 className="blog-subheading">Before & After</h3>
          <div className="before-after-container">
            <div className="image-container">
              <img
                className="image-before slider-image"
                src={Menu_before}
                alt="Before menu design"
              />
              <img
                className="image-after slider-image"
                src={Menu_after}
                alt="After menu design"
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              aria-label="Percentage of before photo shown"
              className="slider"
            />
            <div className="slider-line" aria-hidden="true"></div>
            <div className="slider-button" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="128"
                  y1="40"
                  x2="128"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="96"
                  y1="128"
                  x2="16"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="48 160 16 128 48 96"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="160"
                  y1="128"
                  x2="240"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="208 96 240 128 208 160"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </div>
          </div>
          
          <div className="blog-navigation">
            {blogNavigation.prev && (
              <a 
                href={blogNavigation.prev.path} 
                className="nav-link prev"
                onClick={(e) => handleNavigation(e, blogNavigation.prev.path)}
              >
                <span className="nav-arrow nav-prev-arrow">←</span>
                <span className="nav-text">Previous: {blogNavigation.prev.title}</span>
              </a>
            )}
            
            {blogNavigation.next && (
              <a 
                href={blogNavigation.next.path} 
                className="nav-link next"
                onClick={(e) => handleNavigation(e, blogNavigation.next.path)}
              >
                <span className="nav-text">Next: {blogNavigation.next.title}</span>
                <span className="nav-arrow nav-next-arrow">→</span>
              </a>
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

export default MenuDesign;