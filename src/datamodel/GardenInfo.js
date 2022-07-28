import { gardenData } from './data/gardenData';
import { cropComparator } from './CropInfo';
import { getCropID } from './VarietalInfo';

export function getGardenInfo(gardenID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  if (!gardenInfo) {
    throw new Error(`Undefined gardenID: ${gardenID}`);
  }
  return gardenInfo;
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

export function getVarietalIDs(gardenID, cropID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  const plantings = gardenInfo.plantingData.filter(planting => getCropID(planting.varietalID) === cropID);
  return [...new Set(plantings.map(planting => planting.varietalID))];
}

export function getPlantings(gardenID, cropID) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.filter(planting => getCropID(planting.varietalID) === cropID);
}

export function getCropIDs(gardenID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  const cropIDs = [...new Set(gardenInfo.plantingData.map(planting => getCropID(planting.varietalID)))];
  return cropIDs.sort(cropComparator);
}

export function getTotalPlantings(gardenID) {
  const gardenInfo = getGardenInfo(gardenID);
  return gardenInfo.plantingData.length;
}
