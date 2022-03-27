/**
 * Takes the current week (1-48) and returns the appropriate background class for the planting timeline:
 *   First, compute the state:
 *   GrowingInGreenHouse:
 *     IF usedGreenhouse AND transplantWeek AND (currWeek >= startWeek) AND (currWeek < transplantWeek)
 *     IF usedGreenhouse AND no transplantWeek AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
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
 *   Find the plantFamilyName (i.e. "allium"). Then map the state to the background class:
 *     * GrowinginGreenhouse => .bg-pf-allium-light
 *     * GrowinginBed => .bg-pf-allium-dark
 *     * HarvestinginGreenhouse => .bg-pf-allium-light-harvest
 *     * HarvestinginBed => .bg-pf-allium-dark-harvest
 *     * If none of the above => ''
 */
export function plantingBackgroundClass(currWeek, plantingData) {
  console.log(currWeek, plantingData);
  let state = '';
  const { usedGreenhouse, startWeek, transplantWeek, firstHarvestWeek, endWeek } = plantingData;
  if (usedGreenhouse && transplantWeek && (currWeek >= startWeek) && (currWeek < transplantWeek)) {
    // In the greenhouse, prior to transplanting.
    state = 'GrowingInGreenhouse';
  } else if (usedGreenhouse && !transplantWeek && firstHarvestWeek && (currWeek >= startWeek) && (currWeek < firstHarvestWeek)) {
    // In the greenhouse, no transplant, prior to start of harvest.
    state = 'GrowingInGreenhouse';
  }

  console.log(state);
}
