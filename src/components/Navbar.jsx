import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-outer">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <h2 className="logo">Sandra Mago</h2>
        </Link>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#projekter">Projekter</a>
            </li>
            <li>
              <a href="#om">Om</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger-menu til mobil */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;
