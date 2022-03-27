# Plan Section To Do

## Design thoughts

* Need a special Documentation box for explaining the plant background colors and how they related to families.

* Next step for Planting timeline.
  * Create entry for a plant:
    - plantID
    - startDate
    - transplantDate
    - harvestDate: {estimated: <date>, actual: <date>}
    - endDate
    - startGreenhouse
    - bedID
    - observations
    - outcomes (add germination)

* Add lightened colors to theme to illustrate greenhouse and harvest intervals.
* Then show file to Jenna, request edits. 
* Don't make a link when vendorURL is missing.

* To Do from 3/23 
  - Some dates are for 2022. Confirm.
  - Need flavor outcome data.
  - Need a lighter and a darker color for palette:
    - In greenhouse
    - In garden, growing
    - In garden, harvesting
    - Must get these intervals from date data. 
    - Could have tooltips or popups to indicate this.
    - Or just two colors, with labels inside? 
  - Handle dates that go outside of year. 
  - Note that location (greenhouse, garden) and "phase" (growing, harvesting) are orthogonal. 
  - Maybe this: https://www.magicpattern.design/tools/css-backgrounds

* To Do from 3/24 
  * Create light and dark harvest patterns for all colors. 
  * Update planGrid.js to pick the right classname to add. 
  * Retrieve planting data and lay it out correctly:  location (greenhouse, garden) + state (growing, harvesting).

# Planting Cell Background Coloring Algorithm.

* There are four possible plant states, each represented by a CSS class that changes the background. 
* For example, for allium, there is:
  - .bg-pf-allium-light           // growing in a greenhouse
  - .bg-pf-allium-dark            // growing in a bed
  - .bg-pf-allium-light-harvest   // harvesting in greenhouse
  - .bg-pf-allium-dark-harvest    // harvesting in a bed
  - (default background)          // none of the above

* We have four dates:
  - startDate (required)
  - transplantDate (optional)
  - firstHarvestDate (optional)
  - endDate (required)
and one boolean:
  - usedGreenhouse

So, what is the mapping from a month and week number to a background class:
  let currWeek = Convert month and week number to "canonical week" (i.e. 1 to 48).
  let startWeek, transplantWeek, firstHarvestWeek, and endWeek = Convert date to canonical week
  GrowingInGreenHouse:
    IF usedGreenhouse AND transplantWeek AND (currWeek >= startWeek) AND (currWeek < transplantWeek)
    IF usedGreenhouse AND no transplantWeek AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
  GrowingInBed:
    IF not usedGreenhouse AND (currWeek >= startWeek) AND (currWeek < firstHarvestWeek)
    IF usedGreenhouse AND (currWeek >= transplantWeek) AND (currWeek < firstHarvestWeek) 
  HarvestingInGreenHouse:
    IF usedGreenhouse AND no transplantWeek AND (currWeek >= firstHarvestWeek) AND (currWeek <= endWeek)
  HarvestingInBed:
    IF usedGreenhouse AND transplantWeek AND (currWeek >= firstHarvestDate) AND (currWeek <= endWeek)
    IF not usedGreenhouse AND (currWeek >= firstHarvestDate) AND (currWeek <= endWeek)

Procedure:
1. if any date is from a prior year, then change it to Jan 1. If any date from future year, change to Dec. 31.
2. populate plantingData object with startWeek, transplantWeek, firstHarvestWeek, and endWeek.
3. check that startWeek and endWeek exist. transplantWeek and firstHarvestWeek could be false or 0.
4. check that all non-zero weeks are in ascending order.
