import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Boutique liveaboard specialists for divers | Faneca Expeditions",
  description:
    "Faneca Expeditions designs and plans liveaboard trips with a focus on routing, conditions and the right boats. Trip matchmaker quiz, curated departure calendar and dedicated concierge support.",
};

export default function HomePage() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-grid">
          <div className="home-hero-main">
            <p className="home-kicker">Boutique liveaboard trip design</p>

            <h1 className="home-title">
              Better decisions start with better trip design.
            </h1>

            <p className="home-lead">
              We guide you through timing, routes and vessel fit — clean, curated,
              transparent.
            </p>

            <p className="home-footnote">
              A boutique liveaboard agency with a modern approach to planning.
            </p>

            <div className="home-cta-row">
              <Link href="/quiz" className="home-cta home-cta-primary">
                Start the trip matchmaker
              </Link>
              <Link href="/concierge" className="home-cta home-cta-secondary">
                Need expert guidance on routes or timing? Connect with the concierge →
              </Link>
            </div>
          </div>

          <aside className="home-hero-card" aria-label="Example route">
            <p className="home-hero-label">Sample route snapshot</p>
            <p className="home-hero-route">Red Sea · Offshore sharks &amp; reefs</p>
            <p className="home-hero-meta">
              7 nights · typical Oct–Dec · mix of offshore shark sites and classic
              reef walls. Suitable for comfortable intermediates and above.
            </p>
            <p className="home-hero-meta">
              We&apos;ll sanity-check conditions, moon phase and your experience
              before suggesting boats.
            </p>
          </aside>
        </div>
      </section>

      {/* Signature regions */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">
            Signature liveaboard regions we work with often
          </h2>
          <p className="home-section-sub">
            A focused set of regions where we understand seasons, routing quirks
            and operator styles — not a giant, generic list.
          </p>
        </div>

        <div className="home-cols home-cols-destinations">
          {/* Red Sea */}
          <article className="destination-card">
            <div className="destination-image-wrap">
              <Image
                src="/images/destinations/red-sea.jpeg"
                alt="Red Sea liveaboard route"
                width={640}
                height={400}
                className="destination-image"
              />
            </div>
            <div className="destination-body">
              <h3 className="destination-title">
                Red Sea · Offshore &amp; classic routes
              </h3>
              <p className="destination-meta">
                Seasonal shark routes plus northern and central itineraries.
              </p>
              <p className="destination-text">
                Classic shark routes, wrecks and reef walls with predictable
                seasonality. Good for mixed groups if we choose the right week,
                route and boat.
              </p>
            </div>
          </article>

          {/* Maldives */}
          <article className="destination-card">
            <div className="destination-image-wrap">
              <Image
                src="/images/destinations/maldives.jpeg"
                alt="Maldives liveaboard"
                width={640}
                height={400}
                className="destination-image"
              />
            </div>
            <div className="destination-body">
              <h3 className="destination-title">
                Maldives · Channels &amp; atoll routes
              </h3>
              <p className="destination-meta">
                Channel dives, cleaning stations and classic atoll loops.
              </p>
              <p className="destination-text">
                From slightly softer central itineraries to more current-exposed
                routes, we help match conditions and current requirements to your
                actual experience — not just your certification card.
              </p>
            </div>
          </article>

          {/* Raja Ampat */}
          <article className="destination-card">
            <div className="destination-image-wrap">
              <Image
                src="/images/destinations/raja-ampat.jpeg"
                alt="Raja Ampat liveaboard"
                width={640}
                height={400}
                className="destination-image"
              />
            </div>
            <div className="destination-body">
              <h3 className="destination-title">
                Raja Ampat · Reefs, seamounts &amp; macro
              </h3>
              <p className="destination-meta">
                Central &amp; Dampier Strait routes, plus select extended trips.
              </p>
              <p className="destination-text">
                Warm water, dense reefs and busy seamounts. We help choose
                between classic central routes, longer combos and options that
                balance macro with big-picture scenery.
              </p>
            </div>
          </article>

          {/* Bahamas */}
          <article className="destination-card">
            <div className="destination-image-wrap">
              <Image
                src="/images/destinations/bahamas.jpeg"
                alt="Bahamas liveaboard"
                width={640}
                height={400}
                className="destination-image"
              />
            </div>
            <div className="destination-body">
              <h3 className="destination-title">
                Bahamas · Sharks &amp; clear-water reefs
              </h3>
              <p className="destination-meta">
                Shark-focused trips and reef itineraries.
              </p>
              <p className="destination-text">
                From shark-specific liveaboards to relaxed Caribbean reef routes,
                we help match the right operation to your comfort level and travel
                logistics.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* How we help section */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">
            Ways to work with Faneca Expeditions
          </h2>
          <p className="home-section-sub">
            Use the trip matchmaker, browse departures or just email us a short
            brief. The goal is always the same: a shortlist you can actually use.
          </p>
        </div>

        <div className="home-cols">
          <div className="home-col-card">
            <h3 className="home-col-title">Trip matchmaker quiz</h3>
            <p className="home-col-body">
              Answer a few practical questions about experience, budget and
              timing. We&apos;ll suggest regions and sample routes, then you can
              send your answers straight to the concierge.
            </p>
            <Link href="/quiz" className="home-col-link">
              Start the matchmaker →
            </Link>
          </div>

          <div className="home-col-card">
            <h3 className="home-col-title">Curated departure calendar</h3>
            <p className="home-col-body">
              A simple year view of handpicked departures from mid-2026 onward.
              It&apos;s a planning tool, not a full inventory, and it changes
              with conditions and demand.
            </p>
            <Link href="/calendar" className="home-col-link">
              Explore the calendar →
            </Link>
          </div>

          <div className="home-col-card">
            <h3 className="home-col-title">Private liveaboard concierge</h3>
            <p className="home-col-body">
              If you prefer a human from the beginning, send a short brief.
              We&apos;ll review it, question the plan where needed and suggest
              operators we trust for your dates and level.
            </p>
            <Link href="/concierge" className="home-col-link">
              Talk to the concierge →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
