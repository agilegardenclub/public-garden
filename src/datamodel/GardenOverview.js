import { gardenData } from './data/gardenData';
import { gardenerData } from './data/gardenerData';
import { plantData } from './data/plantData';

/* Processes raw data for use by GardenOverviewCard. */
class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(garden, gardeners, plants) {
    this.garden = garden;
    this.gardeners = gardeners;
    this.plants = plants;
  }

  age() {
    return this.garden.history.length;
  }

  climateVictoryGarden() {
    return !!this.garden.climateVictoryGarden;
  }

  currentYear() {
    return this.garden.history[0].year;
  }

  currentSize() {
    return this.garden.history[0].size;
  }

  currentBeds() {
    return this.garden.history[0].beds;
  }

  currentPlantIDs() {
    return this.garden.history[0].plantIDs;
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
    return this.garden.history[0].gardenerIDs;
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

export const gardenOverview = new GardenOverview(gardenData[0], gardenerData, plantData);
