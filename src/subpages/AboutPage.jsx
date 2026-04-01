import React from "react";
import { Link } from "react-router-dom";
import cvPDF from "../assets/Sandra-Mago-CV-2026.pdf";

export default function AboutPage() {
  return (
    <section className="about-subpage">
      <div className="image-text-container">
        <img src="/src/assets/sandra-mago.webp" className="about-image shape" />
        <div>
          <div className="about-subpage-text">
            <h1>Sandra Mago</h1>

            <p>
              Jeg er en 28-årig visuel designer og webudvikler bosat i Aarhus.
              De seneste tre år har jeg arbejdet med design og udvikling af
              hjemmesider og webshops i bureauverdenen. <br></br>
              <br></br>
              Jeg leder på nuværende tidspunkt efter fultidsmuligheder indenfor
              frontend og visuelt design, hvor jeg kan udfolde min kreativitet
              og fortsat præge folk positivt ved at skabe unikke og engagerende
              digitale oplevelser
            </p>
          </div>
          <Link
            to={cvPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download CV
          </Link>
        </div>
      </div>

      <div>
        <div className="profile">
          <div className="profile-heading-container">
            <h6>01</h6>
            <h2>Profil</h2>
          </div>

          <p>
            Som person er jeg meget åben, innovativ og detaljeorienteret. Jeg er
            ivrig efter at lære og er der noget jeg endnu ikke evner, så er jeg
            meget lærenem. Jeg påtager mig et stort ansvar for mine
            arbejdsopgaver og jeg går altid ind til dem med nysgerrighed og en
            struktureret tilgang. Jeg fungerer godt i grupper hvor jeg kan
            sparre med kollegaer og både suge til mig og lære fra mig men jeg
            trives også med at arbejde selvstændigt. <br></br>
            <br></br>
            Når jeg ikke designer eller programmere, nyder jeg at bruge tid på
            andre kreative outlets og jeg har som altid gang i mindst et
            strikke-, hækle- eller syprojekt.
          </p>
        </div>

        <div className="profile">
          <div className="profile-heading-container">
            <h6>02</h6>
            <h2>Færdigheder</h2>
          </div>
          <div className="skills">
            <p>
              Mine evner og kompentencer som multimediedesigner og webudvikler
              er alsidige i mange aspekter. Dette omfatter både min erfaring med
              adskillige Adobe programmer - dette inkluderer primært PhotoShop,
              Illustrator, XD og Premiere Pro - og min brede viden og erfaring
              med de nyeste frontend teknologier.
            </p>
            <div className="developer-skills">
              <h5>Som udvikler</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>Remix</li>
                <li>Ionic</li>
                <li>Headless Shopify</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
                <li>TailwindCSS</li>
                <li>PWA</li>
                <li>Git</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="designer-skills">
              <h5>Som designer</h5>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>XD</li>
                <li>Figma</li>
                <li>Premiere Pro</li>
                <li>InDesign</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="profile-heading-container">
            <h6>03</h6>
            <h2>Erhvervserfaring</h2>
          </div>
          <div className="experiences">
            <div className="experience-container">
              <Link to="https://aveo.dk/" className="experience-link">
                Aveo - web&marketing
              </Link>
              <div className="heading-container">
                <h5>Web & Graphic Specialist</h5>
                <h6>2023 - 2026</h6>
              </div>
              <p>
                Ved min ansættelse hos Aveo blev jeg særligt god til at omsætte
                kunders idéer og visioner til konkrete digitale løsninger. Jeg
                udviklede stærke kompetencer i at arbejde med WordPress, og
                Elementor, herunder opsætning, tilpasning af temaer, integration
                af plugins og optimering af brugeroplevelsen. Gennem arbejdet
                med forskellige kunder lærte jeg at levere effektive og
                brugervenlige løsninger, der både opfylder forretningsbehov og
                skaber engagerende oplevelser for slutbrugerne. Samtidig
                styrkede jeg min evne til at samarbejde tæt med kunder og
                interne teams for at sikre, at projekterne blev leveret til
                tiden og med høj kvalitet.
              </p>
            </div>

            <div className="experience-container">
              <Link to="https://magomade.dk/" className="experience-link">
                MagoMade
              </Link>
              <div className="heading-container">
                <h5>Praktik | Ejer, webudvikler & visuel designer</h5>
                <h6>2022 - 2025</h6>
              </div>
              <p>
                I uddannelsen til webudvikler var jeg i praktik i min egen
                virksomhed, MagoMade. Her opbyggede og praktiserede jeg mine
                kompentencer inden for CMS'er i en ecommerce kontekst samt
                dertilhørende frontend teknologier herunder React i kombination
                med Headless Shopify, TailwindCSS og PWA. At være i praktik i
                egen virksomhed styrkede desuden også min evne til at arbejde
                struktureret og administere mange forskellige opgaver på én
                gang.
              </p>
            </div>

            <div className="experience-container">
              <Link
                to="https://www.socialeretshjaelp.dk/"
                className="experience-link"
              >
                Den Sociale Retshjælps Fond
              </Link>
              <div className="heading-container">
                <h5>Praktik | Webdesigner</h5>
                <h6>2021</h6>
              </div>
              <p>
                Min praktik hos Den Sociale Retshjælps Fond gav mig muligheden
                for at dygtiggøre mine færdigheder inden for udvikling af
                hjemmesider i WordPress og generelt min omgang i en CMS. Her
                havde jeg også ansvaret for at skabe en rød tråd mellem
                organisationens forskellige platforme samt optimering af deres
                visuel identitet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
