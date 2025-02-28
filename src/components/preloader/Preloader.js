import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./preloader.css";
import duckImage from "../../Assets/preloader.png";

function Pre({ load }) {
  const [show, setShow] = useState(load);

  useEffect(() => {
    if (!load) {
      setTimeout(() => {
        setShow(false);
      }, 1000); 
    }
  }, [load]);

  if (!show) return null; 

  return (
    <div id="preloader">
      <div className="preloader-text">
        <h1>Welcome!</h1>
      </div>
      <div className="preloader-container">
        <img src={duckImage} alt="duck" className="bouncing-duck" />
        <img src={duckImage} alt="duck" className="bouncing-duck delay-1" />
        <img src={duckImage} alt="duck" className="bouncing-duck delay-2" />
      </div>
    </div>
  );
}

export default Pre;
