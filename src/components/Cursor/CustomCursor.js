import React, { useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import { ThemeContext } from "../../Context/theme";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [{ themename }] = useContext(ThemeContext);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    let cursorElem = cursorRef.current;
    let followerElem = followerRef.current;
    
    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    // Setup GSAP animation
    const animation = gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        gsap.set(followerElem, {
          css: {
            left: posX - 12,
            top: posY - 12
          }
        });
        
        gsap.set(cursorElem, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    // Mouse move event handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects
    const addHoverEvents = () => {
      const links = document.querySelectorAll('a, button, .hover-target');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          cursorElem.classList.add("active");
          followerElem.classList.add("active");
        });
        
        link.addEventListener('mouseleave', () => {
          cursorElem.classList.remove("active");
          followerElem.classList.remove("active");
        });
      });
    };
    
    addHoverEvents();

    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      animation.kill();
    };
  }, []); 

  // Update cursor colors when theme changes

  useEffect(() => {
    if (cursorRef.current && followerRef.current) {
      if (themename === "light") {
        cursorRef.current.style.backgroundColor = "#044BD9"; 
        followerRef.current.style.backgroundColor = "rgba(240, 189, 33, 0.5)";
      } else {
        cursorRef.current.style.backgroundColor = "#F2B705"; 
        followerRef.current.style.backgroundColor = "rgba(255, 255, 255, 0.66)"; 
      }
    }
  }, [themename]);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;