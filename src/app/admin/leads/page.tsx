import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin · Leads | Faneca Expeditions",
};

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6 flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Collected leads
          </h1>
          <p className="text-xs text-slate-600">
            Leads generated from the matchmaker and concierge forms.
          </p>
        </div>
        <p className="text-[11px] text-slate-500">
          Total: {leads.length}
        </p>
      </header>

      <section className="space-y-4">
        {leads.length === 0 && (
          <p className="text-sm text-slate-600">
            No leads yet. Once visitors start completing the matchmaker and leaving their email,
            they&apos;ll appear here.
          </p>
        )}

        {leads.map((lead) => {
          let parsed: any = null;
          try {
            parsed = JSON.parse(lead.quizJson);
          } catch {
            parsed = null;
          }

          return (
            <article
              key={lead.id}
              className="rounded-xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <p className="font-medium text-slate-900">
                    {lead.email}
                  </p>
                  {lead.name && (
                    <p className="text-xs text-slate-600">
                      {lead.name}
                    </p>
                  )}
                </div>
                <p className="text-[11px] text-slate-500">
                  {new Date(lead.createdAt).toLocaleString()}
                </p>
              </div>

              {parsed && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-[11px] text-slate-600 underline-offset-2 hover:underline">
                    View quiz data
                  </summary>
                  <pre className="mt-2 max-h-64 overflow-auto rounded bg-slate-950/90 p-3 text-[11px] text-slate-100">
                    {JSON.stringify(parsed, null, 2)}
                  </pre>
                </details>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
