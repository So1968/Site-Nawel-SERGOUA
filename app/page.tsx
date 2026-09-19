import Link from "next/link";
import { ArrowDown, Circle, Flower2, Menu, Mountain, Quote, Waves } from "lucide-react";

const univers = [
  {
    number: "01",
    title: "Paysages",
    text: "Étudier la peinture de paysage comme un espace de pensée, de retrait et de transformation.",
    icon: Mountain,
  },
  {
    number: "02",
    title: "Jardins",
    text: "La pierre, l’eau, le pont et la porte circulaire composent un monde que le regard traverse.",
    icon: Flower2,
  },
  {
    number: "03",
    title: "Poèmes",
    text: "Dans la peinture chinoise, l’image et le poème se répondent. Le texte devient une autre matière.",
    icon: Quote,
  },
];

const portfolioSeries = [
  {
    number: "01",
    title: "Le couloir du jour",
    category: "Paysage · série en préparation",
    text: "Une première entrée pour les œuvres qui travaillent le passage entre obscurité et lumière.",
  },
  {
    number: "02",
    title: "Le jardin du lettré",
    category: "Jardin · série en préparation",
    text: "Un espace pour les peintures où la pierre, l’eau, le pont et le vide organisent le regard.",
  },
  {
    number: "03",
    title: "Poèmes et inscriptions",
    category: "Texte · série en préparation",
    text: "Le lieu d’un dialogue entre les œuvres, les fragments écrits et les images à venir.",
  },
];

export default function Home() {
  return (
    <main className="artistSite">
      <header className="publicHeader">
        <Link href="#accueil" className="artistIdentity">
          <span className="artistSeal" aria-hidden="true">NS</span>
          <span>
            <strong>Nawel Sergoua</strong>
            <small>Artiste plasticienne</small>
          </span>
        </Link>

        <nav aria-label="Navigation principale">
          <Link href="#oeuvres">Œuvres</Link>
          <Link href="#demarche">Démarche</Link>
          <Link href="#jardin">Jardin</Link>
          <Link href="#poemes">Poèmes</Link>
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
              <Link href="#jardin">Jardin</Link>
              <Link href="#poemes">Poèmes</Link>
              <Link href="#contact">Contact</Link>
              <Link href="/bureau" prefetch={false}>Entrer dans le bureau</Link>
            </nav>
          </div>
        </details>
      </header>

      <section className="dawnHero" id="accueil">
        <div className="dawnSky" aria-hidden="true">
          <span className="sun" />
          <span className="mountain mountainBack" />
          <span className="mountain mountainFront" />
          <span className="waterReflection" />
        </div>

        <div className="heroPoem">
          <p className="eyebrow">Entre obscurité et lumière</p>
          <h1>Le couloir<br />du jour</h1>
          <p className="heroText">
            Le paysage devient un passage. Les couleurs apparaissent,
            flamboyantes et fugitives, entre le monde visible et le paysage intérieur.
          </p>
          <Link href="#oeuvres" className="discoverLink">
            Traverser le paysage <ArrowDown size={17} aria-hidden="true" />
          </Link>
        </div>

        <blockquote className="verticalPoem">
          <span>La lumière</span>
          <span>ouvre un chemin</span>
          <span>sur l’eau.</span>
        </blockquote>
      </section>

      <section className="worksIntro">
        <div className="sectionHeading">
          <p className="eyebrow">Œuvres et recherches</p>
          <h2>Un paysage ne se regarde pas seulement.<br />Il se parcourt.</h2>
        </div>
        <p>
          La peinture, le jardin et la poésie forment un même territoire de recherche.
          Chaque série est une porte vers une manière différente d’habiter le monde.
        </p>
      </section>

      <section className="universeGrid" id="demarche">
        {univers.map(({ number, title, text, icon: Icon }) => (
          <article className="universeCard" key={title}>
            <div className="cardTop">
              <span>{number}</span>
              <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div className="cardLandscape" aria-hidden="true">
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
            <p className="eyebrow">Portfolio</p>
            <h2 id="portfolio-title">Les œuvres prendront place ici.</h2>
          </div>
          <p>
            Une structure claire est prête pour accueillir les photographies, les titres,
            les dates, les techniques et les dimensions réelles des œuvres.
          </p>
        </div>

        <div className="portfolioGrid">
          {portfolioSeries.map(({ number, title, category, text }, index) => (
            <article className={`portfolioCard portfolioCard-${index + 1}`} key={title}>
              <div className="portfolioArtwork" aria-hidden="true">
                <span />
              </div>
              <div className="portfolioCardBody">
                <div className="portfolioCardTop">
                  <span>{number}</span>
                  <small>À compléter</small>
                </div>
                <h3>{title}</h3>
                <p className="portfolioCategory">{category}</p>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gardenSection" id="jardin">
        <div className="moonGate" aria-hidden="true">
          <div className="gardenScene">
            <span className="gardenSun" />
            <span className="gardenStone stoneOne" />
            <span className="gardenStone stoneTwo" />
            <span className="gardenBridge" />
          </div>
        </div>
        <div className="gardenText">
          <p className="eyebrow">Le jardin traditionnel chinois</p>
          <h2>Réunir deux univers totalement différents.</h2>
          <p>
            Le pont relie. La porte circulaire transforme le cadre. La pierre porte le temps.
            L’eau met le paysage en mouvement. Le jardin n’est pas un décor : il organise une pensée.
          </p>
          <div className="gardenSymbols">
            <span><Circle size={17} aria-hidden="true" /> Porte circulaire</span>
            <span><Waves size={17} aria-hidden="true" /> Eau et passage</span>
            <span><Flower2 size={17} aria-hidden="true" /> Orchidée et fleurs du lettré</span>
          </div>
        </div>
      </section>

      <section className="poemSection" id="poemes">
        <p className="poemCharacter" aria-hidden="true">山</p>
        <div>
          <p className="eyebrow">Peinture et poésie</p>
          <blockquote>
            « Je ne cherche pas à représenter un univers que je possède déjà,
            mais celui vers lequel je tends. »
          </blockquote>
          <p className="poemCaption">
            La création comme culture continue de soi, étude du caractère et responsabilité envers le monde.
          </p>
        </div>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Entrer en relation avec l’atelier.</h2>
        </div>
        <div>
          <p>
            Cet espace est prêt pour recevoir l’adresse professionnelle, les demandes d’exposition,
            les collaborations et les informations d’atelier dès qu’elles seront validées par l’artiste.
          </p>
          <div className="contactTopics" aria-label="Sujets de contact">
            <span>Expositions</span>
            <span>Collaborations</span>
            <span>Visites d’atelier</span>
          </div>
        </div>
      </section>

      <footer className="publicFooter">
        <div>
          <strong>Nawel Sergoua</strong>
          <span>Artiste plasticienne</span>
        </div>
        <p>Peinture · Paysage · Jardin · Poésie</p>
        <Link href="#contact" className="footerContact">Contact</Link>
        <Link href="/bureau" prefetch={false}>Bureau de l’artiste</Link>
      </footer>
    </main>
  );
}
