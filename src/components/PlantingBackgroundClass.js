import { getFamilyCommonName } from '../datamodel/VarietalInfo';

/**
 * Takes the current week (1-48) and returns the appropriate background class for the planting timeline:
 *   First, compute the state:
 *   GrowingInGreenHouse:
 *     IF usedGreenhouse AND transplantWeek AND (currWeek >= startWeek) AND (currWeek < transplantWeek)
 *     IF usedGreenhouse AND no transplantWeek AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
 *     IF usedGreenhouse AND no transplantWeek AND no firstHarvestWeek AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
 *   GrowingInBed:
 *     IF not usedGreenhouse AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
 *     IF usedGreenhouse AND (currWeek >= transplantWeek) AND (currWeek < firstHarvestWeek)
 *   HarvestingInGreenHouse:
 *     IF usedGreenhouse AND no transplantWeek AND (currWeek >= firstHarvestWeek) AND (currWeek <= endWeek)
 *   HarvestingInBed:
 *     IF usedGreenhouse AND transplantWeek AND (currWeek >= firstHarvestDate) AND (currWeek <= endWeek)
 *     IF not usedGreenhouse AND (currWeek >= firstHarvestDate) AND (currWeek <= endWeek)
 *
 *   Second, compute the background class:
 *   If currWeek falls outside of start and end week, return '';
 *   Find the familyName (i.e. "allium"). Then map the state to the background class:
 *     * GrowinginGreenhouse => .bg-pf-allium-light
 *     * GrowinginBed => .bg-pf-allium-dark
 *     * HarvestinginGreenhouse => .bg-pf-allium-light-harvest
 *     * HarvestinginBed => .bg-pf-allium-dark-harvest
 *     * If none of the above => .bg-danger
 */
export function plantingBackgroundClass(currWeek, plantingData) {
  let state = '';
  const { usedGreenhouse, startWeek, transplantWeek, firstHarvestWeek, endWeek } = plantingData;
  // return empty string for classname if currWeek falls outside of start and end week.
  if ((currWeek < startWeek) || (currWeek > endWeek)) {
    return '';
  }
  // Now currWeek is within start and end week of planting.
  if (usedGreenhouse && transplantWeek && (currWeek < transplantWeek)) {
    // In greenhouse, prior to transplanting.
    state = 'GrowingInGreenhouse-01';
  } else if (usedGreenhouse && !transplantWeek && firstHarvestWeek && (currWeek < firstHarvestWeek)) {
    // In greenhouse, no transplant, prior to start of harvest.
    state = 'GrowingInGreenhouse-02';
  } else if (usedGreenhouse && !transplantWeek && !firstHarvestWeek) {
    // In the greenhouse, no transplant, no firstHarvest
    state = 'GrowingInGreenhouse-03';
    // Move on to growing in the bed
  } else if (!usedGreenhouse && firstHarvestWeek && (currWeek < firstHarvestWeek)) {
    state = 'GrowingInBed-01';
  } else if (usedGreenhouse && transplantWeek && firstHarvestWeek && (currWeek >= transplantWeek) && (currWeek < firstHarvestWeek)) {
    state = 'GrowingInBed-02';
  } else if (usedGreenhouse && transplantWeek && !firstHarvestWeek && (currWeek >= transplantWeek) && (currWeek <= endWeek)) {
    state = 'GrowingInBed-03';
  } else if (!usedGreenhouse && !firstHarvestWeek) {
    state = 'GrowingInBed-04';
    // Move on to harvesting in greenhouse
  } else if (usedGreenhouse && !transplantWeek && firstHarvestWeek && (currWeek >= firstHarvestWeek)) {
    state = 'HarvestingInGreenhouse-01';
    // Move on to harvesting in bed
  } else if (usedGreenhouse && transplantWeek && firstHarvestWeek && (currWeek >= firstHarvestWeek)) {
    state = 'HarvestingInBed-01';
  } else if (usedGreenhouse && transplantWeek && firstHarvestWeek && (currWeek >= firstHarvestWeek)) {
    state = 'HarvestingInBed-02';
  } else if (!usedGreenhouse && firstHarvestWeek && (currWeek >= firstHarvestWeek)) {
    state = 'HarvestingInBed-13';
  } else {
    state = 'Unknown-10';
  }
  // console.log('Plant State', plantingData.varietalID, state, currWeek, plantingData);
  const familyName = getFamilyCommonName(plantingData.varietalID).toLowerCase();
  if (state.startsWith('GrowingInGreenhouse')) {
    return `bg-pf-${familyName}-light`;
  }
  if (state.startsWith('GrowingInBed')) {
    return `bg-pf-${familyName}-dark`;
  }
  if (state.startsWith('HarvestingInGreenhouse')) {
    return `bg-pf-${familyName}-light-harvest`;
  }
  if (state.startsWith('HarvestingInBed')) {
    return `bg-pf-${familyName}-dark-harvest`;
  }
  return 'bg-danger';
}
