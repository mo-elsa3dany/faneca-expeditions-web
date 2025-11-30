import { TRIPS } from "@/data/trips";
import Link from "next/link";

interface TripPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TRIPS.map((trip) => ({ slug: trip.slug }));
}

export default async function TripPage({ params }: TripPageProps) {
  const { slug } = await params;

  const trip = TRIPS.find((t) => t.slug === slug);

  if (!trip) {
    return (
      <main className="mx-auto max-w-xl px-4 py-10">
        <p className="text-sm text-slate-700">
          We couldn&apos;t find that itinerary.{" "}
          <Link href="/quiz" className="underline underline-offset-2">
            Go back to your matches
          </Link>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {trip.name}
        </h1>
        <p className="text-sm text-slate-600">
          {trip.region}
          {trip.country ? ` · ${trip.country}` : ""} · {trip.lengthNights} nights
        </p>
      </header>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-700 shadow-sm">
        <p>{trip.shortDescription}</p>
        <p className="text-[13px] text-slate-600">
          {trip.itinerarySummary}
        </p>
        <p className="text-[11px] text-slate-500">
          This is a static overview for now. Final routings and exact dates are confirmed on enquiry.
        </p>
      </section>

      <footer className="mt-6 flex items-center justify-between text-xs text-slate-500">
        <Link href="/quiz" className="underline-offset-2 hover:underline">
          Back to my matches
        </Link>
        <Link href="/concierge" className="underline-offset-2 hover:underline">
          Ask us to check dates and availability →
        </Link>
      </footer>
    </main>
  );
}
