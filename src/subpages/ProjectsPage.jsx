import ETArkitekter from "../assets/et-arkitekter.webp";
import Resolva from "../assets/resolva.webp";
import NatureDevelopment from "../assets/naturedevelopment.webp";
import NovaStudio from "../assets/novastudio.webp";
import Ceraphina from "../assets/ceraphina.webp";
import Bambini from "../assets/bambini.webp";
import Clevercall from "../assets/clevercall.webp";
import AliceDarville from "../assets/alicedarville.webp";
import Kaika from "../assets/kaika.webp";


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
      title: "Nova Studio",
      image: NovaStudio,
      link: "https://novastudio.dk/",
    },
    {
      title: "Bambini",
      image: Bambini,
      link: "https://bambini.dk/",
    },
    {
      title: "Ceraphina",
      image: Ceraphina,
      link: "https://ceraphina.dk/",
    },
    {
      title: "Clevercall",
      image: Clevercall,
      link: "https://clevercall.ai/",
    },
    {
      title: "Alice Darville",
      image: AliceDarville,
      link: "https://alicedarville.dk/",
    },
    {
      title: "Kaika",
      image: Kaika,
      link: "https://kaika.dk/",
    },
  ];

  return (
    <section className="projects-subpage">
      <div className="heading-text-container">
        <h1>Projekter</h1>
        <p>
          Her finder du et udvalg af websites og webshops, jeg har arbejdet på.
          Med udgangspunkt i kundens behov og forretningsmål omsætter jeg idéer
          til konkrete, brugervenlige løsninger med fokus på både design og
          funktionalitet.
        </p>
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
