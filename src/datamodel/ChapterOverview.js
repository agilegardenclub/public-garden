import { chapterData } from './data/chapterData';
import { varietyData } from './data/varietyData';
import { getChapterGardenYears, getGardenIDs, getNumChapterGardens, getNumChapterMembers } from './ChapterInfo';
import { getTotalPlantings } from './GardenInfo';

/* Processes raw data for use by ChapterOverviewCard. */
class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, varietys) {
    this.chapter = chapter;
    this.varietys = varietys;
    this.chapterID = chapter.id;
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
    return getNumChapterMembers(this.chapterID);
  }

  gardens() {
    return getNumChapterGardens(this.chapterID);
  }

  gardenYears() {
    return getChapterGardenYears(this.chapterID);
  }

  totalPlantings() {
    return getGardenIDs(this.chapterID).reduce((memo, gardenID) => memo + getTotalPlantings(gardenID), 0);
  }

  _getVarietyName(varietyID) {
    const varietyInfo = this.varietys.find(element => element.id === varietyID);
    return varietyInfo ? varietyInfo.name : 'Variety Not Found';
  }

  varietyInfo(varietyID) {
    return this.varietys.find(element => element.id === varietyID);
  }

  ratings(type) {
    const varietyRatingObj = this.chapter.varietyRatings.find(element => element.type === type);
    const ratings = varietyRatingObj.ratings;
    return ratings.map(rating => ({ item: this._getVarietyName(rating.varietyID), rating: rating.rating }));
  }

  varietyRatings(type) {
    return this.chapter.varietyRatings.find(element => element.type === type).ratings;
  }
}

export const chapterOverview = new ChapterOverview(chapterData[0], varietyData);
