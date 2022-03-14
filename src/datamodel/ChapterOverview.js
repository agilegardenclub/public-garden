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

  _getSeedName(seedID) {
    const seedInfo = this.seeds.find(element => element.id === seedID);
    return seedInfo ? seedInfo.name : 'Seed Not Found';
  }

  seedInfo(seedID) {
    return this.seeds.find(element => element.id === seedID);
  }

  ratings(type) {
    const seedRatingObj = this.chapter.seedRatings.find(element => element.type === type);
    const ratings = seedRatingObj.ratings;
    return ratings.map(rating => ({ item: this._getSeedName(rating.seedID), rating: rating.rating }));
  }

  seedRatings(type) {
    return this.chapter.seedRatings.find(element => element.type === type).ratings;
  }
}

export const chapterOverview = new ChapterOverview(chapterData[0], seedData);
