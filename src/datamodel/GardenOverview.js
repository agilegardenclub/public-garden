import { gardenerData } from './data/gardenerData';
import { plantData } from './data/plantData';
import { PlantingHistory } from './PlantingHistory';
import { plantFamilyData } from './data/plantFamilyData';
import { gardenData } from './data/gardenData';

/* Processes raw data for use by GardenOverviewCard. */
export class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(gardenName) {
    this.gardeners = gardenerData;
    this.plants = plantData;
    this.garden = gardenData.find(garden => garden.name === gardenName);
    this.plantingHistory = new PlantingHistory({ gardenName, plantData, plantFamilyData });
  }

  age() {
    return this.plantingHistory.years().length;
  }

  climateVictoryGarden() {
    return !!this.garden.climateVictoryGarden;
  }

  currentYear() {
    return this.plantingHistory.years().sort().reverse()[0];
  }

  currentSize() {
    return this.garden.size;
  }

  currentBeds() {
    return this.plantingHistory.bedIDs().length;
  }

  currentPlantIDs() {
    return ['plant-01'];
  }

  plantFamily(plantID) {
    const plantInfo = this.plants.find(element => element.id === plantID);
    return plantInfo ? plantInfo.family : 'Plant Family Not Found';
  }

  currentPlantNames() {
    const getPlantName = (id) => {
      const plantInfo = this.plants.find(element => element.id === id);
      return plantInfo ? plantInfo.name : 'Plant Not Found';
    };
    const plantIDs = this.garden.history[0].plantIDs;
    return plantIDs.map(id => getPlantName(id));
  }

  currentGardenerIDs() {
    return this.garden.gardenerIDs;
  }

  gardenerName(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? gardenerInfo.name : 'Gardener Not Found';

  }

  plantOutcomes(plantID) {
    return this.garden.plantOutcomes.find(element => element.plantID === plantID);
  }

  isMasterGardener(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? !!gardenerInfo.masterGardener : 'Gardener Not Found';
  }

  name() {
    return this.garden.name;
  }

  pictures() {
    return this.garden.pictures;
  }

  lastUpdate() {
    return this.garden.lastUpdate;
  }
}
