import { gardenerData } from './data/gardenerData';

/* Processes raw data for use by GardenOverviewCard. */
export class Gardener {
  // eslint-disable-next-line no-shadow
  constructor(gardenerID) {
    this.gardenerInfo = gardenerData.find(element => element.id === gardenerID);
    if (!this.gardenerInfo) {
      // eslint-disable-next-line no-console
      console.error(`No gardener with ID: ${gardenerID}`);
    }
  }

  initials() {
    return this.gardenerInfo.initials;
  }

  bgColor() {
    return this.gardenerInfo.bgColor;
  }

  isMasterGardener() {
    return !!this.gardenerInfo.masterGardener;
  }

  numGardens() {
    return this.gardenerInfo.numGardens;
  }

  numYears() {
    return this.gardenerInfo.numYears;
  }

  numPlantings() {
    return this.gardenerInfo.numPlantings;
  }

  collaboratorIDs() {
    return this.gardenerInfo.collaboratorIDs;
  }
}
