import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProjectCards({ imgPath, title, blogLink }) {
  return (
    <Link to={blogLink} className="project-card-link">
      <Card className="project-card-view">
        <div className="image-container">
          <Card.Img variant="top" src={imgPath} alt={title} className="project-image"/>
          <div className="overlay">
            <span className="project-title">{title}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ProjectCards;
