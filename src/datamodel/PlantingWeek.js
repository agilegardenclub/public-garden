import { weekOfYear } from './WeekOfYear';

/**
 * Updates plantingData with fields indicating the weeks associated with planting dates:
 *  * startWeek, transplantWeek, firstHarvestWeek, endWeek
 *  * Uses WeekOfYear to get the number between 1 and 48 associated with each date.
 *  * Throws error if startDate and endDate do not exist.
 *  * For the future: should check to see if any date is less than the "previous" one:
 *  *   startDate <= transplantDate <= firstHarvestDate <= endDate
 *  *   note that transplantDate and firstHarvestDate are optional.
 *  * Use Year to ensure that prior year dates become week 1 and future year dates become week 48.
 * @param plantingData
 * @param year
 */
export function addPlantingWeeks(plantingData, year) {
  if ((!plantingData.startDate) || (!plantingData.endDate)) {
    throw new Error(`Missing startDate or endDate in ${JSON.stringify(plantingData)}`);
  }
  plantingData.startWeek = weekOfYear(plantingData.startDate, year);
  plantingData.endWeek = weekOfYear(plantingData.endDate, year);
  if (plantingData.transplantDate) {
    plantingData.transplantWeek = weekOfYear(plantingData.transplantDate);
  }
  if (plantingData.firstHarvestDate) {
    plantingData.firstHarvestWeek = weekOfYear(plantingData.firstHarvestDate);
  }
}
