import React, { useState } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import ForestVitae from "../../Assets/Projects/can_various_flavors.jpg";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

const projectsData = [
  {
    id: 1,
    category: "Graphic Design",
    imgPath: ForestVitae,
    title: "Can Design",
    blogLink: "/projects/blogs/can-design"
  },
  {
    id: 2,
    category: "Development",
    imgPath: Portfolio,
    title: "Portfolio Website",
    blogLink: "/projects/blogs/portfolio"
  },
  {
    id: 3,
    category: "Development",
    imgPath: PrivateChat,
    title: "Private Chat",
    blogLink: "/projects/blogs/private-chat"
  },
  {
    id: 4,
    category: "Development",
    imgPath: ExpenseTracker,
    title: "Expense Tracker",
    blogLink: "/projects/blogs/expense-tracker"
  }
];

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterProjects = (category) => {
    setActiveCategory(category);
    setFilteredProjects(
      category === "All" ? projectsData : projectsData.filter((p) => p.category === category)
    );
  };

  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">My Recent <strong className="Fluorescent-Blue">Works</strong></h1>
          <p>Here are some projects I've worked on recently.</p>

          <ButtonGroup className="filter-buttons">
            {["All", "Development", "Graphic Design"].map((category) => (
              <Button
                key={category}
                className={`filter-button ${activeCategory === category ? "active" : ""}`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </Container>
        <ScrollToTop />
      </Container>
    </section>
  );
}

export default Projects;
