import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="#projekter" onClick={onClose}>
              Projekter
            </Link>
          </li>
          <li>
            <Link to="#om" onClick={onClose}>
              Om
            </Link>
          </li>
          <li>
            <Link to="#kontakt" onClick={onClose}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
