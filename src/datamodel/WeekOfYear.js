/**
 * Return a number between 1 and 48 representing the week of the year associated with date.
 * Caveats:
 *   * dates from a prior year are normalized to week 1.
 *   * dates from a future year are normalized to week 48
 *   * all months have exactly four weeks. The fourth week is from days 22 to the end of the month.
 */
export function weekOfYear(dateString, year) {
  const date = new Date(dateString);
  // any date from previous year becomes week 1.
  if (date.getFullYear() < year) {
    return 1;
  }
  // any date from future year becomes week 48.
  if (date.getFullYear() > year) {
    return 48;
  }
  const dayOfMonth = date.getDate();
  let weekOfMonth;
  if (dayOfMonth > 22) {
    weekOfMonth = 4;
  } else if (dayOfMonth > 14) {
    weekOfMonth = 3;
  } else if (dayOfMonth > 7) {
    weekOfMonth = 2;
  } else {
    weekOfMonth = 1;
  }
  return (date.getMonth() * 4) + weekOfMonth;
}

// Informal tests.
// console.log('1/1/2021', weekOfYear('1/1/2021', 2021));
// console.log('1/30/2021', weekOfYear('1/30/2021', 2021));
// console.log('12/31/2021', weekOfYear('12/31/2021', 2021));
// console.log('12/31/2021 (2020)', weekOfYear('12/31/2021', 2020));
// console.log('12/31/2021 (2022)', weekOfYear('12/31/2021', 2022));
