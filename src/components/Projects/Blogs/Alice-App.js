import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../Context/theme";
import { Link, useNavigate } from "react-router-dom";
import Alicehero from "../../../Assets/Projects/alice_mockup.png";
import AliceGraphic1 from "../../../Assets/Projects/alice_quiz_1.png";
import AliceGraphic2 from "../../../Assets/Projects/alice_quiz_2.png";
import AliceGraphic3 from "../../../Assets/Projects/alice_quiz_3.png";
import AliceGraphic4 from "../../../Assets/Projects/alice_quiz_4.png";
import AliceGraphic5 from "../../../Assets/Projects/alice_quiz_5.png";
import AliceGraphic6 from "../../../Assets/Projects/alice_quiz_6.png";
import WonderlandVideo from "../../../Assets/Projects/Wonderland.mp4";
import "./blog.css";

function AliceApp() {
  const [{ themename }] = useContext(ThemeContext);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const graphicImages = [
    AliceGraphic1, 
    AliceGraphic2, 
    AliceGraphic3, 
    AliceGraphic4, 
    AliceGraphic5, 
    AliceGraphic6
  ];
  
  const openSlideshow = (index) => {
    setCurrentSlide(index);
    setShowSlideshow(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeSlideshow = () => {
    setShowSlideshow(false);
    document.body.style.overflow = 'auto';
  };
  
  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? graphicImages.length - 1 : prev - 1));
  };
  
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === graphicImages.length - 1 ? 0 : prev + 1));
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`blog-page alice-app ${themename}`}>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-text">
            <h1 className="blog-title">
              WONDERLAND
            </h1>
            <p className="blog-category">
              UI/UX DESIGNER | FRONT END DEVELOPER
            </p>
            <div className="app-button-container">
              <a
                href="https://wonderland-alice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-website-button"
              >
                Journey to our App
              </a>
            </div>
          </div>
          <div className="blog-image-container">
            <img
              src={Alicehero}
              alt="Alice App homepage mockup"
              className="blog-image"
            />
          </div>
        </div>

        <p className="blog-date">JAN. 2024 - APRIL 2024</p>

        <div className="blog-content">
          <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
          <p>
            Wonderland is an innovative app crafted to explore users' mental
            well-being interactively. Inspired by "Alice in Wonderland," it
            evaluates burnout levels through a playful quiz. By incorporating
            elements from the classic story, we guide users on a self-reflective
            journey into their mental health.
          </p>

          <h3 className="blog-subheading">Group Members</h3>
          <p>
            Wonderland is designed and developed by Jillian Gonzales and Congling Wang.
          </p>

          <h3 className="blog-subheading">Initial Design</h3>
          <p>
            Our initial design was created using Figma, with hand-drawn
            graphics using Procreate and Adobe Illustrator.
          </p>
          <div className="embed-container">
            <iframe
              className="embed-iframe"
              src="https://embed.figma.com/proto/DHJkaoADJzWfAHR4yW4XX8/MDIA-2106-%E2%80%93-Wonderland-Set-H?node-id=1187-2257&p=f&scaling=scale-down&content-scaling=fixed&page-id=1187%3A1437&embed-host=share"
              allowFullScreen
              title="Initial Wonderland Mockup"
            ></iframe>
          </div>

          <h3 className="blog-subheading">Usability Test Report</h3>
          <p>
            We conducted a usability study to assess user navigation,
            satisfaction, and overall effectiveness in stress relief.
          </p>
          <div className="embed-container">
            <iframe
              className="embed-iframe"
              src="https://www.canva.com/design/DAGD1CLyzPU/webzOLGqqJ1lHQ-QUV8-DQ/view?embed"
              allowFullScreen
              title="Wonderland Usability Report"
            ></iframe>
            <p className="embed-caption">
              <a
                href="https://www.canva.com/design/DAGD1CLyzPU/webzOLGqqJ1lHQ-QUV8-DQ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Report
              </a>
            </p>
          </div>

          <h3 className="blog-subheading">Changes After Usability Test</h3>
          <p>
            Feedback revealed users struggled with too much descriptive text and
            unclear navigation. We improved accessibility by simplifying content
            and enhancing the quiz interface.
          </p>

          <h3 className="blog-subheading">Final Design</h3>
          <div className="embed-container">
            <iframe
              className="embed-iframe"
              src="https://embed.figma.com/proto/DHJkaoADJzWfAHR4yW4XX8/MDIA-2106-%E2%80%93-Wonderland-Set-H?node-id=1468-2398&p=f&scaling=scale-down&content-scaling=fixed&page-id=7%3A24&starting-point-node-id=1468%3A2398&embed-host=share"
              allowFullScreen
              title="Final Wonderland Mockup"
            ></iframe>
          </div>

          <h3 className="blog-subheading">Development Process</h3>
          <p>
            Built with Next.js, Wonderland integrates OpenAI for chatbot
            features. The app includes AI-generated calming music and a
            quiz-based navigation system.
          </p>
          <div className="link-box">
            <a
              href="https://github.com/jellygz/wonderland"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              View the GitHub Repository
            </a>
          </div>

          <h3 className="blog-subheading">Demo of Our App</h3>
          <div className="video-wrapper">
            <div className="video-container">
              <video controls className="project-video">
                <source src={WonderlandVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h3 className="blog-subheading">Style Guide</h3>
          <p>
            We also coded a comprehensive style guide using HTML and CSS to maintain design consistency across the app.
          </p>
          <div className="link-box">
            <a
              href="https://styleguide-wonder.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              View Style Guide Website
            </a>
          </div>

          <h3 className="blog-subheading">Images Created</h3>
          <div className="wonderland-graphics-row">
            {graphicImages.map((image, index) => (
              <div 
                key={index} 
                className="wonderland-graphic-item" 
                onClick={() => openSlideshow(index)}
              >
                <img
                  src={image}
                  alt={`Wonderland UI design ${index + 1}`}
                  className="wonderland-graphic-image"
                />
              </div>
            ))}
          </div>
          
          <p className="graphics-description">
            Our graphics have been hand-drawn to maintain consistency and thoughtfulness in our visual and stylistic language across the app. Outlined in black with accents of our primary blue colour, each element is carefully crafted to again ensure a pleasant user journey. This approach not only enhances user experience but also aligns with our overarching goal of immersing users as if they are the main character of a fairytale book. Every detail is curated to evoke a sense of wonder and magic, inviting users to embark on an adventure to learn more about themselves within our app.
          </p>

          <div className="blog-navigation">
            <a 
              href="/projects/blogs/Menu-design" 
              className="nav-link prev"
              onClick={(e) => handleNavigation(e, "/projects/blogs/Menu-design")}
            >
              <span className="nav-arrow nav-prev-arrow">←</span>
              <span className="nav-text">Previous: SunnySide Menu Design</span>
            </a>

            <a 
              href="/projects/blogs/Case-Study" 
              className="nav-link next"
              onClick={(e) => handleNavigation(e, "/projects/blogs/Case-Study")}
            >
              <span className="nav-text">
                Next: Aether Case Study - Form Filling App
              </span>
              <span className="nav-arrow nav-next-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {showSlideshow && (
        <div className="slideshow-modal" onClick={closeSlideshow}>
          <div className="slideshow-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSlideshow}>×</button>
            
            <div className="slide">
              <img 
                src={graphicImages[currentSlide]} 
                alt={`Wonderland UI slide ${currentSlide + 1}`} 
                className="slide-image" 
              />
            </div>
            
            <p className="slide-caption">Slide {currentSlide + 1} of {graphicImages.length}</p>
            
            <div className="slide-indicators">
              {graphicImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
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

export default AliceApp;