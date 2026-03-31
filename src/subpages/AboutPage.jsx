import React from "react";
import { Link } from "react-router-dom";

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

      <div
            className="profile-container"
            id="profil"
          >
            <div>
              <div>
                <h4>Profil</h4>
              </div>
              <div>
                <p>
                  Som person er jeg meget åben, innovativ og detaljeorienteret.
                  Jeg er ivrig efter at lære og er der noget jeg endnu ikke
                  evner, så er jeg meget lærenem. Jeg påtager mig et stort
                  ansvar for mine arbejdsopgaver og jeg går altid ind til dem
                  med nysgerrighed og en struktureret tilgang. Jeg fungerer godt
                  i grupper hvor jeg kan sparre med kollegaer og både suge til
                  mig og lære fra mig men jeg trives også med at arbejde
                  selvstændigt.
                </p>
                <p>
                  Når jeg ikke designer eller programmere, nyder jeg at bruge
                  tid på andre kreative outlets og jeg har som altid gang i
                  mindst et strikke-, hækle- eller syprojekt.
                </p>
              </div>
            </div>

            <div className="skills-container">
              <div>
                <h4>
                  Færdigheder
                </h4>
              </div>
              <div>
                <p>
                  Mine evner og kompentencer som multimediedesigner og
                  webudvikler er alsidige i mange aspekter. Dette omfatter både
                  min erfaring med adskillige Adobe programmer - dette
                  inkluderer primært PhotoShop, Illustrator, XD og Premiere Pro
                  - og min brede viden og erfaring med de nyeste frontend
                  teknologier.
                </p>

                <h5>
                  Som udvikler
                </h5>
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

                <h5>
                  Som designer
                </h5>
                <ul>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>XD</li>
                  <li>Figma</li>
                  <li>Premiere Pro</li>
                  <li>InDesign</li>
                </ul>
              </div>
            </div>

            <div className="experiences-container">
              <div>
                <h4>
                  Arbejdserfaring
                </h4>
              </div>
              <div>
                <div>
                  <h4>
                    Web & Graphic Specialist
                  </h4>
                  <Link to="https://aveo.dk/">
                    Aveo - web&marketing
                  </Link>
                  <h6>
                    2023 - 2026
                  </h6>
                  <p>
                    Ved min ansættelse hos Aveo blev jeg særligt god til at
                    omsætte kunders idéer og visioner til konkrete digitale
                    løsninger. Jeg udviklede stærke kompetencer i at arbejde med
                    WordPress,  og Elementor, herunder opsætning, tilpasning af
                    temaer, integration af plugins og optimering af
                    brugeroplevelsen. Gennem arbejdet med forskellige kunder
                    lærte jeg at levere effektive og brugervenlige løsninger,
                    der både opfylder forretningsbehov og skaber engagerende
                    oplevelser for slutbrugerne. Samtidig styrkede jeg min evne
                    til at samarbejde tæt med kunder og interne teams for at
                    sikre, at projekterne blev leveret til tiden og med høj
                    kvalitet.
                  </p>
                </div>

                <div>
                  <h4>
                    Praktik | Ejer, webudvikler & visuel designer
                  </h4>
                  <Link to="https://magomade.dk/">
                    MagoMade
                  </Link>
                  <h6>
                    2022 - 2025
                  </h6>
                  <p>
                    I uddannelsen til webudvikler var jeg i praktik i min egen
                    virksomhed, MagoMade. Her opbyggede og praktiserede jeg mine
                    kompentencer inden for CMS'er i en ecommerce kontekst samt
                    dertilhørende frontend teknologier herunder React i
                    kombination med Headless Shopify, TailwindCSS og PWA. At
                    være i praktik i egen virksomhed styrkede desuden også min
                    evne til at arbejde struktureret og administere mange
                    forskellige opgaver på én gang.
                  </p>
                </div>

                <div>
                  <h4>
                    Praktik | Webdesigner
                  </h4>
                  <Link
                    to="https://www.socialeretshjaelp.dk/"
                  >
                    Den Sociale Retshjælps Fond
                  </Link>
                  <h6>
                    Januar 2021 - Marts 2021
                  </h6>
                  <p>
                    Min praktik hos Den Sociale Retshjælps Fond gav mig
                    muligheden for at dygtiggøre mine færdigheder inden for
                    udvikling af hjemmesider i WordPress og generelt min omgang
                    i en CMS. Her havde jeg også ansvaret for at skabe en rød
                    tråd mellem organisationens forskellige platforme samt
                    optimering af deres visuel identitet.
                  </p>
                </div>
              </div>
        </div>
        </div>
    </section>
  );
}
