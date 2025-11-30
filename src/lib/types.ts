export type BudgetBand = "budget" | "mid" | "mid-luxury" | "luxury";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type TripVibe =
  | "relaxed"
  | "hardcore-diving"
  | "luxury"
  | "social"
  | "photography";

export type FocusTag =
  | "sharks"
  | "big-animals"
  | "coral"
  | "macro"
  | "wrecks"
  | "balanced";

export type GroupType = "solo" | "couple" | "friends" | "club" | "family";

export interface TripStaticDeparture {
  id: string;
  startDate: string; // ISO yyyy-mm-dd
  endDate: string;   // ISO yyyy-mm-dd
  fromPrice?: number;
}

export interface Trip {
  id: string;
  slug: string;
  name: string;
  region: string;
  country?: string;
  lengthNights: number;
  budgetBand: BudgetBand;
  difficulty: Difficulty;
  vibes: TripVibe[];
  focusTags: FocusTag[];
  goodFor: GroupType[];
  bestSeasonMonths: number[]; // 1–12
  heroImage?: string;
  shortDescription: string;
  itinerarySummary: string;
  staticDepartures?: TripStaticDeparture[];
}

export interface MonthDepartureRef {
  id: string;
  tripId: string;
  title?: string;
  region: string;
  boatName?: string;
  startDate: string;
  endDate: string;
  fromPrice?: number;
  tags: string[];
}

export interface MonthBlock {
  year: number;
  month: number; // 1–12
  departures: MonthDepartureRef[];
}
