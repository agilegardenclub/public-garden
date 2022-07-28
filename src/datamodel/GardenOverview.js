import { gardenerData } from './data/gardenerData';
import { varietalData } from './data/varietalData';
import { PlantingHistory } from './PlantingHistory';
import { familyData } from './data/familyData';
import { getGardenID, getGardenInfo, getGardenYears, getTotalPlantings } from './GardenInfo';

/* Processes raw data for use by GardenOverviewCard. */
export class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(gardenName) {
    this.gardeners = gardenerData;
    this.varietals = varietalData;
    this.gardenID = getGardenID(gardenName);
    this.gardenInfo = getGardenInfo(this.gardenID);
    this.plantingHistory = new PlantingHistory({ gardenName, varietalData, familyData });
  }

  age() {
    return this.plantingHistory.years().length;
  }

  climateVictoryGarden() {
    return !!this.gardenInfo.climateVictoryGarden;
  }

  currentYear() {
    return this.plantingHistory.years().sort().reverse()[0];
  }

  currentSize() {
    return this.gardenInfo.size;
  }

  currentBeds() {
    return this.plantingHistory.bedIDs().length;
  }

  gardenYears() {
    return getGardenYears(this.gardenID);
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
    const varietalIDs = this.gardenInfo.history[0].varietalIDs;
    return varietalIDs.map(id => getVarietalName(id));
  }

  currentGardenerIDs() {
    return this.gardenInfo.gardeners.map(gardener => gardener.gardenerID);
  }

  gardenerRole(gardenerID) {
    const gardenerInfo = this.gardenInfo.gardeners.find(info => info.gardenerID === gardenerID);
    return gardenerInfo.role;
  }

  gardenerName(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? gardenerInfo.name : 'Gardener Not Found';

  }

  varietalOutcomes(varietalID) {
    return this.gardenInfo.varietalOutcomes.find(element => element.varietalID === varietalID);
  }

  isMasterGardener(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? !!gardenerInfo.masterGardener : 'Gardener Not Found';
  }

  name() {
    return this.gardenInfo.name;
  }

  pictures() {
    return this.gardenInfo.pictures;
  }

  lastUpdate() {
    return this.gardenInfo.lastUpdate;
  }

  totalPlantings() {
    return getTotalPlantings(this.gardenID);
  }
}
