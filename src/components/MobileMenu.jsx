import React from "react";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <ul>
          <li>
            <a href="#projekter" onClick={onClose}>
              Projekter
            </a>
          </li>
          <li>
            <a href="#om" onClick={onClose}>
              Om
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={onClose}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
