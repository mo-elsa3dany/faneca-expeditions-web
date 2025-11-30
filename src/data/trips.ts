import type { Trip } from "@/lib/types";

export const TRIPS: Trip[] = [
  {
    id: "blue-manta-maldives",
    slug: "blue-manta-maldives",
    name: "Blue Manta – Central Maldives",
    region: "Maldives",
    country: "Maldives",
    lengthNights: 7,
    budgetBand: "mid-luxury",
    difficulty: "intermediate",
    vibes: ["hardcore-diving", "photography"],
    focusTags: ["sharks", "big-animals", "coral"],
    goodFor: ["couple", "friends", "solo"],
    bestSeasonMonths: [1, 2, 3, 4, 11, 12],
    heroImage: "/img/blue-manta.jpg",
    shortDescription:
      "Channel drifts, shark encounters and clear blue water in the central Maldivian atolls.",
    itinerarySummary:
      "Classic 7-night Maldivian route with channel dives, pinnacles and reef drifts, typically departing from Malé.",
    staticDepartures: [
      {
        id: "2026-06-blue-manta",
        startDate: "2026-06-15",
        endDate: "2026-06-22",
        fromPrice: 2990
      },
      {
        id: "2026-11-blue-manta",
        startDate: "2026-11-05",
        endDate: "2026-11-12",
        fromPrice: 3190
      }
    ]
  },
  {
    id: "emperor-elite-red-sea",
    slug: "emperor-elite-red-sea",
    name: "Emperor Elite – Brothers, Daedalus & Elphinstone",
    region: "Red Sea",
    country: "Egypt",
    lengthNights: 7,
    budgetBand: "mid",
    difficulty: "advanced",
    vibes: ["hardcore-diving", "social"],
    focusTags: ["sharks", "wrecks", "coral"],
    goodFor: ["friends", "club"],
    bestSeasonMonths: [4, 5, 6, 9, 10],
    heroImage: "/img/emperor-elite.jpg",
    shortDescription:
      "Offshore reefs, pelagics and classic wall diving on one of the Red Sea's signature routes.",
    itinerarySummary:
      "7-night itinerary covering Brothers, Daedalus and Elphinstone with early starts and blue water crossings.",
    staticDepartures: [
      {
        id: "2026-06-emperor-elite",
        startDate: "2026-06-08",
        endDate: "2026-06-15",
        fromPrice: 1890
      }
    ]
  },
  {
    id: "indo-explorer-raja",
    slug: "indo-explorer-raja",
    name: "Indo Explorer – Raja Ampat Highlights",
    region: "Indonesia",
    country: "Indonesia",
    lengthNights: 10,
    budgetBand: "luxury",
    difficulty: "intermediate",
    vibes: ["luxury", "photography", "relaxed"],
    focusTags: ["coral", "macro", "balanced"],
    goodFor: ["couple", "friends"],
    bestSeasonMonths: [10, 11, 12, 1, 2, 3],
    heroImage: "/img/indo-explorer.jpg",
    shortDescription:
      "Longer Raja Ampat itinerary through Misool and Dampier Strait with time to slow down and dive key sites properly.",
    itinerarySummary:
      "10-night route focusing on Misool and Dampier Strait with flexible dive planning for photographers.",
    staticDepartures: [
      {
        id: "2026-07-indo-explorer",
        startDate: "2026-07-10",
        endDate: "2026-07-20",
        fromPrice: 3450
      }
    ]
  }
];
