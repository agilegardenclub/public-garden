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
