import { YEAR_CALENDAR } from "@/data/calendar";
import { MonthBlock } from "@/components/calendar/MonthBlock";

export const metadata = {
  title: "Liveaboard departures calendar | Faneca Expeditions",
  description:
    "Curated liveaboard departures from mid-2026 onwards. Boutique, handpicked itineraries across Maldives, Red Sea, Indonesia and more."
};

export default function CalendarPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Curated liveaboard departures from June 2026 onwards
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          This year view highlights a small number of handpicked departures each month across our
          partner fleet. Use it as a planning overview, then dive deeper into individual trips or
          start the matchmaker if you are not sure what fits you best.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {YEAR_CALENDAR.map((block) => (
          <MonthBlock key={`${block.year}-${block.month}`} block={block} />
        ))}
      </section>
    </main>
  );
}
