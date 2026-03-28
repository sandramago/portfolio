import ETArkitekter from "../assets/et-arkitekter.webp";
import Resolva from "../assets/resolva.webp";
import NatureDevelopment from "../assets/naturedevelopment.webp";
import Ceraphina from "../assets/ceraphina.webp";
import { Link } from "react-router-dom";

export default function Projects({ setCursorText }) {
  const projects = [
    {
      title: "ET Arkitekter",
      image: ETArkitekter,
      link: "https://et-arkitekter.dk/",
    },
    {
      title: "Resolva",
      image: Resolva,
      link: "https://resolvalaw.com/",
    },
    {
      title: "Nature Development",
      image: NatureDevelopment,
      link: "https://naturedevelopment.com/",
    },
  ];

  return (
    <section id="projekter" className="projects">
      <div className="text-btn-container">
        <h4>Projekter</h4>
        <div className="projects-button">
          <Link to="/projekter" className="btn">
            Se alle projekter
          </Link>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            onMouseEnter={() => setCursorText("Udforsk")}
            onMouseLeave={() => setCursorText("")}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
