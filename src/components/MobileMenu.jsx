import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          <button className="close-btn" onClick={onClose}>
            <img src={close} className="close-icon"></img>
          </button>

          <ul>
            <li>
              <Link to="/#projekter" onClick={onClose}>
                Projekter
              </Link>
            </li>
            <li>
              <Link to="/#om" onClick={onClose}>
                Om
              </Link>
            </li>
            <li>
              <Link to="/#kontakt" onClick={onClose}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
