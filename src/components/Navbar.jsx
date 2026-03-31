import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // true når scroll > 50px
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header className="header-outer">
      <div className={`header-inner ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo-link">
          <h2 className="logo">Sandra Mago</h2>
        </Link>

        {/* Desktop */}
        <nav className="nav-desktop">
          <ul>
            <li>
              <a href="/#projekter">Projekter</a>
            </li>
            <li>
              <a href="/#om">Om</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>

        {/* Tablet & mobil */}
        <button className="menu-icon" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}

export default Navbar;
