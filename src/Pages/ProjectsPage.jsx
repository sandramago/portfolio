import ETArkitekter from "../assets/et-arkitekter.webp";
import Resolva from "../assets/resolva.webp";
import NatureDevelopment from "../assets/naturedevelopment.webp";
import Ceraphina from "../assets/ceraphina.webp";
import Bambini from "../assets/bambini.webp";


export default function ProjectsPage ({ setCursorText }) {
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
    {
      title: "Ceraphina",
      image: Ceraphina,
      link: "https://ceraphina.dk/",
    },
    {
      title: "Bambini",
      image: Bambini,
      link: "https://bambini.dk/",
    },
  ];

  return (
    <section className="projects">
        <h4>Projekter</h4>

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
