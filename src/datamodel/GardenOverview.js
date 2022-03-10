import { gardens } from './gardens';
import { gardeners } from './gardeners';
import { seeds } from './seeds';

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

  currentYear() {
    return this.garden.history[0].year;
  }

  currentSize() {
    return this.garden.history[0].size;
  }

  currentBeds() {
    return this.garden.history[0].beds;
  }

  currentSeedNames() {
    const getSeedName = (id) => {
      const seedInfo = this.seeds.find(element => element.id === id);
      return seedInfo ? seedInfo.name : 'Seed Not Found';
    };
    const seedIDs = this.garden.history[0].seedIDs;
    return seedIDs.map(id => getSeedName(id));
  }

  currentGardenerNames() {
    const getGardenerName = (id) => {
      const gardenerInfo = this.gardeners.find(element => element.id === id);
      return gardenerInfo ? gardenerInfo.name : 'Gardener Not Found';
    };
    const gardenerIDs = this.garden.history[0].gardenerIDs;
    return gardenerIDs.map(id => getGardenerName(id));
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

export const gardenOverview = new GardenOverview(gardens[0], gardeners, seeds);
