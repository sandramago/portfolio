import React from "react";

export default function AboutPage() {
  return (
    <section className="about-subpage">
      <div className="image-text-container">
        <img src="/src/assets/sandra-mago.webp" className="about-image shape" />

        <div className="about-subpage-text">
          <h1>Sandra Mago</h1>

          <p>
            Jeg er en 28-årig visuel designer og webudvikler bosat i Aarhus. De
            seneste tre år har jeg arbejdet med design og udvikling af
            hjemmesider og webshops i bureauverdenen. <br></br><br></br>
            jeg leder på nuværende tidspunkt efter fultidsmuligheder indenfor
            frontend og visuelt design, hvor jeg kan udfolde min kreativitet og
            fortsat præge folk positivt ved at skabe unikke og engagerende
            digitale oplevelser
          </p>
        </div>
      </div>
    </section>
  );
}
