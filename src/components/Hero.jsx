import heroImg from "../assets/hero.png";
import grainTexture from "../assets/texture-overlay.jpg";

function Hero() {
  return (
    <section className="hero">
      {/* Overlay */}
      <div
        className="hero-overlay"
        style={{ backgroundImage: `url(${grainTexture})` }}
      />
      <h1 className="hero-bg-text">Frontend. Design. Branding.</h1>

      <div className="hero-content">
        <img src={heroImg} className="hero-image" alt="Sandra Mago" />
      </div>
    </section>
  );
}

export default Hero;
