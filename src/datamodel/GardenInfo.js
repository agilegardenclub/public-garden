import { gardenData } from './data/gardenData';
import { chapterData } from './data/chapterData';
import { cropComparator } from './CropInfo';
import { getCropID } from './VarietyInfo';

export function getGardenInfo(gardenID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  if (!gardenInfo) {
    throw new Error(`Undefined gardenID: ${gardenID}`);
  }
  return gardenInfo;
}

export function getGardenChapterInfo(gardenID) {
  const zipCode = getGardenInfo(gardenID).zipCode;
  const chapterInfo = chapterData.find(data => data.zipCodes.includes(zipCode));
  if (!chapterInfo) {
    throw new Error(`Could not find chapter associated with gardenID ${gardenID}`);
  }
  return chapterInfo;
}

export function getChapterID(gardenID) {
  return getGardenChapterInfo(gardenID).id;
}

export function getGardenID(gardenName) {
  const gardenInfo = gardenData.find(element => element.name === gardenName);
  if (!gardenInfo) {
    throw new Error(`Undefined garden name: ${gardenName}`);
  }
  return gardenInfo.id;
}

export function getGardenYears(gardenID) {
  const gardenInfo = getGardenInfo(gardenID);
  const gardenYears = [...new Set(gardenInfo.plantingData.map(element => element.year))];
  return [...new Set(gardenYears)].sort();
}

export function getVarietyIDs(gardenID, cropID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  const plantings = gardenInfo.plantingData.filter(planting => getCropID(planting.varietyID) === cropID);
  return [...new Set(plantings.map(planting => planting.varietyID))];
}

export function getPlantingsByCrop(gardenID, cropID) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.filter(planting => getCropID(planting.varietyID) === cropID);
}

export function getPlantingsByVariety(gardenID, varietyID) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.filter(planting => planting.varietyID === varietyID);
}

export function getPlantingsByVarietyAndYear(gardenID, varietyID, year) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.filter(planting => ((planting.varietyID === varietyID) && (planting.year === year)));
}

export function getCropIDs(gardenID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  const cropIDs = [...new Set(gardenInfo.plantingData.map(planting => getCropID(planting.varietyID)))];
  return cropIDs.sort(cropComparator);
}

export function getTotalPlantings(gardenID) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.length;
}
