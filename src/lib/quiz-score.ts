import type { Trip } from "./types";
import type { QuizAnswers } from "./quiz-types";

// -----------------------------------------
// BUDGET adjacency helper
// -----------------------------------------

const order: { [key: string]: number } = {
  budget: 1,
  mid: 2,
  "mid-luxury": 3,
  luxury: 4
};

export function isAdjacentBudgetBand(a: string, b: string): boolean {
  return Math.abs(order[a] - order[b]) === 1;
}

// -----------------------------------------
// Difficulty scoring
// -----------------------------------------

export function difficultyScore(
  trip: Trip["difficulty"],
  level: QuizAnswers["experienceLevel"]
): number {
  if (trip === "beginner" && level === "beginner") return 3;
  if (trip === "intermediate" && level === "intermediate") return 3;
  if (trip === "advanced" && level === "advanced") return 3;

  // mixed group: soft match
  if (level === "mixed") return 2;

  // one level off
  return 1;
}

// -----------------------------------------
// Season scoring based on travel window
// -----------------------------------------

const windows = {
  "2026-jun-aug": [6, 7, 8],
  "2026-sep-nov": [9, 10, 11],
  "2026-dec-2027-feb": [12, 1, 2],
  "2027-mar-may": [3, 4, 5]
};

export function isTripInTravelWindow(
  bestSeasonMonths: number[],
  window: QuizAnswers["travelWindow"]
): boolean {
  if (window === "flexible") return true;

  const months = windows[window];
  return bestSeasonMonths.some((m) => months.includes(m));
}

// -----------------------------------------
// Main scoring function
// -----------------------------------------

export function scoreTrip(trip: Trip, answers: QuizAnswers): number {
  let score = 0;

  // Region
  if (
    answers.preferredRegions.length > 0 &&
    answers.preferredRegions.includes(trip.region)
  ) {
    score += 4;
  }

  // Budget
  if (trip.budgetBand === answers.budgetBand) {
    score += 3;
  } else if (isAdjacentBudgetBand(trip.budgetBand, answers.budgetBand)) {
    score += 1;
  }

  // Difficulty
  score += difficultyScore(trip.difficulty, answers.experienceLevel);

  // Season
  if (isTripInTravelWindow(trip.bestSeasonMonths, answers.travelWindow)) {
    score += 2;
  }

  // Vibes (max +4)
  const vibeMatches = trip.vibes.filter((v) => answers.tripVibes.includes(v));
  score += Math.min(vibeMatches.length * 2, 4);

  // Focus tags (max +6)
  const tagMatches = trip.focusTags.filter((t) => answers.focusTags.includes(t));
  score += Math.min(tagMatches.length * 2, 6);

  // Group type
  if (trip.goodFor.includes(answers.groupType)) {
    score += 2;
  }

  return score;
}

// -----------------------------------------
// Return top trips
// -----------------------------------------

export function getTopTrips(
  trips: Trip[],
  answers: QuizAnswers,
  limit = 5
): Trip[] {
  return trips
    .map((t) => ({
      trip: t,
      score: scoreTrip(t, answers)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.trip);
}
