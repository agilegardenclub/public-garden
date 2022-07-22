import { chapterData } from './data/chapterData';
import { varietalData } from './data/varietalData';

/* Processes raw data for use by ChapterOverviewCard. */
class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, varietals) {
    this.chapter = chapter;
    this.varietals = varietals;
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

  _getVarietalName(varietalID) {
    const varietalInfo = this.varietals.find(element => element.id === varietalID);
    return varietalInfo ? varietalInfo.name : 'Varietal Not Found';
  }

  varietalInfo(varietalID) {
    return this.varietals.find(element => element.id === varietalID);
  }

  ratings(type) {
    const varietalRatingObj = this.chapter.varietalRatings.find(element => element.type === type);
    const ratings = varietalRatingObj.ratings;
    return ratings.map(rating => ({ item: this._getVarietalName(rating.varietalID), rating: rating.rating }));
  }

  varietalRatings(type) {
    return this.chapter.varietalRatings.find(element => element.type === type).ratings;
  }
}

export const chapterOverview = new ChapterOverview(chapterData[0], varietalData);
