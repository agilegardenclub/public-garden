import { getGardenIDs } from './ChapterInfo';
import { getCropIDs, getVarietyIDs } from './GardenInfo';

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

function makeVarietyOutcomeData(gardenID, years, varietyID) {
  return { varietyID, years, gardenID };
}

function makeCropOutcomeData(gardenID, years, cropID) {
  return { cropID, varietyIDs: getVarietyIDs(gardenID, cropID).map(varietyID => makeVarietyOutcomeData(gardenID, years, varietyID)) };
}

function makeGardenOutcomeData(gardenID, years) {
  return { gardenID: gardenID, cropIDs: getCropIDs(gardenID).map(cropID => makeCropOutcomeData(gardenID, years, cropID)) };
}

export function getOutcomeData({ chapterID, years }) {
  console.log(chapterID, years);
  const outcomeData = { chapterID };
  outcomeData.gardenIDs = getGardenIDs(chapterID).map(gardenID => makeGardenOutcomeData(gardenID, years));
  console.log(outcomeData);
  return outcomeData;
}
