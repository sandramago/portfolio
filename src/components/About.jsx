export default function About() {
  return (
    <section id="om" className="about">
      <img
        src="https://via.placeholder.com/250"
        alt="Mig"
        className="about-img"
      />
      <div className="about-text">
        <h2>Om mig</h2>
        <p>
          Jeg arbejder med design og udvikling af hjemmesider med fokus på
          performance, æstetik og brugeroplevelse.
        </p>
        <a href="/about" className="btn">
          Læs mere
        </a>
      </div>
    </section>
  );
}
