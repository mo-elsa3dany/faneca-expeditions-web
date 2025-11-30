"use client";

import type { MonthBlock as MonthBlockType } from "@/lib/types";
import { calculateNights, formatDateRange, formatMonthName } from "@/lib/date";
import Link from "next/link";

interface Props {
  block: MonthBlockType;
}

export function MonthBlock({ block }: Props) {
  const { year, month, departures } = block;
  const monthLabel = formatMonthName(month);

  const regions = Array.from(new Set(departures.map((d) => d.region))).join(", ");

  const countLabel =
    departures.length === 1
      ? "1 curated departure"
      : `${departures.length} curated departures`;

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      <header className="space-y-1">
        <h3 className="text-base font-semibold tracking-tight">
          {monthLabel} {year}
        </h3>
        <p className="text-xs text-slate-600">
          Curated liveaboard departures for this month.
        </p>
        <p className="text-[11px] uppercase tracking-wide text-slate-500">
          {countLabel}
          {regions && ` · ${regions}`}
        </p>
      </header>

      <div className="mt-2 space-y-3">
        {departures.map((dep) => {
          const nights = calculateNights(dep.startDate, dep.endDate);
          const hasPrice = dep.fromPrice != null;

          return (
            <article
              key={dep.id}
              className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 transition hover:border-slate-300 hover:bg-white"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-xs font-medium text-slate-700">
                    {dep.region} {dep.boatName ? `· ${dep.boatName}` : ""}
                  </div>
                  <div className="text-xs text-slate-600">
                    {formatDateRange(dep.startDate, dep.endDate)} · {nights} nights
                    {hasPrice && (
                      <>
                        {" "}
                        · from ${dep.fromPrice!.toLocaleString()}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {dep.title && (
                <p className="mt-1 text-xs text-slate-700">
                  {dep.title}
                </p>
              )}

              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {dep.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-2 py-[2px] text-[10px] uppercase tracking-wide text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/trips/${dep.tripId}`}
                  className="text-[11px] font-medium underline-offset-2 hover:underline"
                >
                  View details
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="mt-1">
        <Link
          href="/quiz"
          className="text-[11px] text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline"
        >
          Not sure which month fits best? Start the liveaboard matchmaker →
        </Link>
      </footer>
    </section>
  );
}
