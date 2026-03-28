import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}
