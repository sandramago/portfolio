import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
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
      <div className="app" onMouseMove={handleMouseMove}>
        {/* Custom cursor */}
        <div className={`custom-cursor ${cursorText ? "active" : ""}`}>
          {cursorText}
        </div>

        <Navbar />

        <Routes>
          {/* One page */}
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
          <Route path="/projekter" element={<ProjectsPage />} />
        </Routes>

        <Contact />
        <Footer />
      </div>
    </Router>
  );
}
