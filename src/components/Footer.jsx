import { useEffect } from "react";
import grainTexture from "../assets/texture-overlay.jpg";
import cvPDF from "../assets/Sandra-Mago-CV-2026.pdf";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    const section = document.querySelector(".footer");

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      section.style.setProperty("--x", `${x}%`);
      section.style.setProperty("--y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMove);

    return () => section.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <footer className="footer">
      {/* Overlay */}
      <div
        className="footer-overlay"
        style={{ backgroundImage: `url(${grainTexture})` }}
      />
      <section id="kontakt" className="contact">
        <h2>Let's connect</h2>
        <div className="link-container">
          <Link to="mailto:sandramago@outlook.dk">sandramago@outlook.dk</Link>
          <Link to="tel:+4522947700">+45 22 94 77 00</Link>
          <Link
            to="https://maps.app.goo.gl/JCGbyGEomtaecdFYA"
            target="_blank"
            rel="noopener noreferrer"
          >
            8000 Aarhus
          </Link>
        </div>
        <Link
          to={cvPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Download CV
        </Link>
      </section>

      <section className="secondary-footer">
        <p>© {new Date().getFullYear()} Sandra Mago</p>
        <div className="icons-container">
          <Link
            to="https://www.linkedin.com/in/sandramago/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="socials-icon" />
          </Link>

          <Link
            to="https://github.com/sandramago"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="socials-icon" />
          </Link>
        </div>
      </section>
    </footer>
  );
}
