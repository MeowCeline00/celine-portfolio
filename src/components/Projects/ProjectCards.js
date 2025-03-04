import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

function ProjectCard({ imgPath, title, blogLink }) {
  return (
    <div className="project-card">
      <Link to={blogLink} className="card-link">
        <div className="project-card-inner">
          <div className="image-container">
            <img src={imgPath} alt={title} className="project-image" />
          </div>
          <div className="overlay">
            <h2 className="project-title">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
