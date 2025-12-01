import Link from "next/link";

export const metadata = {
  title: "Your liveaboard matchmaker results | Faneca Expeditions",
  description:
    "Suggested regions and sample routes based on your liveaboard quiz answers.",
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

function getValue(sp: SearchParams, key: string): string {
  const v = sp[key];
  if (Array.isArray(v)) return v[0] ?? "";
  return v ?? "";
}

function buildSuggestions(sp: SearchParams) {
  const experience = getValue(sp, "experienceLevel");
  const vibe = getValue(sp, "tripVibe");
  const budget = getValue(sp, "budgetBand");
  const window = getValue(sp, "travelWindow");

  const suggestions: {
    title: string;
    region: string;
    why: string;
    sampleRoute: string;
  }[] = [];

  if (vibe === "big-animals" && (budget === "high" || budget === "ultra")) {
    suggestions.push({
      title: "Galápagos shark and schooling fish routes",
      region: "Ecuador · Galápagos",
      why: "You selected a big-animal focus with a higher budget, which lines up well with cooler-water, current-heavy routes.",
      sampleRoute:
        "7-night Wolf & Darwin itinerary with hammerheads, schooling fish and cooler currents.",
    });
  }

  if (vibe === "big-animals" && (budget === "mid" || budget === "value")) {
    suggestions.push({
      title: "Red Sea offshore shark routes",
      region: "Egypt · Brothers, Daedalus & Elphinstone",
      why: "You want big animals but may prefer a better value band than Galápagos-level pricing.",
      sampleRoute:
        "7-night Brothers, Daedalus & Elphinstone (BDE) route with reef walls and blue-water shark chances.",
    });
  }

  if (vibe === "reefs" || vibe === "mixed") {
    suggestions.push({
      title: "Central Maldives reef & channel itineraries",
      region: "Maldives · Central atolls",
      why: "Warm water, reef life and soft drifts are a good fit for your preferences.",
      sampleRoute:
        "7-night central atolls route with manta cleaning stations, reef sharks and soft coral drifts.",
    });
  }

  if (vibe === "macro" || experience !== "new") {
    suggestions.push({
      title: "Raja Ampat coral and macro routes",
      region: "Indonesia · Raja Ampat",
      why: "You can handle more detailed diving and may appreciate richer coral and macro life.",
      sampleRoute:
        "9–10 night central Raja route with reefs, seamounts and sheltered macro sites.",
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      title: "Classic mixed-level liveaboard routes",
      region: "Red Sea, Maldives or Thailand",
      why: "Your answers are very flexible, so several mixed-level routes could work well.",
      sampleRoute:
        "A 7-night mixed itinerary with balanced conditions and varied sites.",
    });
  }

  const travelNote =
    window === "jan-apr"
      ? "Jan–Apr is strong for central Maldives and many Red Sea and Raja Ampat routes."
      : window === "may-aug"
      ? "May–Aug can work well for selected Red Sea and Indonesia routes; we’ll avoid obviously off-season itineraries."
      : window === "sep-dec"
      ? "Sep–Dec is a good shoulder/prime period for several regions depending on where you’re based."
      : "With flexible dates, we can aim for best seasons in each region instead of forcing specific weeks.";

  return { suggestions, travelNote };
}

export default async function QuizResultsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Next 16: searchParams is a Promise, so we await it once here
  const params = await searchParams;

  const experience = getValue(params, "experienceLevel");
  const vibe = getValue(params, "tripVibe");
  const groupType = getValue(params, "groupType");
  const budget = getValue(params, "budgetBand");
  const window = getValue(params, "travelWindow");

  const { suggestions, travelNote } = buildSuggestions(params);

  const mailtoLink = (() => {
    const to = "info@fanecaexpeditions.com";
    const subject = encodeURIComponent(
      "Liveaboard quiz results · Faneca Expeditions",
    );
    const body = encodeURIComponent(
      [
        "Hi Faneca team,",
        "",
        "Here are my quiz answers:",
        `• Experience level: ${experience || "—"}`,
        `• Trip vibe: ${vibe || "—"}`,
        `• Group type: ${groupType || "—"}`,
        `• Budget band: ${budget || "—"}`,
        `• Travel window: ${window || "—"}`,
        "",
        "I’d love your help turning this into a concrete shortlist of boats and dates.",
        "",
        "Thank you!",
      ].join("\n"),
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  })();

  return (
    <main className="main-shell quiz-results-main">
      <header className="quiz-header">
        <p className="home-kicker">TRIP MATCHMAKER</p>
        <h1 className="home-title quiz-title">
          Suggested regions based on your answers.
        </h1>
        <p className="home-lead quiz-lead">
          These are high-level suggestions, not hard sells. The real work happens when we map
          these to specific boats, dates and your travel logistics.
        </p>
      </header>

      <section className="quiz-results-grid">
        <section className="quiz-results-main-column">
          <div className="quiz-results-card">
            <h2 className="quiz-question-title">
              Suggested regions &amp; sample routes
            </h2>
            <p className="quiz-results-note">{travelNote}</p>

            <div className="quiz-results-list">
              {suggestions.map((sugg) => (
                <article key={sugg.title} className="quiz-suggestion">
                  <h3 className="quiz-suggestion-title">{sugg.title}</h3>
                  <p className="quiz-suggestion-region">{sugg.region}</p>
                  <p className="quiz-suggestion-body">{sugg.why}</p>
                  <p className="quiz-suggestion-route">{sugg.sampleRoute}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="quiz-results-aside">
          <div className="quiz-aside-card">
            <h2 className="quiz-aside-title">Send this to the concierge</h2>
            <p className="quiz-aside-body">
              If this feels in the right ballpark, send your answers to the concierge with
              one click. We&apos;ll respond personally with a refined shortlist of boats and
              dates.
            </p>
            <a href={mailtoLink} className="home-cta-primary quiz-submit">
              Email these answers
            </a>
            <p className="quiz-aside-body">
              Prefer a different region or have fixed dates/holidays? Mention that in your
              message and we’ll factor it in.
            </p>
            <Link href="/quiz" className="calendar-card-link">
              Adjust my answers and try again →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
