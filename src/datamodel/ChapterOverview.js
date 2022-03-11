import { chapterData } from './chapterData';
import { seedData } from './seedData';

/* Processes raw data for use by ChapterOverviewCard. */
class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, seeds) {
    this.chapter = chapter;
    this.seeds = seeds;
  }

  name() {
    return this.chapter.name;
  }

  pictures() {
    return this.chapter.pictures;
  }

  age() {
    return this.chapter.age;
  }

  zipCodes() {
    return this.chapter.zipCodes;
  }

  zoneIDs() {
    return this.chapter.zoneIDs;
  }

  members() {
    return this.chapter.members;
  }

  gardens() {
    return this.chapter.gardens;
  }

  _getSeedIDs(type) {
    const seedObj = this.chapter.seedInfo.find(element => element.type === type);
    return seedObj.seedIDs;
  }

  _getSeedName(seedID) {
    const seedInfo = this.seeds.find(element => element.id === seedID);
    return seedInfo ? seedInfo.name : 'Seed Not Found';
  }

  _getSeedNamesOfType(type) {
    const seedIDs = this._getSeedIDs(type);
    return seedIDs.map(id => this._getSeedName(id));
  }

  popularSeeds() {
    return this._getSeedNamesOfType('popular');
  }

  outcomeSeeds() {
    return this._getSeedNamesOfType('outcome');
  }

  localSeeds() {
    return this._getSeedNamesOfType('local');
  }
}

export const chapterOverview = new ChapterOverview(chapterData[0], seedData);
