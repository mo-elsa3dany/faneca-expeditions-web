import { TRIPS } from "@/data/trips";
import { getTopTrips } from "@/lib/quiz-score";
import type { QuizAnswers, ExperienceLevel, TravelWindow } from "@/lib/quiz-types";
import type { BudgetBand, TripVibe, FocusTag, GroupType } from "@/lib/types";
import Link from "next/link";

type SearchParams = { [key: string]: string | string[] | undefined };

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parseAnswers(searchParams: SearchParams): QuizAnswers {
  const experienceLevel = (searchParams.experienceLevel as ExperienceLevel) ?? "intermediate";
  const preferredRegions = toArray(searchParams.regions);

  const budgetBand = (searchParams.budgetBand as BudgetBand) ?? "mid";
  const travelWindow = (searchParams.travelWindow as TravelWindow) ?? "flexible";

  const vibeValue = (searchParams.vibe as TripVibe) ?? "relaxed";
  const tripVibes: TripVibe[] = [vibeValue];

  const focusValues = toArray(searchParams.focus) as FocusTag[];
  const groupType = (searchParams.groupType as GroupType) ?? "solo";

  return {
    experienceLevel,
    preferredRegions,
    budgetBand,
    travelWindow,
    tripVibes,
    focusTags: focusValues,
    groupType
  };
}

interface ResultsPageProps {
  searchParams: Promise<SearchParams>;
}

export const metadata = {
  title: "Your liveaboard matches | Faneca Expeditions",
  description:
    "Curated liveaboard recommendations based on your experience, budget and travel preferences."
};

export default async function QuizResultsPage({ searchParams }: ResultsPageProps) {
  const params = await searchParams;
  const answers = parseAnswers(params);
  const matches = getTopTrips(TRIPS, answers, 5);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Your liveaboard matches
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Based on your answers, these are the trips most likely to fit how you like to dive.
        </p>
      </header>

      {matches.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white/80 p-4 text-sm text-slate-700">
          No clean match yet. Widen your regions or budget, or{" "}
          <Link href="/concierge" className="underline underline-offset-2">
            request a private planning session
          </Link>
          .
        </div>
      ) : (
        <section className="space-y-4">
          {matches.map((trip) => (
            <article
              key={trip.id}
              className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold">{trip.name}</h2>
                  <p className="text-xs text-slate-600">
                    {trip.region}{trip.country ? ` · ${trip.country}` : ""} · {trip.lengthNights} nights
                  </p>
                  <p className="text-xs text-slate-700">{trip.shortDescription}</p>
                </div>

                <div className="mt-1 flex flex-col items-start gap-2 text-xs md:items-end">
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded-full border border-slate-200 px-2 py-[2px] text-[10px] uppercase">
                      {trip.budgetBand}
                    </span>
                    <span className="rounded-full border border-slate-200 px-2 py-[2px] text-[10px] uppercase">
                      {trip.difficulty}
                    </span>
                    {trip.focusTags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 px-2 py-[2px] text-[10px] uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/trips/${trip.slug}`}
                    className="text-[11px] underline-offset-2 hover:underline"
                  >
                    View trip details
                  </Link>
                </div>
              </div>

              <div className="mt-3 border-t border-slate-100 pt-3">
                <p className="text-[11px] text-slate-600">
                  Typical routing: {trip.itinerarySummary}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}

      <footer className="mt-6 flex items-center justify-between text-xs text-slate-500">
        <Link href="/quiz" className="underline-offset-2 hover:underline">
          Adjust my answers
        </Link>
        <Link href="/concierge" className="underline-offset-2 hover:underline">
          Prefer a bespoke plan? Explore the private planning service →
        </Link>
      </footer>
    </main>
  );
}
