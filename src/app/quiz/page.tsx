import Link from "next/link";

export const metadata = {
  title: "Liveaboard matchmaker | Faneca Expeditions",
  description:
    "Answer a few questions and we’ll match you with boutique liveaboard itineraries that fit your experience, budget and travel window."
};

export default function QuizPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Liveaboard matchmaker
        </h1>
        <p className="text-sm text-slate-600">
          Seven quick questions. We’ll shortlist a few handpicked liveaboards that fit how you like
          to dive.
        </p>
      </header>

      <form
        action="/quiz/results"
        method="GET"
        className="space-y-6 rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm"
      >
        {/* Q1: Experience */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            1. How would you describe your current diving experience?
          </h2>
          <p className="text-xs text-slate-500">
            This helps us avoid routes that are too basic or too demanding.
          </p>
          <div className="mt-2 grid gap-2">
            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs hover:border-slate-400">
              <input
                type="radio"
                name="experienceLevel"
                value="beginner"
                className="mt-[3px]"
                defaultChecked
              />
              <span>New or recently certified (0–20 dives)</span>
            </label>
            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs hover:border-slate-400">
              <input type="radio" name="experienceLevel" value="intermediate" className="mt-[3px]" />
              <span>Comfortable recreational diver (20–100 dives)</span>
            </label>
            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs hover:border-slate-400">
              <input type="radio" name="experienceLevel" value="advanced" className="mt-[3px]" />
              <span>Very experienced / advanced (100+ dives)</span>
            </label>
            <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs hover:border-slate-400">
              <input type="radio" name="experienceLevel" value="mixed" className="mt-[3px]" />
              <span>Mixed group with different experience levels</span>
            </label>
          </div>
        </section>

        {/* Q2: Regions */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            2. Do you have any regions in mind?
          </h2>
          <p className="text-xs text-slate-500">
            You can tick more than one, or leave everything blank if you&apos;re open.
          </p>
          <div className="mt-2 grid gap-2 text-xs">
            {[
              "Maldives",
              "Red Sea",
              "Indonesia",
              "Philippines",
              "Bahamas / Caribbean",
              "Galápagos / Cocos"
            ].map((region) => (
              <label
                key={region}
                className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400"
              >
                <input
                  type="checkbox"
                  name="regions"
                  value={region}
                  className="mt-[3px]"
                />
                <span>{region}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Q3: Budget */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            3. Approximate budget per diver (excluding flights)?
          </h2>
          <div className="mt-2 grid gap-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input
                type="radio"
                name="budgetBand"
                value="budget"
                className="mt-[3px]"
                defaultChecked
              />
              <span>Under US$2,000</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="budgetBand" value="mid" className="mt-[3px]" />
              <span>US$2,000 – 3,000</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="budgetBand" value="mid-luxury" className="mt-[3px]" />
              <span>US$3,000 – 4,000</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="budgetBand" value="luxury" className="mt-[3px]" />
              <span>US$4,000+ (premium / luxury)</span>
            </label>
          </div>
        </section>

        {/* Q4: Travel window */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            4. When are you planning to travel?
          </h2>
          <div className="mt-2 grid gap-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input
                type="radio"
                name="travelWindow"
                value="flexible"
                className="mt-[3px]"
                defaultChecked
              />
              <span>Dates are flexible</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="travelWindow" value="2026-jun-aug" className="mt-[3px]" />
              <span>June – August 2026</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="travelWindow" value="2026-sep-nov" className="mt-[3px]" />
              <span>September – November 2026</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input
                type="radio"
                name="travelWindow"
                value="2026-dec-2027-feb"
                className="mt-[3px]"
              />
              <span>December 2026 – February 2027</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="travelWindow" value="2027-mar-may" className="mt-[3px]" />
              <span>March – May 2027</span>
            </label>
          </div>
        </section>

        {/* Q5: Trip vibe */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            5. What best describes the vibe you&apos;re after?
          </h2>
          <p className="text-xs text-slate-500">
            Choose one main priority. We can always adjust later.
          </p>
          <div className="mt-2 grid gap-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input
                type="radio"
                name="vibe"
                value="relaxed"
                className="mt-[3px]"
                defaultChecked
              />
              <span>Easygoing and relaxed, with plenty of surface time</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="vibe" value="hardcore-diving" className="mt-[3px]" />
              <span>As much diving as possible – this is a dive mission</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="vibe" value="luxury" className="mt-[3px]" />
              <span>Comfortable boat, good food and a softer schedule</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="vibe" value="social" className="mt-[3px]" />
              <span>Social boat with a friendly, mixed crowd</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="vibe" value="photography" className="mt-[3px]" />
              <span>I&apos;m a photographer and want time to shoot properly</span>
            </label>
          </div>
        </section>

        {/* Q6: Underwater priorities */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            6. What matters most to you underwater?
          </h2>
          <p className="text-xs text-slate-500">
            Tick as many as apply – we&apos;ll still suggest balanced routes where it makes sense.
          </p>
          <div className="mt-2 grid gap-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="checkbox" name="focus" value="sharks" className="mt-[3px]" />
              <span>Sharks and big animals</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="checkbox" name="focus" value="coral" className="mt-[3px]" />
              <span>Healthy reefs and coral scenes</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="checkbox" name="focus" value="macro" className="mt-[3px]" />
              <span>Macro and small critters</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="checkbox" name="focus" value="wrecks" className="mt-[3px]" />
              <span>Historic wrecks</span>
            </label>
          </div>
        </section>

        {/* Q7: Group type */}
        <section className="space-y-2">
          <h2 className="text-sm font-medium text-slate-800">
            7. Who are you planning to travel with?
          </h2>
          <div className="mt-2 grid gap-2 text-xs">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input
                type="radio"
                name="groupType"
                value="solo"
                className="mt-[3px]"
                defaultChecked
              />
              <span>Solo</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="groupType" value="couple" className="mt-[3px]" />
              <span>Couple</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="groupType" value="friends" className="mt-[3px]" />
              <span>Friends / buddy group</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="groupType" value="club" className="mt-[3px]" />
              <span>Dive club or larger group</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:border-slate-400">
              <input type="radio" name="groupType" value="family" className="mt-[3px]" />
              <span>Family (including non-divers)</span>
            </label>
          </div>
        </section>

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <Link
            href="/calendar"
            className="text-xs text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline"
          >
            Prefer to browse by month instead?
          </Link>
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800"
          >
            See my matches
          </button>
        </div>
      </form>
    </main>
  );
}
