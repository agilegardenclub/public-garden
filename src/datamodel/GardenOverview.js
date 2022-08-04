import { gardenerData } from './data/gardenerData';
import { varietyData } from './data/varietyData';
import { PlantingHistory } from './PlantingHistory';
import { familyData } from './data/familyData';
import { getGardenChapterInfo, getGardenID, getGardenInfo, getGardenYears, getTotalPlantings } from './GardenInfo';

/* Processes raw data for use by GardenOverviewCard. */
export class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(gardenName) {
    this.gardeners = gardenerData;
    this.varietys = varietyData;
    this.gardenID = getGardenID(gardenName);
    this.gardenInfo = getGardenInfo(this.gardenID);
    this.plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
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

  currentVarietyIDs() {
    return ['variety-01'];
  }

  getFamily(varietyID) {
    const varietyInfo = this.varietys.find(element => element.id === varietyID);
    return varietyInfo ? varietyInfo.family : 'Family Not Found';
  }

  currentVarietyNames() {
    const getVarietyName = (id) => {
      const varietyInfo = this.varietys.find(element => element.id === id);
      return varietyInfo ? varietyInfo.name : 'Variety Not Found';
    };
    const varietyIDs = this.gardenInfo.history[0].varietyIDs;
    return varietyIDs.map(id => getVarietyName(id));
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

  varietyOutcomes(varietyID) {
    return this.gardenInfo.varietyOutcomes.find(element => element.varietyID === varietyID);
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

  chapterName() {
    return getGardenChapterInfo(this.gardenID).name;
  }
}
