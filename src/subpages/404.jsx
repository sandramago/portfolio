import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-content">
        <h1>Siden ikke fundet</h1>
        <p>Den side du leder efter findes ikke eller er blevet flyttet</p>

        <Link to="/" className="btn">
          Tilbage til forsiden
        </Link>
      </div>
    </section>
  );
}
