import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState("light");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setthemename(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setthemename("dark");
    }
    
    document.body.className = savedTheme || themename;
  }, []);
  
  const toggeltheme = () => {
    const newTheme = themename === "light" ? "dark" : "light";
    setthemename(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };