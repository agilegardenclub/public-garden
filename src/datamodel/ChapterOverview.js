import { chapterData } from './data/chapterData';
import { plantData } from './data/plantData';

/* Processes raw data for use by ChapterOverviewCard. */
class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, plants) {
    this.chapter = chapter;
    this.plants = plants;
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

  _getPlantName(plantID) {
    const plantInfo = this.plants.find(element => element.id === plantID);
    return plantInfo ? plantInfo.name : 'Plant Not Found';
  }

  plantInfo(plantID) {
    return this.plants.find(element => element.id === plantID);
  }

  ratings(type) {
    const plantRatingObj = this.chapter.plantRatings.find(element => element.type === type);
    const ratings = plantRatingObj.ratings;
    return ratings.map(rating => ({ item: this._getPlantName(rating.plantID), rating: rating.rating }));
  }

  plantRatings(type) {
    return this.chapter.plantRatings.find(element => element.type === type).ratings;
  }
}

export const chapterOverview = new ChapterOverview(chapterData[0], plantData);
