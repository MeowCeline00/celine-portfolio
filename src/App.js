import React, { useState, useEffect, useContext } from "react";
import CustomCursor from "./components/Cursor/CustomCursor";
import Preloader from "./components/preloader/Preloader";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import CaseStudy from "./components/Projects/Blogs/Case-Study";
import CanDesign from "./components/Projects/Blogs/Can-design";
import AliceWonderland from "./components/Projects/Blogs/Alice-App";
import MenuDesign from "./components/Projects/Blogs/Menu-design";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [{ themename }] = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${themename} app`}>
      <CustomCursor />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />

            <Route path="/projects/blogs/Case-Study" element={<CaseStudy />} />
            <Route path="/projects/blogs/Can-design" element={<CanDesign />} />
            <Route path="/projects/blogs/Alice-App" element={<AliceWonderland />} />
            <Route path="/projects/blogs/Menu-design" element={<MenuDesign />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;