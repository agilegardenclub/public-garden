/* Provide functions to organize planting data for display in various ways */
import { getCropID, getFamilyCommonName, getFamilyData, getVarietyName, getVarietyNameShort, getVendorID } from './VarietyInfo';
import { gardenData } from './data/gardenData';
import { weekOfYear } from './WeekOfYear';
import { varietyHasOutcomeCounts } from './OutcomeDataInfo';

export class PlantingHistory {
  // eslint-disable-next-line no-shadow
  constructor({ gardenName, varietyData, familyData }) {
    this.gardenName = gardenName;
    this.gardenData = gardenData.find(garden => garden.name === gardenName);
    this.varietyData = varietyData;
    this.familyData = familyData;
    // this.plantings = this._extractPlantings();
    this.plantings = this.gardenData.plantingData;
    this.allPlantings = gardenData.map(garden => garden.plantingData).flat();
    this._addObservationData();
    this._addNotificationData();
  }

  getPlantingYears() {
    const allYears = this.allPlantings.map(planting => planting.year);
    return [...new Set(allYears)];
  }

  _addNotificationData() {
    // first, give every planting instance a notifications field
    this.plantings.forEach(planting => {
      planting.notifications = [];
    });
    // create list of all the observations from other gardens.
    const otherObservations = [];
    gardenData.forEach(garden => {
      // eslint-disable-next-line no-lonely-if
      if ((garden.name !== this.gardenName) && garden.observationData) {
        otherObservations.push(...garden.observationData);
      }
    });
    // add a notification to a planting if it matches an observation
    this.plantings.forEach(planting => {
      const matchingObservations = otherObservations.filter(observation => this._matchingCrop(observation.plantingID, planting.plantingID));
      matchingObservations.forEach(observation => { observation.weekOfYear = weekOfYear(observation.observationDate); });
      matchingObservations.forEach(observation => { observation.varietyID = this._getVarietyID(observation.plantingID); });
      planting.notifications.push(...matchingObservations);
      // if (matchingObservations.length > 0) {
      //   console.log('matching observations', matchingObservations);
      // }
    });
  }

  _getVarietyID(plantingID) {
    const plantingInfo = this.allPlantings.find(planting => planting.plantingID === plantingID);
    return plantingInfo.varietyID;
  }

  /**
   * Returns true if plantingID_1 and plantingID_2 refer to the same crop (i.e. "Tomato").
   */
  _matchingCrop(plantingID_1, plantingID_2) {
    const planting_1 = this.allPlantings.find(planting => plantingID_1 === planting.plantingID);
    const plantNameShort_1 = getVarietyNameShort(planting_1.varietyID);
    const planting_2 = this.allPlantings.find(planting => plantingID_2 === planting.plantingID);
    const plantNameShort_2 = getVarietyNameShort(planting_2.varietyID);
    // if (plantNameShort_1 === plantNameShort_2) {
    //   console.log(plantingID_1, plantingID_2);
    // }
    return (plantNameShort_1 === plantNameShort_2);
  }

  _addObservationData() {
    // first, just give every planting instance an observations field, initialized to an empty array.
    this.plantings.forEach(planting => { planting.observations = []; });
    // now, add each observation to the appropriate planting.
    if (this.gardenData.observationData) {
      this.gardenData.observationData.forEach(observation => {
        // First, update the observation with a weekOfYear field.
        observation.weekOfYear = weekOfYear(observation.observationDate);
        // Now, attach it to its associated planting.
        const obPlanting = this.plantings.find(planting => (planting.plantingID === observation.plantingID));
        if (obPlanting) {
          obPlanting.observations.push(observation);
        } else {
          // eslint-disable-next-line no-console
          console.log(`Warning: no planting (${observation.plantingID}) found for observation ${observation.observationID}`);
        }
      });
    }
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
    // Find all the years associated with the varietys in bedID.
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

  years() {
    return [...new Set(this.plantings.map(entry => entry.year))].sort().reverse();
  }

  varietyIDs() {
    return [...new Set(this.plantings.map(entry => entry.varietyID))];
  }

  familyIDs() {
    return [...new Set(this.varietyIDs().map(varietyID => getFamilyData(varietyID).id))];
  }

  vendorIDs() {
    return [...new Set(this.varietyIDs().map(varietyID => getVendorID(varietyID)))];
  }

  cropIDs() {
    return [...new Set(this.varietyIDs().map(varietyID => getCropID(varietyID)))];
  }

  /**
   * Returns an array formatted to support the Variety nested dropdown:
   * ```
   *   [
   *     { type: 'nested', label: 'Legume' items: [ { type: 'item', label: 'Bean (Soldier)', eventKey: 'plant-117' }]} ],
   *     { type: 'nested', label: 'Nightshade' items: [ { type: 'item', label: 'Tomato (Sun Gold)', eventKey: 'plant-114' }]} ],
   *   ]
   * ```
   * Of course the items: field will have an array containing multiple items.
   */
  varietyDropdownMenuItems(outcomeDataSet) {
    // Start by building a map from family IDs to their varietyIDs:
    // { "family-01": [ "variety-01", "variety-02" ], "family-02": [ "variety-03", "variety-o4" ] }
    const familyMap = {};
    // Ugh this is ugly. if outcomeData supplied, only generate menu items with outcome data.
    if (outcomeDataSet) {
      this.plantings.forEach(planting => {
        if (varietyHasOutcomeCounts(planting.varietyID, outcomeDataSet)) {
          const familyID = getFamilyData(planting.varietyID).id;
          if (!familyMap[familyID]) {
            familyMap[familyID] = [];
          }
          familyMap[familyID].push(planting.varietyID);
        }
      });
    } else { // otherwise generate the menu items for all varieties.
      this.plantings.forEach(planting => {
        const familyID = getFamilyData(planting.varietyID).id;
        if (!familyMap[familyID]) {
          familyMap[familyID] = [];
        }
        familyMap[familyID].push(planting.varietyID);
      });
    }

    // Now build the array of dropdown data objects, one per field in the familyMap
    const familyIDs = Object.keys(familyMap);
    const dropdownItems = [];
    familyIDs.forEach(familyID => {
      // Remove duplicate varietyIDs if any.
      const varietyIDs = [...new Set(familyMap[familyID])];
      const item = { type: 'nested' };
      item.label = getFamilyCommonName(varietyIDs[0]);
      item.items = varietyIDs.map(varietyID => ({ type: 'item', label: getVarietyName(varietyID), eventKey: varietyID }));
      item.items = item.items.sort((a, b) => a.label.localeCompare(b.label));
      dropdownItems.push(item);
    });
    return dropdownItems;
  }

  /**
   * Returns the data organized as follows:
   * [
   *  {
   *    varietyID: 'variety-01',
   *    yearData: [
   *      { year: '2020',
   *        varietyData: [
   *         { variety data }
   *        ],
   *      }
   *    ]
   *  }
   *  ]
   */
  varietyHistoryData() {
    // Extract the varietyIDs
    const varietyIDs = [...new Set(this.plantings.map(entry => entry.varietyID))];
    return varietyIDs.map(varietyID => this._varietyYearData(varietyID));
  }

  _varietyYearData(varietyID) {
    // Find all the years associated with the varietyID
    const varietyIDPlantings = this.plantings.filter(planting => planting.varietyID === varietyID);
    const years = [...new Set(varietyIDPlantings.map(planting => planting.year))].sort();
    return {
      varietyID,
      yearData: years.map(year => ({ year, varietyData: this._varietyYearPlantings(varietyID, year) })),
    };
  }

  _varietyYearPlantings(varietyID, year) {
    return this.plantings.filter((planting => (planting.varietyID === varietyID) && planting.year === year));
  }

  /**
   * Returns the data organized as follows:
   * [
   *  {
   *    year: 2020
   *    bedData: [
   *      { bed: '01',
   *        plantingData: [
   *         { planting data }
   *        ],
   *      }
   *    ]
   *  }
   *  ]
   *
   *  Provide either the year, bedID, varietyID, cropID, or familyID to filter the results appropriately.
   */
  historyData({ year, bedID, varietyID, familyID, vendorID, cropID }) {
    // Begin by filtering the plantingData by one of year, bedID, or varietyID.
    // console.log('in historyData', year, bedID, varietyID);
    let filteredPlantings;
    if (year) {
      filteredPlantings = this.plantings.filter(planting => planting.year === year);
    } else if (bedID) {
      filteredPlantings = this.plantings.filter(planting => planting.bedID === bedID);
    } else if (varietyID) {
      filteredPlantings = this.plantings.filter(planting => planting.varietyID === varietyID);
    } else if (familyID) {
      filteredPlantings = this.plantings.filter(planting => getFamilyData(planting.varietyID).id === familyID);
    } else if (vendorID) {
      filteredPlantings = this.plantings.filter(planting => getVendorID(planting.varietyID) === vendorID);
    } else if (cropID) {
      filteredPlantings = this.plantings.filter(planting => getCropID(planting.varietyID) === cropID);
    }
    // Construct the return value
    const years = [...new Set(filteredPlantings.map(planting => planting.year))].sort();
    return years.map(theYear => ({ year: theYear, bedData: this._bedData(filteredPlantings, theYear) }));
  }

  _bedData(plantingData, year) {
    // First, filter data to just the plantings for the specified year.
    const yearData = plantingData.filter(planting => planting.year === year);
    // Now, get the bedIDs in sorted order from this set of plantings.
    const bedIDs = [...new Set(yearData.map(planting => planting.bedID))].sort();
    // Now, create the list of bed planting data.
    return bedIDs.map(bedID => ({ bedID, plantingData: yearData.filter(planting => planting.bedID === bedID) }));
  }
}
