import Link from "next/link";

export const metadata = {
  title: "Private liveaboard planning service | Faneca Expeditions",
  description:
    "A simple, boutique liveaboard planning service. Share a short brief and we’ll shortlist trusted boats, check availability and reply personally.",
};

export default function ConciergePage() {
  return (
    <main className="main-shell home concierge-main">
      {/* Hero with image and copy */}
      <section className="concierge-hero">
        <div className="concierge-hero-media">
          <img
            src="/images/concierge/concierge-host.jpg"
            alt="Concierge host"
            className="concierge-hero-img"
          />
        </div>

        <div className="concierge-header">
          <p className="home-kicker">CONCIERGE</p>
          <h1 className="home-title concierge-title">
            Private liveaboard planning service.
          </h1>
          <p className="home-lead concierge-lead">
            This is a simple, boutique planning service. Tell us roughly when, where and how you
            like to dive and we&apos;ll shortlist liveaboards, sanity-check routing and reply
            personally with options.
          </p>

          <div className="home-cta-row concierge-cta-row">
            <a
              href="mailto:info@fanecaexpeditions.com?subject=Liveaboard%20planning%20brief"
              className="home-cta-primary"
            >
              Email your brief
            </a>
            <Link href="/quiz" className="home-cta-secondary">
              Start the liveaboard matchmaker
            </Link>
          </div>

          <p className="concierge-note">
            Later this will be wired to a paid concierge checkout and the internal CRM. For now
            it&apos;s a straightforward, human workflow.
          </p>
        </div>
      </section>

      {/* What we do / what you get */}
      <section className="concierge-grid">
        <article className="concierge-card">
          <h2 className="concierge-card-title">What we&apos;ll do on our side</h2>
          <ul className="concierge-list">
            <li>Review your brief and clarify anything that&apos;s ambiguous.</li>
            <li>
              Shortlist a small number of liveaboards that actually fit your level, timing and
              budget.
            </li>
            <li>Check availability, routing and operator reputation.</li>
            <li>
              Reply personally with options, trade-offs and next steps — not automated search
              results.
            </li>
          </ul>
        </article>

        <article className="concierge-card">
          <h2 className="concierge-card-title">What to include in your first message</h2>
          <ul className="concierge-list">
            <li>Rough dates or a month window you&apos;re considering.</li>
            <li>Regions or specific routes that interest you.</li>
            <li>Approximate budget per diver (excluding flights).</li>
            <li>How experienced the divers are and what you enjoy (sharks, macro, wrecks, etc.).</li>
            <li>Who you&apos;re travelling with (solo, couple, friends, club, family).</li>
          </ul>
        </article>
      </section>

      {/* Reassurance block */}
      <section className="concierge-wide">
        <article className="concierge-card">
          <h2 className="concierge-card-title">
            Not a call centre. Just a small liveaboard agency.
          </h2>
          <p className="concierge-body">
            We work with a small network of operators we know and trust. Trips are built around
            how you actually like to dive — not just whatever boat happens to be discounted this
            week. If the dates or region you&apos;re asking for aren&apos;t a good idea, we&apos;ll
            say so and suggest alternatives.
          </p>
        </article>
      </section>
    </main>
  );
}
