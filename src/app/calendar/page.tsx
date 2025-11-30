import Link from "next/link";

export const metadata = {
  title: "Liveaboard departure calendar | Faneca Expeditions",
  description:
    "Curated liveaboard departures from mid-2026 onwards across our partner fleet. A planning overview to help you pick the right month and region.",
};

type Departure = {
  route: string;
  region: string;
  dates: string;
  summary: string;
  fromPrice: string;
  tags?: string[];
};

type MonthBlock = {
  id: string;
  label: string;
  intro: string;
  departures: Departure[];
};

const months: MonthBlock[] = [
  {
    id: "2026-06",
    label: "June 2026",
    intro: "Curated liveaboard departures for this month.",
    departures: [
      {
        route: "Blue Manta",
        region: "Maldives · Central atolls",
        dates: "15–22 June · 7 nights",
        fromPrice: "from 2,990 USD",
        summary: "Central atolls, channel drifts and early southwest monsoon conditions.",
        tags: ["sharks", "channel drift"],
      },
      {
        route: "Emperor Elite",
        region: "Egypt · Red Sea (Brothers, Daedalus & Elphinstone)",
        dates: "8–15 June · 7 nights",
        fromPrice: "from 1,890 USD",
        summary: "Offshore reefs with blue-water crossings and classic Red Sea walls.",
        tags: ["sharks", "wreck / wall"],
      },
    ],
  },
  {
    id: "2026-07",
    label: "July 2026",
    intro: "Curated liveaboard departures for this month.",
    departures: [
      {
        route: "Indo Explorer",
        region: "Indonesia · Raja Ampat (central / Dampier Strait)",
        dates: "10–20 July · 10 nights",
        fromPrice: "from 3,450 USD",
        summary: "Longer Raja Ampat route with time on key reefs and seamounts.",
        tags: ["photography", "coral"],
      },
    ],
  },
  {
    id: "2026-08",
    label: "August 2026",
    intro: "Good month for Indonesia and selected Red Sea routes.",
    departures: [
      {
        route: "Red Sea Aggressor",
        region: "Egypt · Red Sea (North & Wrecks)",
        dates: "17–24 August · 7 nights",
        fromPrice: "from 1,650 USD",
        summary: "Classic northern itinerary with Ras Mohammed and Thistlegorm.",
        tags: ["wrecks", "mixed-level"],
      },
    ],
  },
  {
    id: "2026-09",
    label: "September 2026",
    intro: "Transition month with strong options in the Maldives and Red Sea.",
    departures: [
      {
        route: "Scubaspa Yang",
        region: "Maldives · Central & South",
        dates: "5–12 September · 7 nights",
        fromPrice: "from 3,150 USD",
        summary: "Liveaboard–resort hybrid with manta and reef shark focus.",
        tags: ["manta", "comfort"],
      },
    ],
  },
  {
    id: "2026-10",
    label: "October 2026",
    intro: "Start of the prime season for many Indonesian routes.",
    departures: [
      {
        route: "Tiaré",
        region: "Indonesia · Raja Ampat",
        dates: "12–22 October · 10 nights",
        fromPrice: "from 4,200 USD",
        summary: "Warm-water coral, soft drifts and classic Raja macro life.",
        tags: ["macro", "photography"],
      },
    ],
  },
  {
    id: "2026-11",
    label: "November 2026",
    intro: "Peak conditions on several Indo–Pacific shark and manta routes.",
    departures: [
      {
        route: "Galápagos Master",
        region: "Ecuador · Galápagos",
        dates: "9–16 November · 7 nights",
        fromPrice: "from 7,900 USD",
        summary: "Hammerheads, schooling fish and cooler, high-energy currents.",
        tags: ["advanced", "big animals"],
      },
    ],
  },
];

export default function CalendarPage() {
  return (
    <main className="main-shell calendar-main">
      {/* Hero with image and copy */}
      <section className="calendar-hero">
        <div className="calendar-hero-copy">
          <p className="home-kicker">DEPARTURE CALENDAR</p>
          <h1 className="home-title calendar-title">
            Curated liveaboard departures from June 2026 onwards.
          </h1>
          <p className="home-lead calendar-lead">
            This view highlights a small number of handpicked departures each month across our
            partner fleet. Use it as a planning overview, then dive deeper into individual trips
            or start the matchmaker if you&apos;re not sure what fits you best.
          </p>

          <div className="home-cta-row calendar-cta-row">
            <Link href="/quiz" className="home-cta-primary">
              Not sure which month? Start the matchmaker
            </Link>
            <Link href="/concierge" className="home-cta-secondary">
              Talk to the concierge
            </Link>
          </div>

          <p className="calendar-note">
            Dates and prices are indicative and subject to operator confirmation. We&apos;ll
            double-check availability and details before you book.
          </p>
        </div>

        <div className="calendar-hero-media">
          <img
            src="/images/calendar/calendar-hero.jpeg"
            alt="Diver swimming through coral canyon"
            className="calendar-hero-img"
          />
        </div>
      </section>

      {/* Month grid */}
      <section className="calendar-grid-wrapper">
        <div className="home-section-header calendar-section-header">
          <h2 className="home-section-title">Year view · 2026 departures</h2>
          <p className="home-section-sub">
            A planning tool, not a full inventory — we also work quietly with other dates and
            routes on request.
          </p>
        </div>

        <div className="calendar-grid">
          {months.map((month) => (
            <article key={month.id} className="calendar-card">
              <header className="calendar-card-header">
                <h3 className="calendar-card-title">{month.label}</h3>
                <p className="calendar-card-intro">{month.intro}</p>
              </header>

              <div className="calendar-card-body">
                {month.departures.map((dep, idx) => (
                  <div key={idx} className="calendar-departure">
                    <p className="calendar-departure-route">
                      {dep.route}
                      <span className="calendar-departure-region"> · {dep.region}</span>
                    </p>
                    <p className="calendar-departure-meta">
                      {dep.dates} · <span className="calendar-departure-price">{dep.fromPrice}</span>
                    </p>
                    <p className="calendar-departure-summary">{dep.summary}</p>
                    {dep.tags && dep.tags.length > 0 && (
                      <div className="calendar-tags-row">
                        {dep.tags.map((tag) => (
                          <span key={tag} className="calendar-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <footer className="calendar-card-footer">
                <Link href="/concierge" className="calendar-card-link">
                  Ask us about these sailings →
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
