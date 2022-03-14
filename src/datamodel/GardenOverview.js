import { gardenData } from './gardenData';
import { gardenerData } from './gardenerData';
import { seedData } from './seedData';

/* Processes raw data for use by GardenOverviewCard. */
class GardenOverview {
  // eslint-disable-next-line no-shadow
  constructor(garden, gardeners, seeds) {
    this.garden = garden;
    this.gardeners = gardeners;
    this.seeds = seeds;
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

  currentSeedIDs() {
    return this.garden.history[0].seedIDs;
  }

  currentSeedNames() {
    const getSeedName = (id) => {
      const seedInfo = this.seeds.find(element => element.id === id);
      return seedInfo ? seedInfo.name : 'Seed Not Found';
    };
    const seedIDs = this.garden.history[0].seedIDs;
    return seedIDs.map(id => getSeedName(id));
  }

  currentGardenerIDs() {
    return this.garden.history[0].gardenerIDs;
  }

  gardenerName(gardenerID) {
    const gardenerInfo = this.gardeners.find(element => element.id === gardenerID);
    return gardenerInfo ? gardenerInfo.name : 'Gardener Not Found';

  }

  seedOutcomes(seedID) {
    return this.garden.seedOutcomes.find(element => element.seedID === seedID);
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

export const gardenOverview = new GardenOverview(gardenData[0], gardenerData, seedData);
