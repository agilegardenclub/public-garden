import { chapterData } from './data/chapterData';
import { gardenData } from './data/gardenData';
import { getCropIDs, getGardenYears, getSeedsSavedPlantingData, getSeedsToSharePlantingData } from './GardenInfo';
import { cropComparator } from './CropInfo';

function getChapterInfo(chapterID) {
  const chapterInfo = chapterData.find(element => element.id === chapterID);
  if (!chapterInfo) {
    throw new Error(`Undefined chapterID: ${chapterID}`);
  }
  return chapterInfo;
}

function getGardenInfoList(chapterID) {
  const zipCodes = getChapterInfo(chapterID).zipCodes;
  const gardenInfos = gardenData.filter(element => zipCodes.includes(element.zipCode));
  if (!gardenInfos) {
    throw new Error(`chapterID (${chapterID}) has no associated gardens.`);
  }
  return gardenInfos;
}

export function getGardenIDs(chapterID) {
  const gardenInfoList = getGardenInfoList(chapterID);
  return gardenInfoList.map(gardenInfo => gardenInfo.id);
}

export function getNumChapterMembers(chapterID) {
  const zipCodes = getChapterInfo(chapterID).zipCodes;
  const gardenInfos = gardenData.filter(element => zipCodes.includes(element.zipCode));
  if (!gardenInfos) {
    throw new Error(`chapterID (${chapterID}) has no associated gardens.`);
  }
  const gardenerInfos = gardenInfos.map(gardenInfo => gardenInfo.gardeners);
  const gardenerIDs = [];
  for (const gardenerInfo of gardenerInfos) {
    for (const gardenerObject of gardenerInfo) {
      gardenerIDs.push(gardenerObject.gardenerID);
    }
  }
  return [...new Set(gardenerIDs)].length;
}

export function getNumChapterGardens(chapterID) {
  const zipCodes = getChapterInfo(chapterID).zipCodes;
  const gardenInfos = gardenData.filter(element => zipCodes.includes(element.zipCode));
  return gardenInfos.length;
}

export function getChapterGardenYears(chapterID) {
  const gardenInfos = getGardenInfoList(chapterID);
  const chapterYears = [];
  for (const gardenInfo of gardenInfos) {
    const gardenYears = getGardenYears(gardenInfo.id);
    chapterYears.push(...gardenYears);
  }
  return [...new Set(chapterYears)].sort();
}

export function getChapterCropIDs(chapterID) {
  const gardenIDs = getGardenIDs(chapterID);
  const cropIDs = [...new Set(gardenIDs.map(gardenID => getCropIDs(gardenID)).flat())];
  return cropIDs.sort(cropComparator);
}

export function getChapterSeedsSavedPlantings(chapterID) {
  const gardenIDs = getGardenIDs(chapterID);
  return [...new Set(gardenIDs.map(gardenID => getSeedsSavedPlantingData(gardenID)).flat())];
}

export function getChapterSeedsToSharePlantings(chapterID) {
  const gardenIDs = getGardenIDs(chapterID);
  return [...new Set(gardenIDs.map(gardenID => getSeedsToSharePlantingData(gardenID)).flat())];
}
