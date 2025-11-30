import Link from "next/link";

export const metadata = {
  title: "Faneca Expeditions | Boutique Liveaboard Planning",
  description:
    "Liveaboard trip matchmaker, curated departure calendar and private planning service for divers who care about details."
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Faneca Expeditions
        </h1>
        <p className="max-w-xl text-sm text-slate-600">
          Boutique liveaboard planning for divers who want the right boat, the right route and the
          right season — without losing evenings to research.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/quiz"
          className="rounded-xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm transition hover:border-slate-300 hover:bg-white"
        >
          <h2 className="text-sm font-semibold tracking-tight">
            Liveaboard matchmaker
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Answer a few questions and we&apos;ll shortlist itineraries that fit your experience,
            budget and travel window.
          </p>
          <p className="mt-3 text-[11px] font-medium text-slate-900">
            Start the quiz →
          </p>
        </Link>

        <Link
          href="/calendar"
          className="rounded-xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm transition hover:border-slate-300 hover:bg-white"
        >
          <h2 className="text-sm font-semibold tracking-tight">
            2026–2027 departures calendar
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Month-by-month overview of a small number of curated departures across our partner
            fleet.
          </p>
          <p className="mt-3 text-[11px] font-medium text-slate-900">
            View the calendar →
          </p>
        </Link>

        <Link
          href="/concierge"
          className="rounded-xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm transition hover:border-slate-300 hover:bg-white"
        >
          <h2 className="text-sm font-semibold tracking-tight">
            Private planning concierge
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Prefer a one-to-one conversation? Share your rough plan and we&apos;ll do the legwork.
          </p>
          <p className="mt-3 text-[11px] font-medium text-slate-900">
            Learn more →
          </p>
        </Link>
      </section>

      <footer className="mt-10 flex justify-end">
        <Link
          href="/admin/login"
          className="text-[10px] text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
        >
          admin
        </Link>
      </footer>
    </main>
  );
}
