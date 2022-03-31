/* Provide functions to organize planting data for display in various ways */
export class PlantingHistory {
  // eslint-disable-next-line no-shadow
  constructor({ gardenData, plantData, plantFamilyData }) {
    this.gardenData = gardenData;
    this.plantData = plantData;
    this.plantFamilyData = plantFamilyData;
    console.log('Planting History');
    this.plantings = this._extractPlantings();
    console.log(this.plantings);
  }

  /** A temporary method to 'normalize' the history data structure. */
  _extractPlantings() {
    const history = this.gardenData.history;
    const bedPlantings = history.map(entry => entry.plantingData).flat();
    return bedPlantings.map(entry => entry.bedPlantings).flat();
  }
}
