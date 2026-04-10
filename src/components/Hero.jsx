import { useState } from "react";
import heroImg from "../assets/hero.png";
import grainTexture from "../assets/texture-overlay.jpg";

function Hero() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }).map((_, i) => {
      const colors = ["#e4f1ff", "#a8c6fa", "#edf6ff66"];

      return {
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: `${10 + Math.random() * 10}s`,
          animationDelay: `-${Math.random() * 20}s`,
          transformOrigin: `${Math.random() * 50 - 25}vw ${
            Math.random() * 50 - 25
          }vh`,
        },
      };
    }),
  );

  return (
    <section className="hero">
      <div className="background">
        {particles.map((p) => (
          <span key={p.id} style={p.style}></span>
        ))}
      </div>

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