import _ from 'lodash';
import { getGardenIDs } from './ChapterInfo';
import { getCropIDs, getGardenChapterInfo, getPlantingsByVarietyAndYear, getVarietyIDs } from './GardenInfo';
import { weekOfYear } from './WeekOfYear';

/*
 Build the following "outcomeDataSet":
   * List of chapterID objects.
   * Each chapterID object has a list of gardenID objects.
   * Each gardenID object has a list of cropID objects.
   * Each cropID object has a list of varietyID objects.
   * Each varietyID object has a list of outcomeYear objects.
   * Each outcomeYear object has a "year" field indicating the year, and an outcomeCount object.
   * Each outcomeCount object has fields 1...5, whose value is the count of those outcomes across all plantings for that year, variety, and garden.

 Example:
 [
   { chapterID: <chapterID>
     gardenIDs:
       [
         { gardenID: <gardenID>,
           cropIDs:
             [
               { cropID: <cropID>,
                 varietyIDs:
                   [
                     { varietyID: <varietyID>,
                       outcomeYears: [
                         {
                           year: 2021,
                           outcomeCount: {
                                           appearance: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                                           flavor: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                                           germination: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                                           resistance: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                                           yield: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                                         },
                           timelineCount: {
                                            startDate: { 1: 0, 2: 0, ... 52: 0 },
                                            transplantDate: { 1: 0, 2: 0, ... 52: 0 },
                                            firstHarvestDate: { 1: 0, 2: 0, ... 52: 0 },
                                            endDate: { 1: 0, 2: 0, ... 52: 0 },
                                          },
                         },
                       ],
                     },
                  ],
               },
            ],
         }
     ]
   }
 ]
*/

function buildOutcomeCounts(outcomes) {
  const counts = {
    appearance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    flavor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    germination: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    resistance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    yield: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  };
  for (const outcome of outcomes) {
    if (outcome.appearance) {
      counts.appearance[outcome.appearance] += 1;
    }
    if (outcome.flavor) {
      counts.flavor[outcome.flavor] += 1;
    }
    if (outcome.germination) {
      counts.germination[outcome.germination] += 1;
    }
    if (outcome.resistance) {
      counts.resistance[outcome.resistance] += 1;
    }
    if (outcome.yield) {
      counts.yield[outcome.yield] += 1;
    }
  }
  return counts;
}

function buildTimelineCounts(timelines) {
  const timelineCounts = { startDate: {}, transplantDate: {}, firstHarvestDate: {}, endDate: {} };
  const updateTimelineCounts = (timeline) => {
    const startDateWeek = timeline.startDate && weekOfYear(timeline.startDate);
    if (startDateWeek) {
      if (!timelineCounts.startDate[startDateWeek]) {
        timelineCounts.startDate[startDateWeek] = 0;
      }
      timelineCounts.startDate[startDateWeek] += 1;
    }
    const transplantDateWeek = timeline.transplantDate && weekOfYear(timeline.transplantDate);
    if (transplantDateWeek) {
      if (!timelineCounts.transplantDate[transplantDateWeek]) {
        timelineCounts.transplantDate[transplantDateWeek] = 0;
      }
      timelineCounts.transplantDate[transplantDateWeek] += 1;
    }
    const firstHarvestDateWeek = timeline.firstHarvestDate && weekOfYear(timeline.firstHarvestDate);
    if (firstHarvestDateWeek) {
      if (!timelineCounts.firstHarvestDate[firstHarvestDateWeek]) {
        timelineCounts.firstHarvestDate[firstHarvestDateWeek] = 0;
      }
      timelineCounts.firstHarvestDate[firstHarvestDateWeek] += 1;
    }
    const endDateWeek = timeline.endDate && weekOfYear(timeline.endDate);
    if (endDateWeek) {
      if (!timelineCounts.endDate[endDateWeek]) {
        timelineCounts.endDate[endDateWeek] = 0;
      }
      timelineCounts.endDate[endDateWeek] += 1;
    }
  };
  timelines.map(timeline => updateTimelineCounts(timeline));
  return timelineCounts;
}

function buildOutcomeYear(varietyID, gardenID, year) {
  const plantings = getPlantingsByVarietyAndYear(gardenID, varietyID, year);
  const outcomes = plantings.map(planting => planting.outcomes);
  const timelines = plantings.map(planting => ({ startDate: planting.startDate, transplantDate: planting.transplantDate, firstHarvestDate: planting.firstHarvestDate, endDate: planting.endDate, plantingID: planting.plantingID }));
  return { year, outcomeCount: buildOutcomeCounts(outcomes), timelineCount: buildTimelineCounts(timelines) };
}

function buildVarietyOutcomeYearsDataSet(gardenID, years, varietyID) {
  return { varietyID, outcomeYears: years.map(year => buildOutcomeYear(varietyID, gardenID, year)) };
}

function buildCropOutcomeDataSet(gardenID, years, cropID) {
  return { cropID, varietyIDs: getVarietyIDs(gardenID, cropID).map(varietyID => buildVarietyOutcomeYearsDataSet(gardenID, years, varietyID)) };
}

function buildGardenOutcomeDataSet(gardenID, years) {
  return { gardenID: gardenID, cropIDs: getCropIDs(gardenID).map(cropID => buildCropOutcomeDataSet(gardenID, years, cropID)) };
}

function buildOutcomeDataSet({ chapterID, years }) {
  const outcomeData = { chapterID };
  outcomeData.gardenIDs = getGardenIDs(chapterID).map(gardenID => buildGardenOutcomeDataSet(gardenID, years));
  return [outcomeData];
}

function outcomeCountReducer(memo, outcomeCount) {
  return {
    appearance: {
      1: outcomeCount.appearance[1] + memo.appearance[1],
      2: outcomeCount.appearance[2] + memo.appearance[2],
      3: outcomeCount.appearance[3] + memo.appearance[3],
      4: outcomeCount.appearance[4] + memo.appearance[4],
      5: outcomeCount.appearance[5] + memo.appearance[5],
    },
    flavor: {
      1: outcomeCount.flavor[1] + memo.flavor[1],
      2: outcomeCount.flavor[2] + memo.flavor[2],
      3: outcomeCount.flavor[3] + memo.flavor[3],
      4: outcomeCount.flavor[4] + memo.flavor[4],
      5: outcomeCount.flavor[5] + memo.flavor[5],
    },
    germination: {
      1: outcomeCount.germination[1] + memo.germination[1],
      2: outcomeCount.germination[2] + memo.germination[2],
      3: outcomeCount.germination[3] + memo.germination[3],
      4: outcomeCount.germination[4] + memo.germination[4],
      5: outcomeCount.germination[5] + memo.germination[5],
    },
    resistance: {
      1: outcomeCount.resistance[1] + memo.resistance[1],
      2: outcomeCount.resistance[2] + memo.resistance[2],
      3: outcomeCount.resistance[3] + memo.resistance[3],
      4: outcomeCount.resistance[4] + memo.resistance[4],
      5: outcomeCount.resistance[5] + memo.resistance[5],
    },
    yield: {
      1: outcomeCount.yield[1] + memo.yield[1],
      2: outcomeCount.yield[2] + memo.yield[2],
      3: outcomeCount.yield[3] + memo.yield[3],
      4: outcomeCount.yield[4] + memo.yield[4],
      5: outcomeCount.yield[5] + memo.yield[5],
    },
  };
}

function combineOutcomeCounts(outcomeCounts) {
  return outcomeCounts.reduce(
    outcomeCountReducer,
    {
      appearance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      flavor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      germination: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      resistance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      yield: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
  );
}

const currentOutcomeData = buildOutcomeDataSet({ chapterID: 'chapter-01', years: [2019, 2020, 2021, 2022] });

export function getOutcomeDataSet(chapterID, years) {
  return buildOutcomeDataSet({ chapterID, years });
}

export function getGardenOutcomeCounts(gardenID) {
  const chapterID = getGardenChapterInfo(gardenID).id;
  const chapterOutcomeInfo = currentOutcomeData.find(info => info.chapterID === chapterID);
  const gardenOutcomeInfo = chapterOutcomeInfo.gardenIDs.find(info => info.gardenID === gardenID);
  const outcomeCounts = [];
  for (const cropIDinfo of gardenOutcomeInfo.cropIDs) {
    for (const varietyIDinfo of cropIDinfo.varietyIDs) {
      for (const outcomeYearInfo of varietyIDinfo.outcomeYears) {
        outcomeCounts.push(outcomeYearInfo.outcomeCount);
      }
    }
  }
  return combineOutcomeCounts(outcomeCounts);
}

export function getChapterOutcomeCounts(chapterID) {
  const chapterOutcomeInfo = currentOutcomeData.find(info => info.chapterID === chapterID);
  const outcomeCounts = [];
  for (const gardenIDinfo of chapterOutcomeInfo.gardenIDs) {
    for (const cropIDinfo of gardenIDinfo.cropIDs) {
      for (const varietyIDinfo of cropIDinfo.varietyIDs) {
        for (const outcomeYearInfo of varietyIDinfo.outcomeYears) {
          outcomeCounts.push(outcomeYearInfo.outcomeCount);
        }
      }
    }
  }
  return combineOutcomeCounts(outcomeCounts);
}

export function varietyHasOutcomeCounts(varietyID, outcomeDataSet) {
  for (const chapterOutcomeInfo of outcomeDataSet) {
    for (const gardenOutcomeInfo of chapterOutcomeInfo.gardenIDs) {
      for (const cropIDInfo of gardenOutcomeInfo.cropIDs) {
        for (const varietyIDInfo of cropIDInfo.varietyIDs) {
          if (varietyIDInfo.varietyID === varietyID) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

export function getVarietyOutcomeCounts(varietyID, years, outcomeDataSet, gardenIDs) {
  const outcomeCounts = [];
  for (const chapterOutcomeInfo of outcomeDataSet) {
    for (const gardenOutcomeInfo of chapterOutcomeInfo.gardenIDs) {
      if (gardenIDs.includes(gardenOutcomeInfo.gardenID)) {
        for (const cropIDInfo of gardenOutcomeInfo.cropIDs) {
          for (const varietyIDInfo of cropIDInfo.varietyIDs) {
            if (varietyIDInfo.varietyID === varietyID) {
              for (const outcomeYearInfo of varietyIDInfo.outcomeYears) {
                if (years.includes(outcomeYearInfo.year)) {
                  outcomeCounts.push(outcomeYearInfo.outcomeCount);
                }
              }
            }
          }
        }
      }
    }
  }
  return combineOutcomeCounts(outcomeCounts);
}

export function getCropOutcomeCounts(cropID, years, outcomeDataSet, gardenIDs) {
  const outcomeCounts = [];
  for (const chapterOutcomeInfo of outcomeDataSet) {
    for (const gardenOutcomeInfo of chapterOutcomeInfo.gardenIDs) {
      if (gardenIDs.includes(gardenOutcomeInfo.gardenID)) {
        for (const cropIDInfo of gardenOutcomeInfo.cropIDs) {
          if (cropIDInfo.cropID === cropID) {
            for (const varietyIDInfo of cropIDInfo.varietyIDs) {
              for (const outcomeYearInfo of varietyIDInfo.outcomeYears) {
                if (years.includes(outcomeYearInfo.year)) {
                  outcomeCounts.push(outcomeYearInfo.outcomeCount);
                }
              }
            }
          }
        }
      }
    }
  }
  return combineOutcomeCounts(outcomeCounts);
}

export function hasOutcomes(outcomeData) {
  return (
    (outcomeData.appearance && outcomeData.appearance > 0) ||
    (outcomeData.flavor && outcomeData.flavor > 0) ||
    (outcomeData.germination && outcomeData.germination > 0) ||
    (outcomeData.resistance && outcomeData.resistance > 0) ||
    (outcomeData.yield && outcomeData.yield > 0)
  );
}

export function hasOutcomeCounts(outcomeCounts) {
  return !_.isEqual(outcomeCounts,
    {
      appearance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      flavor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      germination: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      resistance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      yield: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    });
}
