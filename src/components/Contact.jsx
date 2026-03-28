import cvPDF from "../assets/Sandra-Mago-CV-2026.pdf";

export default function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Let's connect</h2>
      <div className="link-container">
        <a href="mailto:sandramago@outlook.dk">sandramago@outlook.dk</a>
        <a href="tel:+4522947700">+45 22 94 77 00</a>
        <a href="">8000 Aarhus</a>
      </div>
      <a href={cvPDF} target="_blank" rel="noopener noreferrer" className="btn">
        Download CV
      </a>
    </section>
  );
}
