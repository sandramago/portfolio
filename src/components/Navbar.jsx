import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-outer">
        <div className={`header-inner ${scrolled ? "scrolled" : ""}`}>
          {/* Logo */}
          <Link to="/" className="logo-link">
            <h2 className="logo">Sandra Mago</h2>
          </Link>

          {/* Desktop */}
          <nav className="nav-desktop">
            <ul>
              <li>
                <Link to="/#projekter">Projekter</Link>
              </li>
              <li>
                <Link to="/#om">Om</Link>
              </li>
              <li>
                <Link to="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>

          {/* Mobil */}
          <button
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

export default Navbar;
