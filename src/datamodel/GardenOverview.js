import { gardenerData } from './data/gardenerData';
import { varietalData } from './data/varietalData';
import { PlantingHistory } from './PlantingHistory';
import { familyData } from './data/familyData';
import { gardenData } from './data/gardenData';

/* Processes raw data for use by GardenOverviewCard. */
export class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(gardenName) {
    this.gardeners = gardenerData;
    this.varietals = varietalData;
    this.garden = gardenData.find(garden => garden.name === gardenName);
    this.plantingHistory = new PlantingHistory({ gardenName, varietalData, familyData });
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

  currentVarietalIDs() {
    return ['varietal-01'];
  }

  getFamily(varietalID) {
    const varietalInfo = this.varietals.find(element => element.id === varietalID);
    return varietalInfo ? varietalInfo.family : 'Family Not Found';
  }

  currentVarietalNames() {
    const getVarietalName = (id) => {
      const varietalInfo = this.varietals.find(element => element.id === id);
      return varietalInfo ? varietalInfo.name : 'Varietal Not Found';
    };
    const varietalIDs = this.garden.history[0].varietalIDs;
    return varietalIDs.map(id => getVarietalName(id));
  }

  currentGardenerIDs() {
    return this.garden.gardeners.map(gardener => gardener.gardenerID);
  }

  gardenerRole(gardenerID) {
    const gardenerInfo = this.garden.gardeners.find(info => info.gardenerID === gardenerID);
    return gardenerInfo.role;
  }

  gardenerName(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? gardenerInfo.name : 'Gardener Not Found';

  }

  varietalOutcomes(varietalID) {
    return this.garden.varietalOutcomes.find(element => element.varietalID === varietalID);
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
