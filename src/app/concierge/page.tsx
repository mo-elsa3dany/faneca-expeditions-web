export const metadata = {
  title: "Private liveaboard planning | Faneca Expeditions",
  description:
    "Boutique, one-to-one liveaboard planning. We shortlist and liaise with operators so you don’t have to."
};

export default function ConciergePage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Private liveaboard planning service
        </h1>
        <p className="text-sm text-slate-600">
          This is a simple, boutique planning service. Tell us roughly when, where and how you like
          to dive and we&apos;ll shortlist liveaboards, check availability and reply personally.
        </p>
      </header>

      <section className="space-y-4 rounded-xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-700 shadow-sm">
        <p>
          For now, just drop us a line with your rough dates, regions you&apos;re considering,
          budget per diver and who you&apos;re travelling with. We&apos;ll come back with options
          and next steps.
        </p>
        <p>
          Later this will be wired to a paid concierge checkout and our tiny CRM. For now it&apos;s
          a straightforward, human workflow.
        </p>
      </section>
    </main>
  );
}
