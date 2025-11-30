"use client";

import { useState } from "react";
import type { QuizAnswers } from "@/lib/quiz-types";
import type { Trip } from "@/lib/types";

interface LeadCaptureProps {
  answers: QuizAnswers;
  matches: Trip[];
}

export function LeadCapture({ answers, matches }: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || null,
          quizAnswers: answers,
          matchedTrips: matches.map((m) => ({
            id: m.id,
            slug: m.slug,
            name: m.name,
            region: m.region,
            country: m.country,
          })),
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-900">
        <p className="font-medium">
          Thank you — your details are in.
        </p>
        <p className="mt-1 text-xs">
          We&apos;ll review your answers and get back to you with availability and next steps.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm">
      <h2 className="text-sm font-semibold tracking-tight">
        Want us to sanity-check availability for these matches?
      </h2>
      <p className="mt-1 text-xs text-slate-600">
        Leave your email and we&apos;ll look at real departure dates and current offers for your top
        matches.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div className="space-y-1">
          <label className="text-[11px] font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-medium text-slate-700">
            Name (optional)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400"
          />
        </div>

        {status === "error" && (
          <p className="text-[11px] text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send my details"}
        </button>
      </form>
    </section>
  );
}
