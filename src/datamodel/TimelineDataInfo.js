import _ from 'lodash';

function updateField(weekCount1, weekCount2) {
  const merged = { ...weekCount1 };
  for (const field in weekCount2) {
    if (merged[field]) {
      merged[field] += weekCount2[field];
    } else {
      merged[field] = weekCount2[field];
    }
  }
  return merged;
}

function timelineCountReducer(memo, timelineCount) {
  return {
    startDate: updateField(memo.startDate, timelineCount.startDate),
    transplantDate: updateField(memo.transplantDate, timelineCount.transplantDate),
    firstHarvestDate: updateField(memo.firstHarvestDate, timelineCount.firstHarvestDate),
    endDate: updateField(memo.endDate, timelineCount.endDate),
  };
}

function combineTimelineCounts(timelineCounts) {
  return timelineCounts.reduce(
    timelineCountReducer,
    {
      startDate: {},
      transplantDate: {},
      firstHarvestDate: {},
      endDate: {},
    },
  );
}

export function getVarietyTimelineCounts(varietyID, years, outcomeDataSet, gardenIDs) {
  const timelineCounts = [];
  for (const chapterOutcomeInfo of outcomeDataSet) {
    for (const gardenOutcomeInfo of chapterOutcomeInfo.gardenIDs) {
      if (gardenIDs.includes(gardenOutcomeInfo.gardenID)) {
        for (const cropIDInfo of gardenOutcomeInfo.cropIDs) {
          for (const varietyIDInfo of cropIDInfo.varietyIDs) {
            if (varietyIDInfo.varietyID === varietyID) {
              for (const outcomeYearInfo of varietyIDInfo.outcomeYears) {
                if (years.includes(outcomeYearInfo.year)) {
                  timelineCounts.push(outcomeYearInfo.timelineCount);
                }
              }
            }
          }
        }
      }
    }
  }
  return combineTimelineCounts(timelineCounts);
}

export function hasTimelineCounts(timelineCounts) {
  return !_.isEqual(timelineCounts, { startDate: {}, transplantDate: {}, firstHarvestDate: {}, endDate: {} });
}
