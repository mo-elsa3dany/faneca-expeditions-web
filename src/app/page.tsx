import Link from "next/link";

export const metadata = {
  title: "Faneca Expeditions — Boutique Liveaboard Diving",
  description:
    "Boutique liveaboard agency curating tailored itineraries on trusted boats across the Red Sea, Indonesia, the Caribbean and beyond.",
};

const signatureDestinations = [
  {
    name: "Red Sea — Egypt",
    tagline: "Sharks, WWII wrecks & coral walls.",
    from: "From 1,250 USD",
    image: "/images/destinations/redsea.jpg.JPG",
    region: "Egypt · Red Sea",
    season: "Best: Mar–Nov",
  },
  {
    name: "Raja Ampat — Indonesia",
    tagline: "The richest reefs on Earth.",
    from: "From 2,079 USD",
    image: "/images/destinations/raja-ampat.jpg",
    region: "Indonesia · Raja Ampat",
    season: "Best: Oct–Apr",
  },
  {
    name: "Bahamas — Caribbean",
    tagline: "Tigers, reef sharks & turquoise.",
    from: "From 2,900 USD",
    image: "/images/destinations/bahamas.jpg",
    region: "Bahamas · Caribbean",
    season: "Best: Nov–May",
  },
  {
    name: "Maldives — Central Atolls",
    tagline: "Mantas & soft drifts.",
    from: "From 3,240 USD",
    image: "/images/destinations/maldives.jpg",
    region: "Maldives · Indian Ocean",
    season: "Best: Dec–Apr",
  },
  {
    name: "Thailand — Andaman Sea",
    tagline: "Soft coral seamounts & jungle isles.",
    from: "From 2,720 USD",
    image: "/images/destinations/thailand.jpg",
    region: "Thailand · Andaman Sea",
    season: "Best: Nov–Apr",
  },
  {
    name: "Galápagos — Ecuador",
    tagline: "Hammerheads & wild currents.",
    from: "From 7,500 USD",
    image: "/images/destinations/galapagos.JPG",
    region: "Ecuador · Galápagos",
    season: "Best: Jun–Nov",
  },
];

export default function HomePage() {
  return (
    <main className="main-shell home">
      {/* Header / hero */}
      <header className="home-header">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">FANECA EXPEDITIONS</p>
            <h1 className="home-title">Your adventure starts here.</h1>
            <p className="home-lead">
              Boutique liveaboard planning for divers who care about season, route and boat
              quality as much as the price tag. We help you move from “20 open tabs” to a
              small, realistic shortlist that actually fits how you like to dive.
            </p>

            <div className="home-cta-row">
              <Link href="/quiz" className="home-cta-primary">
                Start the trip matchmaker
              </Link>
              <Link href="/calendar" className="home-cta-secondary">
                Browse departures calendar
              </Link>
              <Link href="/concierge" className="home-cta-tertiary">
                Talk to the concierge
              </Link>
            </div>

            <div className="home-contact-row">
              <a href="https://wa.me" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <span>·</span>
              <a href="mailto:info@fanecaexpeditions.com">
                info@fanecaexpeditions.com
              </a>
              <span>·</span>
              <a
                href="https://instagram.com/fanecaexpeditions"
                target="_blank"
                rel="noreferrer"
              >
                @fanecaexpeditions
              </a>
            </div>
          </div>

          {/* Hero photo panel */}
          <div className="home-hero-photo" aria-hidden="true" />
        </div>
      </header>

      {/* Signature destinations */}
      <section>
        <div className="home-section-header">
          <h2 className="home-section-title">Signature destinations</h2>
          <p className="home-section-sub">
            A starting point — we also work quietly with other operators and routes.
          </p>
        </div>

        <div className="destinations-grid">
          {signatureDestinations.map((dest) => (
            <article key={dest.name} className="destination-card">
              <img
                src={dest.image}
                alt={dest.name}
                className="destination-image"
              />
              <h3 className="destination-name">{dest.name}</h3>
              <p className="destination-tagline">{dest.tagline}</p>
              <p className="destination-price">{dest.from}</p>
              <div className="destination-meta-row">
                <span className="destination-chip">{dest.region}</span>
                <span className="destination-chip">{dest.season}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="home-how-grid">
        <div>
          <h2 className="home-how-title">
            How we help you choose the right liveaboard.
          </h2>
          <ul className="home-how-list">
            <li>You tell us how you like to dive, your rough dates and budget.</li>
            <li>We check seasonality, routing and operator quality instead of just price.</li>
            <li>You receive a concise shortlist instead of endless search results.</li>
            <li>We speak directly with operators on your behalf to confirm the details.</li>
          </ul>
        </div>
        <p className="home-how-text">
          Unlike generic booking sites, we focus specifically on liveaboards and a small group
          of trusted operators. That means better advice on when to go, which route actually
          makes sense for your level, and what to expect on board — so you book with
          confidence, not guesswork.
        </p>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>Based in Portugal (EU) · info@fanecaexpeditions.com</p>
        <Link href="/admin/login">admin</Link>
      </footer>
    </main>
  );
}
