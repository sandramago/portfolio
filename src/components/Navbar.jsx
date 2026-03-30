import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-outer">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <h2 className="logo">Sandra Mago</h2>
        </Link>

        {/* Desktop */}
        <nav className="nav-desktop">
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
