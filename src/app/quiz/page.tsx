import Link from "next/link";

export const metadata = {
  title: "Liveaboard trip matchmaker | Faneca Expeditions",
  description:
    "Answer a few quick questions about how you like to dive, and we’ll suggest liveaboard routes that actually fit you.",
};

export default function QuizPage() {
  return (
    <main className="main-shell quiz-main">
      <header className="quiz-header">
        <p className="home-kicker">TRIP MATCHMAKER</p>
        <h1 className="home-title quiz-title">
          Find the liveaboard that actually fits you.
        </h1>
        <p className="home-lead quiz-lead">
          A short, practical set of questions about how you like to dive, when you can travel
          and what you roughly want to spend. At the end you&apos;ll see suggested regions and
          sample routes — and you can send your answers straight to the concierge.
        </p>
      </header>

      <section className="quiz-grid">
        <form method="GET" action="/quiz/results" className="quiz-form">
          {/* Experience level */}
          <div className="quiz-card">
            <h2 className="quiz-question-title">How experienced are you in the water?</h2>
            <p className="quiz-question-sub">
              Rough is fine — this is to avoid sending you to the wrong currents.
            </p>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="experienceLevel" value="new" required />
                <span>Newer diver · comfortable to 18–25 m</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="experienceLevel" value="intermediate" />
                <span>Intermediate · 30 m, okay with some current</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="experienceLevel" value="advanced" />
                <span>Advanced · happy in current, blue water and drifts</span>
              </label>
            </div>
          </div>

          {/* Trip vibe */}
          <div className="quiz-card">
            <h2 className="quiz-question-title">What&apos;s the main vibe you&apos;re after?</h2>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="tripVibe" value="big-animals" required />
                <span>Big animals · sharks, mantas, pelagics</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="tripVibe" value="reefs" />
                <span>Reefs &amp; scenery · coral, warm water, “wow” views</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="tripVibe" value="macro" />
                <span>Macro &amp; photography · critters, seafans, slower diving</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="tripVibe" value="mixed" />
                <span>Mixed · a bit of everything, not ultra-specific</span>
              </label>
            </div>
          </div>

          {/* Group type */}
          <div className="quiz-card">
            <h2 className="quiz-question-title">Who are you travelling with?</h2>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="groupType" value="solo" required />
                <span>Solo</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="groupType" value="couple" />
                <span>Couple</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="groupType" value="friends" />
                <span>Friends / small group</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="groupType" value="club" />
                <span>Dive club / larger group</span>
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className="quiz-card">
            <h2 className="quiz-question-title">Rough budget per diver (excluding flights)?</h2>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="budgetBand" value="value" required />
                <span>Up to ~2,000 USD</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="budgetBand" value="mid" />
                <span>2,000 – 3,500 USD</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="budgetBand" value="high" />
                <span>3,500 – 6,000 USD</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="budgetBand" value="ultra" />
                <span>6,000+ USD</span>
              </label>
            </div>
          </div>

          {/* Travel window */}
          <div className="quiz-card">
            <h2 className="quiz-question-title">When are you realistically able to travel?</h2>
            <p className="quiz-question-sub">
              We&apos;ll map this against likely seasons instead of fixed weeks.
            </p>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="travelWindow" value="jan-apr" required />
                <span>Jan – Apr</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="travelWindow" value="may-aug" />
                <span>May – Aug</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="travelWindow" value="sep-dec" />
                <span>Sep – Dec</span>
              </label>
              <label className="quiz-option">
                <input type="radio" name="travelWindow" value="flexible" />
                <span>Flexible · I can move dates</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="quiz-actions">
            <button type="submit" className="home-cta-primary quiz-submit">
              See suggested regions &amp; routes
            </button>
            <p className="quiz-footnote">
              On the next screen you can send these answers directly to the concierge so we can
              refine real boats and dates for you.
            </p>
          </div>
        </form>

        {/* Side text */}
        <aside className="quiz-aside">
          <div className="quiz-aside-card">
            <h2 className="quiz-aside-title">What happens after this?</h2>
            <p className="quiz-aside-body">
              The quiz is a starting point, not a booking engine. You&apos;ll see high-level
              suggestions for regions and sample routes based on your answers. If it looks close,
              you can forward your answers to the concierge and we&apos;ll check actual boats,
              dates and availability.
            </p>
            <p className="quiz-aside-body">
              We work with a small set of operators we know and trust, not the entire internet.
              That&apos;s how we keep the shortlist realistic and honest.
            </p>
            <Link href="/concierge" className="calendar-card-link">
              Prefer to skip the quiz? Talk to the concierge →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
