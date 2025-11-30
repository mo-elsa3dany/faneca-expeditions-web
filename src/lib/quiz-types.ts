import type {
  BudgetBand,
  Difficulty,
  TripVibe,
  FocusTag,
  GroupType
} from "./types";

export type ExperienceLevel = "beginner" | "intermediate" | "advanced" | "mixed";

export type TravelWindow =
  | "flexible"
  | "2026-jun-aug"
  | "2026-sep-nov"
  | "2026-dec-2027-feb"
  | "2027-mar-may";

export interface QuizAnswers {
  experienceLevel: ExperienceLevel;
  preferredRegions: string[]; // e.g. ["Maldives", "Indonesia"]
  budgetBand: BudgetBand;
  travelWindow: TravelWindow;
  tripVibes: TripVibe[];
  focusTags: FocusTag[];
  groupType: GroupType;
}
