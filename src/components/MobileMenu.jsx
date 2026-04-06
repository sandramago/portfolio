import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";

export default function MobileMenu({ isOpen, onClose }) {
  // 🔒 Lock scroll når menu er åben
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      {/* Menu wrapper */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* Header */}
          <div>
            <div className="menu-header">
              <h6>Menu</h6>
              <button className="close-btn" onClick={onClose}>
                <img src={close} alt="Luk menu" className="close-icon" />
              </button>
            </div>

            {/* Links */}
            <div className="menu-links">
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

          {/* Contact (nu inde i menuen) */}
          <div className="contact-links">
            <a href="mailto:sandramago@outlook.dk">sandramago@outlook.dk</a>
            <a href="tel:+4522947700">+45 22 94 77 00</a>
          </div>
        </div>
      </div>
    </>
  );
}
