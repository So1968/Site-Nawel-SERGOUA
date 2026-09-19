import Link from "next/link";
import { Archive, ArrowDown, Images, Landmark, Menu } from "lucide-react";
import { nawelAxes, nawelProfile, nawelThemes } from "@/lib/nawel-content";

const univers = [
  { ...nawelThemes[0], icon: Archive },
  { ...nawelThemes[1], icon: Images },
  { ...nawelThemes[2], icon: Landmark },
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#contenu">
        Aller au contenu principal
      </a>

      <main className="artistSite" id="contenu">
        <header className="publicHeader">
          <Link href="#accueil" className="artistIdentity">
            <span className="artistSeal" aria-hidden="true">NS</span>
            <span>
              <strong>{nawelProfile.name}</strong>
              <small>{nawelProfile.role}</small>
            </span>
          </Link>

          <nav aria-label="Navigation principale">
            <Link href="#oeuvres">Œuvres</Link>
            <Link href="#demarche">Démarche</Link>
            <Link href="#parcours">Parcours</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link href="/bureau" prefetch={false} className="bureauLink">
            Entrer dans le bureau
          </Link>

          <details className="mobileMenu">
            <summary aria-label="Ouvrir le menu">
              <Menu size={19} aria-hidden="true" />
              <span className="srOnly">Menu</span>
            </summary>
            <div className="mobileMenuPanel">
              <nav aria-label="Navigation mobile">
                <Link href="#oeuvres">Œuvres</Link>
                <Link href="#demarche">Démarche</Link>
                <Link href="#parcours">Parcours</Link>
                <Link href="#contact">Contact</Link>
                <Link href="/bureau" prefetch={false}>Entrer dans le bureau</Link>
              </nav>
            </div>
          </details>
        </header>

        <section className="artistHero" id="accueil">
          <div className="artistHeroArt" aria-hidden="true">
            <span className="materialPlane materialPlaneBack" />
            <span className="materialPlane materialPlaneFront" />
            <span className="materialLight" />
            <span className="materialThread" />
          </div>

          <div className="heroCopy">
            <p className="eyebrow">{nawelProfile.role} · {nawelProfile.location}</p>
            <h1>Mémoire,<br />matière,<br />transmission</h1>
            <p className="heroText">
              Le site de Nawel Sergoua rassemble ses œuvres, ses recherches et ses projets
              autour de la matière, des origines, du vivant et de la transformation.
            </p>
            <Link href="#oeuvres" className="discoverLink">
              Découvrir les œuvres <ArrowDown size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="verticalWords" aria-label="Axes artistiques">
            <span>Mémoire</span>
            <span>Matière</span>
            <span>Transmission</span>
          </div>
        </section>

        <section className="worksIntro">
          <div className="sectionHeading">
            <p className="eyebrow">Site vitrine et catalogue</p>
            <h2>Donner une présence aux traces, aux matières et aux histoires.</h2>
          </div>
          <p>
            Le site présentera le parcours de Nawel, ses œuvres disponibles, ses projets
            d’exposition et les expériences de création qui relient l’art, l’écologie et la transmission.
          </p>
        </section>

        <section className="universeGrid" id="demarche">
          {univers.map(({ number, title, text, icon: Icon }) => (
            <article className="universeCard" key={title}>
              <div className="cardTop">
                <span>{number}</span>
                <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <div className="cardTexture" aria-hidden="true">
                <span />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="portfolioSection" id="oeuvres" aria-labelledby="portfolio-title">
          <div className="portfolioHeading">
            <div>
              <p className="eyebrow">Œuvres et recherches</p>
              <h2 id="portfolio-title">Un catalogue pour regarder, comprendre et acquérir.</h2>
            </div>
            <p>
              Les œuvres seront présentées avec leurs photographies, leurs informations techniques,
              leur histoire et leur disponibilité à la vente.
            </p>
          </div>

          <div className="portfolioGrid">
            {nawelAxes.map(({ number, title, category, text }, index) => (
              <article className={`portfolioCard portfolioCard-${index + 1}`} key={title}>
                <div className="portfolioArtwork" aria-hidden="true">
                  <span />
                </div>
                <div className="portfolioCardBody">
                  <div className="portfolioCardTop">
                    <span>{number}</span>
                    <small>Axe à documenter</small>
                  </div>
                  <h3>{title}</h3>
                  <p className="portfolioCategory">{category}</p>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="practiceSection" id="parcours">
          <div className="materialFigure" aria-hidden="true">
            <div className="materialScene">
              <span className="materialGlow" />
              <span className="materialBlock blockOne" />
              <span className="materialBlock blockTwo" />
              <span className="materialLine" />
            </div>
          </div>
          <div className="practiceText">
            <p className="eyebrow">Parcours et projets</p>
            <h2>Une pratique attentive à la mémoire, au vivant et aux autres.</h2>
            <p>
              Depuis Goa, le site permettra de suivre le parcours de Nawel, ses participations
              à des expositions et à la Biennale, ainsi que ses expériences d’ateliers et de création partagée.
            </p>
            <div className="practiceSymbols">
              <span><Archive size={17} aria-hidden="true" /> Origines et transmission</span>
              <span><Images size={17} aria-hidden="true" /> Matières et œuvres</span>
              <span><Landmark size={17} aria-hidden="true" /> Expositions et Biennale</span>
            </div>
          </div>
        </section>

        <section className="memorySection" id="contact" aria-labelledby="contact-title">
          <p className="memoryLetter" aria-hidden="true">N</p>
          <div>
            <p className="eyebrow">Contact et œuvres à vendre</p>
            <h2 className="memoryStatement" id="contact-title">
              Un espace pour rencontrer le travail de Nawel, demander une œuvre,
              proposer une exposition ou construire une collaboration.
            </h2>
            <p className="memoryCaption">
              Les coordonnées professionnelles, les liens sociaux et les modalités de vente
              seront ajoutés après validation de l’artiste.
            </p>
          </div>
        </section>

        <footer className="publicFooter">
          <div>
            <strong>{nawelProfile.name}</strong>
            <span>{nawelProfile.role}</span>
          </div>
          <p>Sculpture · Relief · Collage · Matière</p>
          <Link href="#contact" className="footerContact">Contact</Link>
          <Link href="/bureau" prefetch={false}>Bureau de l’artiste</Link>
        </footer>
      </main>
    </>
  );
}
