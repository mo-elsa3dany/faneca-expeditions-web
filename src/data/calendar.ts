import type { MonthBlock } from "@/lib/types";

export const YEAR_CALENDAR: MonthBlock[] = [
  {
    year: 2026,
    month: 6,
    departures: [
      {
        id: "2026-06-maldives-blue-manta",
        tripId: "blue-manta-maldives",
        title: "Central atolls, channel drifts and early southwest monsoon conditions.",
        region: "Maldives",
        boatName: "Blue Manta",
        startDate: "2026-06-15",
        endDate: "2026-06-22",
        fromPrice: 2990,
        tags: ["Sharks", "Channel Drifts"]
      },
      {
        id: "2026-06-red-sea-emperor-elite",
        tripId: "emperor-elite-red-sea",
        title: "Offshore reefs with blue water crossings and classic Red Sea walls.",
        region: "Red Sea",
        boatName: "Emperor Elite",
        startDate: "2026-06-08",
        endDate: "2026-06-15",
        fromPrice: 1890,
        tags: ["Sharks", "Wrecks"]
      }
    ]
  },
  {
    year: 2026,
    month: 7,
    departures: [
      {
        id: "2026-07-indonesia-raja",
        tripId: "indo-explorer-raja",
        title: "Longer Raja Ampat route with time on key reefs and seamounts.",
        region: "Indonesia",
        boatName: "Indo Explorer",
        startDate: "2026-07-10",
        endDate: "2026-07-20",
        fromPrice: 3450,
        tags: ["Photography", "Coral"]
      }
    ]
  }
  // Add more months later as needed
];
