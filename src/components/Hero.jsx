import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-bg-text">Frontend. Design. Branding.</h1>

      <div className="hero-content">
        <img src={heroImg} className="hero-image" alt="Sandra Mago" />
      </div>
    </section>
  );
}

export default Hero;
