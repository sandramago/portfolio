import { useEffect } from "react";
import cvPDF from "../assets/Sandra-Mago-CV-2026.pdf";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

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
      <section id="kontakt" className="contact">
        <h2>Let's connect</h2>
        <div className="link-container">
          <a href="mailto:sandramago@outlook.dk">sandramago@outlook.dk</a>
          <a href="tel:+4522947700">+45 22 94 77 00</a>
          <a
            href="https://maps.app.goo.gl/JCGbyGEomtaecdFYA"
            target="_blank"
            rel="noopener noreferrer"
          >
            8000 Aarhus
          </a>
        </div>
        <a
          href={cvPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Download CV
        </a>
      </section>

      <section className="secondary-footer">
        <p>© {new Date().getFullYear()} Sandra Mago</p>
        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/sandramago/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="socials-icon" />
          </a>

          <a
            href="https://github.com/sandramago"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="socials-icon" />
          </a>
        </div>
      </section>
    </footer>
  );
}
