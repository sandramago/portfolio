import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="om" className="about">
      <div className="about-text">
        <h2>Om</h2>
        <p>
          Mit navn er Sandra Mago, jeg er 28 år gammel og er bosat i Aarhus. Med
          en uddannelse som multimediedesigner og en professionsbachelor i
          webudvikling har jeg bred, alsidig viden indenfor frontend udvikling,
          visuelt design og digital kommunikation.
          <br></br>
          <br></br>
          Jeg er en passioneret frontend udvikler og visuel designer, der
          brænder for at skabe engagerende og konsistente brugeroplevelser. Det
          er særligt vigtigt for mig at holde mig opdateret på de nyeste design
          trends og teknologier indenfor webudvikling. Jeg er faglig nysgerrig
          og er altid på udkig efter muligheder for at forfine mine færdigheder
          og erhverve mig nye.
        </p>
      </div>
      <Link to="/om" className="btn">
        Lær mig bedre at kende
      </Link>
    </section>
  );
}
