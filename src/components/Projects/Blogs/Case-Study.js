import React, { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../../Context/theme";
import { useNavigate } from "react-router-dom";
import AetherVideo from "../../../Assets/Projects/aether_app_mockup.mp4";
import AetherGraphic1 from "../../../Assets/Projects/Aether_research1.png";
import AetherGraphic2 from "../../../Assets/Projects/Aether_research2.png";
import AetherGraphic3 from "../../../Assets/Projects/Aether_research3.png";
import Primarypersona from "../../../Assets/Projects/Group 98.png";
import Secondarypersona from "../../../Assets/Projects/Group 99.png";
import Aetherwireframe from "../../../Assets/Projects/Aether_customer_journey.jpg";
import Aetherfeature1 from "../../../Assets/Projects/Aether_jargon.jpg";
import Aetherfeature2 from "../../../Assets/Projects/Aether_autofill.jpg";
import Aetherfeature3 from "../../../Assets/Projects/Aether_form_library.jpg";
import Aetherexamplecode from "../../../Assets/Projects/Aether_myprofile_code.png";
import Aetherform from "../../../Assets/Projects/aether_form_layout.png";
import Aetherbrochure1 from "../../../Assets/Projects/aether_brochure_1.jpg";
import Aetherbrochure2 from "../../../Assets/Projects/aether_brochure_2.jpg";
import Aetherbusinesscard1 from "../../../Assets/Projects/aether_business_card_1.jpg";
import Aetherbusinesscard2 from "../../../Assets/Projects/aether_business_card_2.jpg";
import Aethertote from "../../../Assets/Projects/Aether_tote.png";
import Aethersticker from "../../../Assets/Projects/Aether_sticker.png";

import "./blog.css";

function AetherApp() {
  const [{ themename }] = useContext(ThemeContext);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePersona, setActivePersona] = useState("primary"); 
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const graphicImages = [
    AetherGraphic1, 
    AetherGraphic2, 
    AetherGraphic3, 
    Primarypersona, 
    Secondarypersona, 
    Aetherwireframe,
    Aetherfeature1,
    Aetherfeature2,
    Aetherfeature3,
    Aetherexamplecode,
    Aetherform,
    Aetherbrochure1,
    Aetherbrochure2,
    Aethertote,
    Aethersticker
  ];
  
  const blogNavigation = {
    prev: {
      path: "/projects/blogs/Alice-App", 
      title: "Alice Wonderland - Stress Relief App"
    },
    next: {
      path: "/projects/blogs/Can-design", 
      title: "Can Design"
    }
  };

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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className={`blog-page aether-app ${themename}`}>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-text">
            <h1 className="blog-title">Aether</h1>
            <p className="blog-category">
              A CASE STUDY | FULL-STACK DEVELOPER | UI / UX DESIGNER | MARKETER
            </p>
            <p className="blog-date">Sep. 2024 - Dec 2024</p>
          </div>
        </div>
        
        <div className="aether-hero-container">
          <video
            ref={videoRef}
            src={AetherVideo}
            alt="Aether Hero Video"
            className="aether-hero-video"
            onClick={togglePlayPause}
            controls={false}
            playsInline
            muted
            autoPlay
            loop
          />
        </div>

        <div className="blog-content">
          <h3 className="blog-subheading">PROJECT OVERVIEW</h3>
          <p>
            Aether is an innovative AI-driven app designed to simplify the process of managing important documents, specifically for caretakers assisting elderly individuals. It streamlines document comprehension and completion with features like summarizing, autofilling, scanning, and multi-profile management. By reducing administrative burdens, Aether saves valuable time and allows caretakers to focus on providing quality care.
          </p>

          <h3 className="blog-subheading">Group Members</h3>
          <p>
            Aether is designed and developed by Kiana Amini, Zalida Khan, Boi San Ly, Jennica Sask, Jonathan Santiaguel, Madi Tabon, Trevor Tan, Parnell Tse, Congling Wang from BCIT D3 program.
          </p>

          <h3 className="blog-subheading">Problem & Solution</h3>
          <p>
            Managing paperwork is a major challenge for elderly individuals and the caregivers who assist them. Many seniors struggle with complex forms due to unclear language, small print, and digital barriers, while caregivers face the burden of repeatedly filling out documents, organizing client information, and navigating confusing legal or medical terminology. Recognizing these challenges, we conducted extensive research to develop Aether—an AI-driven solution designed to simplify paperwork, automate repetitive tasks, and clarify jargon. By streamlining these processes, Aether reduces stress and saves time, allowing caregivers to focus on providing quality care.
          </p>

          <h3 className="blog-subheading">Research & Insight</h3>
          <p>
            Initially, our target audience was seniors who needed assistance with filling out forms. To better understand their needs, we conducted a Google Form survey targeting individuals aged 45 and older, gathering their opinions on using a mobile app for form assistance. However, our research showed that many seniors typically ask their family members or caregivers to help them complete their forms.
          </p>
          <div className="aether-blog-image-container">
            <img
              src={AetherGraphic1}
              alt="Aether research image 1"
              className="blog-image-research"
              onClick={() => openSlideshow(0)}
            />
          </div>
          <p>
            From our findings, we realized that it's often family caregivers who assist seniors with filling out forms. To gain deeper insights, we conducted another round of research, this time focusing on caregivers' perspectives on using a form-filling app like Aether. Our research revealed that caregivers frequently help their elderly parents complete forms and face challenges such as understanding complex jargon, gathering all necessary information, and ensuring accuracy.
          </p>
          <div className="aether-blog-image-container">
            <img
              src={AetherGraphic2}
              alt="Aether research image 2"
              className="blog-image-research"
              onClick={() => openSlideshow(1)}
            />
          </div>
          <div className="aether-blog-image-container">
            <img
              src={AetherGraphic3}
              alt="Aether research image 3"
              className="blog-image-research"
              onClick={() => openSlideshow(2)}
            />
          </div>
          
          <h3 className="blog-subheading">User Persona</h3>
          <p>
            Based on our research, we developed two user personas to better understand the needs of caregivers and create a more user-centered form-filling experience with Aether. These personas help us tailor features like jargon simplification, autofilling, and multi-profile management to address real-life challenges caregivers face when assisting their elderly loved ones. By focusing on their specific pain points, we aim to make Aether a seamless and intuitive tool that truly supports their needs.
          </p>

          <div className="persona-button-container">
            <button 
              className={`persona-btn ${activePersona === 'primary' ? 'active' : ''}`}
              onClick={() => setActivePersona('primary')}
            >
              Primary Persona
            </button>
            <button 
              className={`persona-btn ${activePersona === 'secondary' ? 'active' : ''}`}
              onClick={() => setActivePersona('secondary')}
            >
              Secondary Persona
            </button>
          </div>

          <div className="aether-blog-persona">
            <div className="persona-display">
              {activePersona === 'primary' && (
                <img
                  src={Primarypersona}
                  alt="Aether research Primary Persona"
                  className="aether-persona-img"
                  onClick={() => openSlideshow(3)}
                />
              )}
              {activePersona === 'secondary' && (
                <img
                  src={Secondarypersona}
                  alt="Aether research Secondary Persona"
                  className="aether-persona-img"
                  onClick={() => openSlideshow(4)}
                />
              )}
            </div>
          </div>

          <h3 className="blog-subheading">Design Process</h3>
          <h5 className="aether-blog-subheading">Wireframe and user flows</h5>
          <p>
            Below is the flowchart we designed for our form-filling app. It illustrates the steps a caregiver will experience when using our app.
          </p>
          <div className="aether-blog-image-container">
            <img
              src={Aetherwireframe}
              alt="Aether wireframe"
              className="blog-image-wireframe"
              onClick={() => openSlideshow(5)}
            />
          </div>

          <h5 className="aether-blog-subheading">Lo-Fi</h5>
          <p>
            Based on the initial user flowchart, we created a draft version of our app. This early version is in black and white, showcasing only the basic functions and elements that will appear in the final app.
          </p>
          <div className="embed-container">
            <iframe 
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "800px",
                height: "450px"
              }}
              src="https://embed.figma.com/design/7uFLSzWU4gw74WYdgnm9cW/Aether-Mobile-App?node-id=49-10&embed-host=share"
              allowFullScreen
            />
          </div>

          <h5 className="aether-blog-subheading">Style guide</h5>
          <p>
            In the next stage, we developed a style guide to establish the foundational elements of our app, including fonts, color palette, font sizes, logo, and mission. Below are the presentation slides showcasing our design and vision.
          </p>
          <div className="embed-container">
            <iframe 
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "800px",
                height: "450px"
              }}
              src="https://embed.figma.com/proto/7uFLSzWU4gw74WYdgnm9cW/Aether-Mobile-App?node-id=6191-626&p=f&scaling=scale-down&content-scaling=fixed&page-id=6191%3A599&starting-point-node-id=6191%3A626&embed-host=share"
              allowFullScreen
            />
          </div>

          <h3 className="blog-subheading">Final Design | Hi-fi</h3>
          <p>
            Finally, after three months of refining our Figma mockups and developing our app based on the design, we built the app using the Expo system for iPhone, bringing our vision to life through coding.
          </p>
          <div className="embed-container">
            <iframe 
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "450px"
              }}
              src="https://embed.figma.com/proto/nzhtkPCGzn1CFTVlAsZSFQ/Aether-Mobile-App?node-id=2750-7065&p=f&scaling=scale-down&content-scaling=fixed&page-id=2750%3A6683&starting-point-node-id=2750%3A7345&embed-host=share"
              allowFullScreen
            />
          </div>

          <h3 className="blog-subheading">KEY FEATURES</h3>
          <div className="aether-features-container">
            <div className="aether-feature">
              <div className="aether-feature-content">
                <h4 className="aether-feature-title">AI-Powered Document Analyzer</h4>
                <p>
                  Quickly scans and interprets documents, providing insights and suggestions to ease the burden of comprehension.
                </p>
              </div>
              <div className="aether-feature-image-container">
                <img
                  src={Aetherfeature1}
                  alt="Aether feature: AI-Powered Document Analyzer"
                  className="aether-feature-image"
                  onClick={() => openSlideshow(6)}
                />
              </div>
            </div>
            
            <div className="aether-feature">
              <div className="aether-feature-content">
                <h4 className="aether-feature-title">Automatic Form Filling</h4>
                <p>
                  Streamlines paperwork by intelligently auto filling forms with the necessary information.
                </p>
              </div>
              <div className="aether-feature-image-container">
                <img
                  src={Aetherfeature2}
                  alt="Aether feature: Automatic Form Filling"
                  className="aether-feature-image"
                  onClick={() => openSlideshow(7)}
                />
              </div>
            </div>
            
            <div className="aether-feature">
              <div className="aether-feature-content">
                <h4 className="aether-feature-title">Form Library Database</h4>
                <p>
                  The Form Library provides a comprehensive collection of forms commonly required by senior citizens. Caregivers can easily search for and access the specific forms they need.
                </p>
              </div>
              <div className="aether-feature-image-container">
                <img
                  src={Aetherfeature3}
                  alt="Aether feature: Form Library Database"
                  className="aether-feature-image"
                  onClick={() => openSlideshow(8)}
                />
              </div>
            </div>
          </div>

          <h3 className="blog-subheading">EXAMPLE OF CODE</h3>
          <p>
            This part of the code shows the adding forms feature.
          </p>
          <div className="aether-code-container">
            <div className="aether-code-image">
              <img
                src={Aetherexamplecode}
                alt="Aether example code"
                className="aether-example-code-image"
                onClick={() => openSlideshow(9)}
              />
              <a 
                href="https://github.com/1medi/aether/blob/lab1/app/(tabs)/FormLibrary/FormLibrary.component.js"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
            <div className="aether-form-mockup">
              <img
                src={Aetherform}
                alt="Aether form"
                className="aether-form-image"
                onClick={() => openSlideshow(10)}
              />
            </div>
          </div>

          <h3 className="blog-subheading">Overview of the MyFilesScreen Component</h3>
          <p>
            The MyFilesScreen component is a React Native screen that lets users toggle between "Forms" and "Profiles" tabs, search within each tab, and view filtered results. It features dynamic UI elements like a searchable header, toggle buttons, suggestion banners, and reusable components (MyFormsCard and SavedProfileCard). The design adapts to light and dark themes using a useDarkMode context. State management (useState) and performance optimization (useMemo) ensure smooth interaction. The screen is styled dynamically and displays forms or profiles with branding and user-friendly navigation.
          </p>

          <h3 className="blog-subheading">Final Product</h3>
          <p>
            The code was developed using React and runs as an iPhone app on Expo Go. The full version of the code is available here: <a href="https://github.com/1medi/aether" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
          </p>

          <h3 className="blog-subheading">Blog website</h3>
          <p>
            We also developed a blog website to introduce our product and document our development journey. Built using HTML, CSS, JavaScript, and MongoDB, the website provides insights into our team and project. You can access the code here: <a href="https://github.com/1medi/aether_blog" target="_blank" rel="noopener noreferrer">GitHub Repository</a>, and visit the final blog website here: <a href="https://aether-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Aether Blog</a>.
          </p>

          <h3 className="blog-subheading">Marketing</h3>
          <p>
            To better promote our app, we also designed brochures and branded merchandise to distribute as giveaways.
          </p>
          
          <div className="aether-marketing-section">
            <h5 className="aether-marketing-title">Brochure</h5>
            <div className="aether-marketing-items">
              <img
                src={Aetherbrochure1}
                alt="Aether brochure 1"
                className="aether-marketing-image"
                onClick={() => openSlideshow(11)}
              />
              <img
                src={Aetherbrochure2}
                alt="Aether brochure 2"
                className="aether-marketing-image"
                onClick={() => openSlideshow(12)}
              />
            </div>

            <h5 className="aether-marketing-title">Business Card</h5>
            <div className="aether-marketing-items">
              <img
                src={Aetherbusinesscard1}
                alt="Aether business card 1"
                className="aether-marketing-image"
                onClick={() => openSlideshow(11)}
              />
              <img
                src={Aetherbusinesscard2}
                alt="Aether business card 2"
                className="aether-marketing-image"
                onClick={() => openSlideshow(12)}
              />
            </div>

            <h5 className="aether-marketing-title">Tote Bag</h5>
            <div className="aether-marketing-items single-item">
              <img
                src={Aethertote}
                alt="Aether tote bag"
                className="aether-marketing-image"
                onClick={() => openSlideshow(13)}
              />
            </div>

            <h5 className="aether-marketing-title">Sticker</h5>
            <div className="aether-marketing-items single-item">
              <img
                src={Aethersticker}
                alt="Aether sticker"
                className="aether-marketing-image"
                onClick={() => openSlideshow(14)}
              />
            </div>
          </div>

          <h3 className="blog-subheading">Key Takeaways</h3>
          <p>
            Early testing of the Aether App showed a reduction in form-filling time by up to 50%, with caregivers reporting decreased stress and increased efficiency in managing administrative tasks. Its intuitive design and user-friendly interface contributed to widespread adoption.
          </p>

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
          <div className="slideshow-container" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeSlideshow}>×</button>
            <div className="slide">
              <img src={graphicImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
            </div>
            <div className="slide-navigation">
              <button className="nav-button prev-button" onClick={prevSlide}>←</button>
              <button className="nav-button next-button" onClick={nextSlide}>→</button>
            </div>
            <div className="slide-indicators">
              {graphicImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AetherApp;