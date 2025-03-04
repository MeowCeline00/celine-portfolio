import React, { useState, useContext } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import { ThemeContext } from "../../Context/theme";

import AliceWonderland from "../../Assets/Projects/alice.jpg";
import SunnysideMenu from "../../Assets/Projects/sunnyside.jpg";
import ForestVitae from "../../Assets/Projects/can_various_flavors.jpg";
import AetherApp from "../../Assets/Projects/aether.jpg";

import "./project.css";

const projectsData = [
  {
    id: 1,
    category: ["Graphic Design"],
    imgPath: ForestVitae,
    title: "ForestVitae - Can Design",
    blogLink: "/projects/blogs/can-design"
  },
  {
    id: 2,
    category: ["Graphic Design"],
    imgPath: SunnysideMenu,
    title: "Menu of SunnySide Restaurant",
    blogLink: "/projects/blogs/menu-design"
  },
  {
    id: 3,
    category: ["UI/UX Design", "Graphic Design", "Development"],
    imgPath: AliceWonderland,
    title: "Alice Wonderland - Stress Relief App",
    blogLink: "/projects/blogs/Alice-App"
  },
  {
    id: 4,
    category: ["Case Study", "Development"],
    imgPath: AetherApp,
    title: "Aether - Form Filling App",
    blogLink: "/projects/blogs/Case-Study"
  }
];

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [{ themename }] = useContext(ThemeContext);

  const filterProjects = (category) => {
    setActiveCategory(category);
    setFilteredProjects(
      category === "All"
        ? projectsData
        : projectsData.filter((p) => p.category.includes(category))
    );
  };


  return (
    <section className={`projects-container ${themename}`}>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">My Projects</h1>

          <div className="button-container">
            <ButtonGroup className="filter-buttons">
              {["All", "Case Study", "Development", "Graphic Design", "UI/UX Design"].map(
                (category) => (
                  <Button
                    key={category}
                    className={`filter-button ${activeCategory === category ? "active" : ""}`}
                    onClick={() => filterProjects(category)}
                  >
                    {category}
                  </Button>
                )
              )}
            </ButtonGroup>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project} 
              />
            ))}
          </div>
        </Container>
        <ScrollToTop />
      </Container>
    </section>
  );
}

export default Projects;