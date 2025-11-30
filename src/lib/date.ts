const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function formatMonthName(month: number): string {
  return MONTH_NAMES[month - 1] ?? "";
}

export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startDay = startDate.getUTCDate();
  const endDay = endDate.getUTCDate();
  const startMonth = MONTH_NAMES[startDate.getUTCMonth()];
  const endMonth = MONTH_NAMES[endDate.getUTCMonth()];

  if (startDate.getUTCMonth() === endDate.getUTCMonth()) {
    return `${startDay}–${endDay} ${startMonth}`;
  }

  return `${startDay} ${startMonth} – ${endDay} ${endMonth}`;
}

export function calculateNights(start: string, end: string): number {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}
