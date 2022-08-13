import { getGardenIDs } from './ChapterInfo';
import { getCropIDs, getPlantingsByVarietyAndYear, getVarietyIDs } from './GardenInfo';

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

export function buildOutcomeData({ chapterID, years }) {
  console.log(chapterID, years);
  const outcomeData = { chapterID };
  outcomeData.gardenIDs = getGardenIDs(chapterID).map(gardenID => buildGardenOutcomeData(gardenID, years));
  console.log(outcomeData);
  return outcomeData;
}
