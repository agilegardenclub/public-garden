/** Return a number between 1 and 12 representing the month of the year. */
function getMonthNumber(date) {
  return date.getMonth() + 1;
}

/** Return a number between 1 and 4 representing the week within the month. */
function getWeekNumber(date) {
  const dayOfMonth = date.getDate();
  if (dayOfMonth > 21) {
    return 4;
  }
  if (dayOfMonth > 14) {
    return 3;
  }
  if (dayOfMonth > 7) {
    return 2;
  }
  return 1;
}

/**
 * Create a data structure that answers the question: is this bed occupied for a given cell in the grid?
 * Start by passing in the plant (start) date and the harvest (end) date.
 * This creates an array with 48 entries corresponding to 12 months, each month having four weeks.
 * Note that the week 4 of each month is from day 22 to the end of the month. That makes things way easier.
 * We precompute this array when the BedOccupancyMap is created so that lookups are fast and don't require recomputation.
 */
export class BedOccupancyMap {
  constructor(startDate, endDate) {
    const startMonthNum = getMonthNumber(startDate);
    const startWeekNum = getWeekNumber(startDate);
    const endMonthNum = getMonthNumber(endDate);
    const endWeekNum = getWeekNumber(endDate);
    // Note that the first four values are unused since they correspond to month = 0.
    this.occupancyMap = Array(52).fill(false);
    for (let i = ((startMonthNum * 4) + startWeekNum); i <= ((endMonthNum * 4) + endWeekNum); i++) {
      this.occupancyMap[i] = true;
    }
  }

  /** Return true if the bed is occupied during this month and week. */
  isOccupied(monthNum, weekNum) {
    return this.occupancyMap[(monthNum * 4) + weekNum];
  }
}
