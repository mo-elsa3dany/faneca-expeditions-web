import { TRIPS } from "@/data/trips";
import { getTopTrips } from "@/lib/quiz-score";
import type { QuizAnswers } from "@/lib/quiz-types";

export async function GET() {
  const mock: QuizAnswers = {
    experienceLevel: "intermediate",
    preferredRegions: ["Maldives", "Indonesia"],
    budgetBand: "mid-luxury",
    travelWindow: "2026-jun-aug",
    tripVibes: ["hardcore-diving"],
    focusTags: ["sharks"],
    groupType: "friends"
  };

  const result = getTopTrips(TRIPS, mock, 5);

  return Response.json({
    mockInput: mock,
    recommendedTrips: result
  });
}
