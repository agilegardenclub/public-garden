import { getGardenIDs } from './ChapterInfo';
import { getGardenInfo } from './GardenInfo';

// How to account for years?

/*
 Build the following data structure:
   * List of chapterID objects.
   * Each chapterID object has a list of gardenID objects.
   * Each gardenID object has a list of cropID objects.
   * Each cropID object has a list of varietyID objects.
   * Each varietyID object has a field for each outcome type whose value is an outcomeData object.
   * Each outcomeData object has fields 1...5, whose value is the count of those outcomes across all plantings.

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
                       appearance: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                       flavor: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                       germination: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                       resistance: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                       yield: { 1: 12, 2: 34, 3: 45, 4: 0, 5: 2 },
                     },
                  ],
               },
            ],
         }
     ]
   }
 ]
*/

export function getOutcomeData({ chapterID }) {
  const gardenIDs = getGardenIDs(chapterID);
  for (const gardenID of gardenIDs) {
    console.log(gardenID);
    const plantings = getGardenInfo(gardenID).plantingData;
    console.log(plantings);
    const outcomes = [];
    for (const planting of plantings) {
      if (planting.outcomes) {
        outcomes.push(planting.outcomes);
      }
    }
    console.log(outcomes);
  }
}
