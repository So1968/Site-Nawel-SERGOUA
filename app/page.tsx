import Link from "next/link";
import { ArrowDown, Circle, Flower2, Mountain, Quote, Waves } from "lucide-react";

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
        </nav>

        <Link href="/bureau" className="bureauLink">Entrer dans le bureau</Link>
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
            Traverser le paysage <ArrowDown size={17} />
          </Link>
        </div>

        <blockquote className="verticalPoem">
          <span>La lumière</span>
          <span>ouvre un chemin</span>
          <span>sur l’eau.</span>
        </blockquote>
      </section>

      <section className="worksIntro" id="oeuvres">
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
              <Icon size={24} strokeWidth={1.4} />
            </div>
            <div className="cardLandscape" aria-hidden="true">
              <span />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
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
            <span><Circle size={17} /> Porte circulaire</span>
            <span><Waves size={17} /> Eau et passage</span>
            <span><Flower2 size={17} /> Orchidée et fleurs du lettré</span>
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

      <footer className="publicFooter">
        <div>
          <strong>Nawel Sergoua</strong>
          <span>Artiste plasticienne</span>
        </div>
        <p>Peinture · Paysage · Jardin · Poésie</p>
        <Link href="/bureau">Bureau de l’artiste</Link>
      </footer>
    </main>
  );
}
