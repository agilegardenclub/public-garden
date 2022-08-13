import { getGardenIDs } from './ChapterInfo';
import { getCropIDs, getGardenChapterInfo, getPlantingsByVarietyAndYear, getVarietyIDs } from './GardenInfo';

/*
 Build the following outcome data structure:
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

function buildOutcomeYear(varietyID, gardenID, year) {
  const plantings = getPlantingsByVarietyAndYear(gardenID, varietyID, year);
  const outcomes = plantings.map(planting => planting.outcomes);
  return { year, outcomeCount: buildOutcomeCounts(outcomes) };
}

function buildVarietyOutcomeYearsData(gardenID, years, varietyID) {
  return { varietyID, outcomeYears: years.map(year => buildOutcomeYear(varietyID, gardenID, year)) };
}

function buildCropOutcomeData(gardenID, years, cropID) {
  return { cropID, varietyIDs: getVarietyIDs(gardenID, cropID).map(varietyID => buildVarietyOutcomeYearsData(gardenID, years, varietyID)) };
}

function buildGardenOutcomeData(gardenID, years) {
  return { gardenID: gardenID, cropIDs: getCropIDs(gardenID).map(cropID => buildCropOutcomeData(gardenID, years, cropID)) };
}

function buildOutcomeData({ chapterID, years }) {
  const outcomeData = { chapterID };
  outcomeData.gardenIDs = getGardenIDs(chapterID).map(gardenID => buildGardenOutcomeData(gardenID, years));
  return [outcomeData];
}

function outcomeReducer(memo, outcome) {
  return {
    appearance: {
      1: outcome.appearance[1] + memo.appearance[1],
      2: outcome.appearance[2] + memo.appearance[2],
      3: outcome.appearance[3] + memo.appearance[3],
      4: outcome.appearance[4] + memo.appearance[4],
      5: outcome.appearance[5] + memo.appearance[5],
    },
    flavor: {
      1: outcome.flavor[1] + memo.flavor[1],
      2: outcome.flavor[2] + memo.flavor[2],
      3: outcome.flavor[3] + memo.flavor[3],
      4: outcome.flavor[4] + memo.flavor[4],
      5: outcome.flavor[5] + memo.flavor[5],
    },
    germination: {
      1: outcome.germination[1] + memo.germination[1],
      2: outcome.germination[2] + memo.germination[2],
      3: outcome.germination[3] + memo.germination[3],
      4: outcome.germination[4] + memo.germination[4],
      5: outcome.germination[5] + memo.germination[5],
    },
    resistance: {
      1: outcome.resistance[1] + memo.resistance[1],
      2: outcome.resistance[2] + memo.resistance[2],
      3: outcome.resistance[3] + memo.resistance[3],
      4: outcome.resistance[4] + memo.resistance[4],
      5: outcome.resistance[5] + memo.resistance[5],
    },
    yield: {
      1: outcome.yield[1] + memo.yield[1],
      2: outcome.yield[2] + memo.yield[2],
      3: outcome.yield[3] + memo.yield[3],
      4: outcome.yield[4] + memo.yield[4],
      5: outcome.yield[5] + memo.yield[5],
    },
  };
}

function combineOutcomeData(outcomeData) {
  return outcomeData.reduce(
    outcomeReducer,
    {
      appearance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      flavor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      germination: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      resistance: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      yield: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
  );
}

const currentOutcomeData = buildOutcomeData({ chapterID: 'chapter-01', years: [2020, 2021] });

export function getGardenOutcomeData(gardenID) {
  const chapterID = getGardenChapterInfo(gardenID).id;
  const chapterOutcomeInfo = currentOutcomeData.find(info => info.chapterID === chapterID);
  const gardenOutcomeInfo = chapterOutcomeInfo.gardenIDs.find(info => info.gardenID === gardenID);
  const outcomeData = [];
  for (const cropIDinfo of gardenOutcomeInfo.cropIDs) {
    for (const varietyIDinfo of cropIDinfo.varietyIDs) {
      for (const outcomeYearInfo of varietyIDinfo.outcomeYears) {
        outcomeData.push(outcomeYearInfo.outcomeCount);
      }
    }
  }
  return combineOutcomeData(outcomeData);
}

export function getChapterOutcomeData(chapterID) {
  const chapterOutcomeInfo = currentOutcomeData.find(info => info.chapterID === chapterID);
  const outcomeData = [];
  for (const gardenIDinfo of chapterOutcomeInfo.gardenIDs) {
    for (const cropIDinfo of gardenIDinfo.cropIDs) {
      for (const varietyIDinfo of cropIDinfo.varietyIDs) {
        for (const outcomeYearInfo of varietyIDinfo.outcomeYears) {
          outcomeData.push(outcomeYearInfo.outcomeCount);
        }
      }
    }
  }
  return combineOutcomeData(outcomeData);
}
