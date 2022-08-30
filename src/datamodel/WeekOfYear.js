/**
 * Return a number between 1 and 48 representing the week of the year associated with date.
 * Year is optional. If not supplied, defaults to the year associated with dateString.
 * Caveats:
 *   * dates from a prior year are normalized to week 1.
 *   * dates from a future year are normalized to week 48
 *   * all months have exactly four weeks. The fourth week is from days 22 to the end of the month.
 */
export function weekOfYear(dateString, year) {
  const date = new Date(dateString);
  if (!year) {
    year = date.getFullYear();
  }
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

function getMonthString(monthNum) {
  const monthMap = {
    1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep',
    10: 'Oct', 11: 'Nov', 12: 'Dec',
  };
  return monthMap[monthNum];
}

function getFirstDay(weekOfMonthNum) {
  const startDay = { 1: 1, 2: 8, 3: 15, 4: 22 };
  return startDay[weekOfMonthNum];
}

function getLastDay(weekOfMonthNum, monthNum) {
  const lastDayMap = {
    1: 31, 2: 28, 3: 30, 4: 31, 5: 30, 6: 31, 7: 30, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31,
  };
  if (weekOfMonthNum === 1) {
    return 7;
  }
  if (weekOfMonthNum === 2) {
    return 14;
  }
  if (weekOfMonthNum === 3) {
    return 21;
  }
  return lastDayMap[monthNum];
}

export function weekToString(weekNum) {
  // WeekOfMonth is 1...4.
  const weekOfMonthNum = ((weekNum % 4) === 0) ? 4 : (weekNum % 4);
  // Month is 1...12.
  let monthNum = Math.round(weekNum / 4);
  if (weekOfMonthNum === 1) {
    monthNum += 1;
  }
  const month = getMonthString(monthNum);
  const firstDay = getFirstDay(weekOfMonthNum);
  const lastDay = getLastDay(weekOfMonthNum, monthNum);
  return `${month} ${firstDay}-${lastDay}`;
}

// Informal tests.
// for (let i = 1; i <= 48; i++) {
//   console.log(i, weekToString(i));
// }
