import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectsPage from "./subpages/ProjectsPage";
import AboutPage from "./subpages/AboutPage";
import "./App.css";

export default function App() {
  const [cursorText, setCursorText] = useState("");

  const handleMouseMove = (e) => {
    const cursor = document.querySelector(".custom-cursor");
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app" onMouseMove={handleMouseMove}>
        {/* Custom cursor */}
        <div className={`custom-cursor ${cursorText ? "active" : ""}`}>
          {cursorText}
        </div>

        <Navbar />

        <Routes>
          {/* Forside */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects setCursorText={setCursorText} />
                <About />
              </>
            }
          />

          {/* Projekt side */}
          <Route
            path="/projekter"
            element={<ProjectsPage setCursorText={setCursorText} />}
          />
          {/* Om side */}
          <Route path="/om" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
