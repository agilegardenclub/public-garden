/* Provide functions to organize planting data for display in various ways */
import { plantFamilyCommonName, plantFamilyID, plantName } from './PlantInfo';

export class PlantingHistory {
  // eslint-disable-next-line no-shadow
  constructor({ gardenData, plantData, plantFamilyData }) {
    this.gardenData = gardenData;
    this.plantData = plantData;
    this.plantFamilyData = plantFamilyData;
    this.plantings = this._extractPlantings();
  }

  /** A temporary method to 'normalize' the history data structure. */
  _extractPlantings() {
    const history = this.gardenData.history;
    const bedPlantings = history.map(entry => entry.plantingData)
      .flat();
    return bedPlantings.map(entry => entry.bedPlantings)
      .flat();
  }

  /**
   * Returns the data organized as follows:
   * [
   *  {
   *    bed: '01',
   *    yearData: [
   *      { year: '2020',
   *        bedData: [
   *         { plant data }
   *        ],
   *      }
   *    ]
   *  }
   *  ]
   */
  bedHistoryData() {
    // Extract the bedIDs in sorted order.
    const bedIDs = [...new Set(this.plantings.map(entry => entry.bedID))].sort();
    return bedIDs.map(bedID => this._bedYearData(bedID));
  }

  _bedYearData(bedID) {
    // Find all the years associated with the plants in bedID.
    const bedIDPlantings = this.plantings.filter(planting => planting.bedID === bedID);
    const years = [...new Set(bedIDPlantings.map(planting => planting.year))].sort();
    // return years.map(year => ({ bedID, yearData: [year, 'year data'] }));
    return {
      bedID,
      yearData: years.map(year => ({ year, bedData: this._bedYearPlantings(bedID, year) })),
    };
  }

  _bedYearPlantings(bedID, year) {
    return this.plantings.filter((planting => (planting.bedID === bedID) && planting.year === year));
  }

  bedIDs() {
    return [...new Set(this.plantings.map(entry => entry.bedID))].sort();
  }

  /**
   * Returns an array formatted to support the Plant nested dropdown:
   * ```
   *   [
   *     { type: 'nested', label: 'Legume' items: [ { type: 'item', label: 'Bean (Soldier)', eventKey: 'plant-117' }]} ],
   *     { type: 'nested', label: 'Nightshade' items: [ { type: 'item', label: 'Tomato (Sun Gold)', eventKey: 'plant-114' }]} ],
   *   ]
   * ```
   * Of course the items: field will have an array containing multiple items.
   */
  plantDropdownMenuItems() {
    // Start by building a map from plantFamily IDs to their plantIDs:
    // { "plantfamily-01": [ "plant-01", "plant-02" ], "plantfamily-02": [ "plant-03", "plant-o4" ] }
    const familyMap = {};
    this.plantings.forEach(planting => {
      const familyID = plantFamilyID(planting.plantID);
      if (!familyMap[familyID]) {
        familyMap[familyID] = [];
      }
      familyMap[familyID].push(planting.plantID);
    });
    // Now build the array of dropdown data objects, one per field in the familyMap
    const plantFamilyIDs = Object.keys(familyMap);
    const dropdownItems = [];
    plantFamilyIDs.forEach(familyID => {
      // Remove duplicate plantIDs if any.
      const plantIDs = [...new Set(familyMap[familyID])];
      const item = { type: 'nested' };
      item.label = plantFamilyCommonName(plantIDs[0]);
      item.items = plantIDs.map(plantID => ({ type: 'item', label: plantName(plantID), eventKey: plantID }));
      dropdownItems.push(item);
    });
    return dropdownItems;
  }

  /**
   * Returns the data organized as follows:
   * [
   *  {
   *    plantID: 'plant-01',
   *    yearData: [
   *      { year: '2020',
   *        plantData: [
   *         { plant data }
   *        ],
   *      }
   *    ]
   *  }
   *  ]
   */
  plantHistoryData() {
    // Extract the plantIDs
    const plantIDs = [...new Set(this.plantings.map(entry => entry.plantID))];
    return plantIDs.map(plantID => this._plantYearData(plantID));
  }

  _plantYearData(plantID) {
    // Find all the years associated with the plantID
    const plantIDPlantings = this.plantings.filter(planting => planting.plantID === plantID);
    const years = [...new Set(plantIDPlantings.map(planting => planting.year))].sort();
    return {
      plantID,
      yearData: years.map(year => ({ year, plantData: this._plantYearPlantings(plantID, year) })),
    };
  }

  _plantYearPlantings(plantID, year) {
    return this.plantings.filter((planting => (planting.plantID === plantID) && planting.year === year));
  }
}
