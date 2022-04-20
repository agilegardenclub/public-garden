/* Provide functions to organize planting data for display in various ways */
import { plantFamilyCommonName, plantFamilyID, plantName, plantNameShort } from './PlantInfo';
import { gardenData } from './data/gardenData';
import { weekOfYear } from './WeekOfYear';

export class PlantingHistory {
  // eslint-disable-next-line no-shadow
  constructor({ gardenName, plantData, plantFamilyData }) {
    this.gardenName = gardenName;
    this.gardenData = gardenData.find(garden => garden.name === gardenName);
    this.plantData = plantData;
    this.plantFamilyData = plantFamilyData;
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
      const matchingObservations = otherObservations.filter(observation => this._matchingPlant(observation.plantingID, planting.plantingID));
      matchingObservations.forEach(observation => { observation.weekOfYear = weekOfYear(observation.observationDate); });
      matchingObservations.forEach(observation => { observation.plantID = this._getPlantID(observation.plantingID); });
      planting.notifications.push(...matchingObservations);
      // if (matchingObservations.length > 0) {
      //   console.log('matching observations', matchingObservations);
      // }
    });
  }

  _getPlantID(plantingID) {
    const plantingInfo = this.allPlantings.find(planting => planting.plantingID === plantingID);
    return plantingInfo.plantID;
  }

  /**
   * Returns true if plantingID_1 and plantingID_2 refer to the same plant (i.e. "Tomato").
   */
  _matchingPlant(plantingID_1, plantingID_2) {
    const planting_1 = this.allPlantings.find(planting => plantingID_1 === planting.plantingID);
    const plantNameShort_1 = plantNameShort(planting_1.plantID);
    const planting_2 = this.allPlantings.find(planting => plantingID_2 === planting.plantingID);
    const plantNameShort_2 = plantNameShort(planting_2.plantID);
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

  years() {
    return [...new Set(this.plantings.map(entry => entry.year))].sort().reverse();
  }

  plantFamilyIDs() {
    const plantIDs = [...new Set(this.plantings.map(entry => entry.plantID))];
    return [...new Set(plantIDs.map(plantID => plantFamilyID(plantID)))];
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
   *  Provide either the year, bedID, plantID, or plantFamilyID to filter the results appropriately.
   */
  historyData({ year, bedID, plantID, familyID }) {
    // Begin by filtering the plantingData by one of year, bedID, or plantID.
    // console.log('in historyData', year, bedID, plantID);
    let filteredPlantings;
    if (year) {
      filteredPlantings = this.plantings.filter(planting => planting.year === year);
    } else if (bedID) {
      filteredPlantings = this.plantings.filter(planting => planting.bedID === bedID);
    } else if (plantID) {
      filteredPlantings = this.plantings.filter(planting => planting.plantID === plantID);
    } else if (familyID) {
      filteredPlantings = this.plantings.filter(planting => plantFamilyID(planting.plantID) === familyID);
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
