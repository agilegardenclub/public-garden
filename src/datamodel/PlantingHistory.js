/* Provide functions to organize planting data for display in various ways */
import { getCropID, getFamilyCommonName, getFamilyData, getVarietalName, getVarietalNameShort, getVendorID } from './VarietalInfo';
import { gardenData } from './data/gardenData';
import { weekOfYear } from './WeekOfYear';

export class PlantingHistory {
  // eslint-disable-next-line no-shadow
  constructor({ gardenName, varietalData, familyData }) {
    this.gardenName = gardenName;
    this.gardenData = gardenData.find(garden => garden.name === gardenName);
    this.varietalData = varietalData;
    this.familyData = familyData;
    // this.plantings = this._extractPlantings();
    this.plantings = this.gardenData.plantingData;
    this.allPlantings = gardenData.map(garden => garden.plantingData).flat();
    this._addObservationData();
    this._addNotificationData();
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
      matchingObservations.forEach(observation => { observation.varietalID = this._getVarietalID(observation.plantingID); });
      planting.notifications.push(...matchingObservations);
      // if (matchingObservations.length > 0) {
      //   console.log('matching observations', matchingObservations);
      // }
    });
  }

  _getVarietalID(plantingID) {
    const plantingInfo = this.allPlantings.find(planting => planting.plantingID === plantingID);
    return plantingInfo.varietalID;
  }

  /**
   * Returns true if plantingID_1 and plantingID_2 refer to the same crop (i.e. "Tomato").
   */
  _matchingCrop(plantingID_1, plantingID_2) {
    const planting_1 = this.allPlantings.find(planting => plantingID_1 === planting.plantingID);
    const plantNameShort_1 = getVarietalNameShort(planting_1.varietalID);
    const planting_2 = this.allPlantings.find(planting => plantingID_2 === planting.plantingID);
    const plantNameShort_2 = getVarietalNameShort(planting_2.varietalID);
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
          console.log(`Warning: no planting found for observation: ${observation.observationID}`);
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
    // Find all the years associated with the varietals in bedID.
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

  varietalIDs() {
    return [...new Set(this.plantings.map(entry => entry.varietalID))];
  }

  familyIDs() {
    return [...new Set(this.varietalIDs().map(varietalID => getFamilyData(varietalID).id))];
  }

  vendorIDs() {
    return [...new Set(this.varietalIDs().map(varietalID => getVendorID(varietalID)))];
  }

  cropIDs() {
    return [...new Set(this.varietalIDs().map(varietalID => getCropID(varietalID)))];
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
  varietalDropdownMenuItems() {
    // Start by building a map from family IDs to their varietalIDs:
    // { "family-01": [ "varietal-01", "varietal-02" ], "family-02": [ "varietal-03", "varietal-o4" ] }
    const familyMap = {};
    this.plantings.forEach(planting => {
      const familyID = getFamilyData(planting.varietalID).familyID;
      if (!familyMap[familyID]) {
        familyMap[familyID] = [];
      }
      familyMap[familyID].push(planting.varietalID);
    });
    // Now build the array of dropdown data objects, one per field in the familyMap
    const familyIDs = Object.keys(familyMap);
    const dropdownItems = [];
    familyIDs.forEach(familyID => {
      // Remove duplicate varietalIDs if any.
      const varietalIDs = [...new Set(familyMap[familyID])];
      const item = { type: 'nested' };
      item.label = getFamilyCommonName(varietalIDs[0]);
      item.items = varietalIDs.map(varietalID => ({ type: 'item', label: getVarietalName(varietalID), eventKey: varietalID }));
      item.items = item.items.sort((a, b) => a.label.localeCompare(b.label));
      dropdownItems.push(item);
    });
    return dropdownItems;
  }

  /**
   * Returns the data organized as follows:
   * [
   *  {
   *    varietalID: 'varietal-01',
   *    yearData: [
   *      { year: '2020',
   *        varietalData: [
   *         { varietal data }
   *        ],
   *      }
   *    ]
   *  }
   *  ]
   */
  varietalHistoryData() {
    // Extract the varietalIDs
    const varietalIDs = [...new Set(this.plantings.map(entry => entry.varietalID))];
    return varietalIDs.map(varietalID => this._varietalYearData(varietalID));
  }

  _varietalYearData(varietalID) {
    // Find all the years associated with the varietalID
    const varietalIDPlantings = this.plantings.filter(planting => planting.varietalID === varietalID);
    const years = [...new Set(varietalIDPlantings.map(planting => planting.year))].sort();
    return {
      varietalID,
      yearData: years.map(year => ({ year, varietalData: this._varietalYearPlantings(varietalID, year) })),
    };
  }

  _varietalYearPlantings(varietalID, year) {
    return this.plantings.filter((planting => (planting.varietalID === varietalID) && planting.year === year));
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
   *  Provide either the year, bedID, varietalID, cropID, or familyID to filter the results appropriately.
   */
  historyData({ year, bedID, varietalID, familyID, vendorID, cropID }) {
    // Begin by filtering the plantingData by one of year, bedID, or varietalID.
    // console.log('in historyData', year, bedID, varietalID);
    let filteredPlantings;
    if (year) {
      filteredPlantings = this.plantings.filter(planting => planting.year === year);
    } else if (bedID) {
      filteredPlantings = this.plantings.filter(planting => planting.bedID === bedID);
    } else if (varietalID) {
      filteredPlantings = this.plantings.filter(planting => planting.varietalID === varietalID);
    } else if (familyID) {
      filteredPlantings = this.plantings.filter(planting => getFamilyData(planting.varietalID).id === familyID);
    } else if (vendorID) {
      filteredPlantings = this.plantings.filter(planting => getVendorID(planting.varietalID) === vendorID);
    } else if (cropID) {
      filteredPlantings = this.plantings.filter(planting => getCropID(planting.varietalID) === cropID);
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
