import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/theme";
import { Link } from "react-router-dom";
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

  return (
    <div className={`blog-page ${themename}`}>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-text">
            <h1 className="alice-blog-title">
              Wonderland <br /> - A Stress Relief App
            </h1>
            <p className="blog-category">
              UI/UX Designer | GRAPHIC DESIGNER | FULL STACK WEB DEVELOPER
            </p>
            <div className="alice-button-website">
              <a
                href="https://wonderland-alice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="alice-website-link-button"
              >
                Try the App
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
            Wonderland is an innovative app crafted to explore users’ mental
            well-being interactively. Inspired by "Alice in Wonderland," it
            evaluates burnout levels through a playful quiz. By incorporating
            elements from the classic story, we guide users on a self-reflective
            journey into their mental health.
          </p>

          <h3 className="blog-subheading">Initial Design</h3>
          <p>
            Our initial design was created using Figma, with hand-drawn
            graphics using Procreate and Adobe Illustrator.
          </p>
          <div className="figma-embed-container">
            <iframe
              className="figma-iframe"
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
          <div className="usability-test-ppt">
            <iframe
              width="100%"
              height="500"
              src="https://www.canva.com/design/DAGD1CLyzPU/webzOLGqqJ1lHQ-QUV8-DQ/view?embed"
              allowFullScreen
              title="Wonderland Usability Report"
            ></iframe>
            <a
              href="https://www.canva.com/design/DAGD1CLyzPU/webzOLGqqJ1lHQ-QUV8-DQ/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Report
            </a>
          </div>

          <h3 className="blog-subheading">Changes After Usability Test</h3>
          <p>
            Feedback revealed users struggled with too much descriptive text and
            unclear navigation. We improved accessibility by simplifying content
            and enhancing the quiz interface.
          </p>

          <h3 className="blog-subheading">Final Design</h3>
          <div className="figma-embed-container">
            <iframe
              className="figma-iframe"
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
          <p>
            <a
              href="https://github.com/jellygz/wonderland"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the GitHub Repository
            </a>
          </p>

          <h3 className="blog-subheading">Demo of Our App</h3>
          <div className="wonderland-video-mockup">
            <video controls className="wonderland-video">
              <source src={WonderlandVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h3 className="blog-subheading">Images Created</h3>
          <div className="wonderland-graphics-section">
            {[AliceGraphic1, AliceGraphic2, AliceGraphic3, AliceGraphic4, AliceGraphic5, AliceGraphic6].map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Wonderland UI design ${index + 1}`}
                  className="wonderland-designed-image"
                />
              )
            )}
          </div>

          <div className="blog-navigation">
            <Link to="/projects/blogs/Menu-design" className="nav-link prev">
              <span className="nav-arrow nav-prev-arrow">←</span>
              <span className="nav-text">Previous: SunnySide Menu Design</span>
            </Link>

            <Link to="/projects/blogs/Case-Study" className="nav-link next">
              <span className="nav-text">
                Next: Aether Case Study - Form Filling App
              </span>
              <span className="nav-arrow nav-next-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AliceApp;
