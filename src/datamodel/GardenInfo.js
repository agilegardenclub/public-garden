import { gardenData } from './data/gardenData';
import { getCropName } from './CropInfo';
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

function cropComparator(cropID1, cropID2) {
  const name1 = cropID1 && getCropName(cropID1);
  const name2 = cropID2 && getCropName(cropID2);
  // Sometimes vendorName is called without a vendorID, resulting in null.
  return (!name1 || !name2) ? 0 : name1.localeCompare(name2);
}

export function getCropIDs(gardenID) {
  const gardenInfo = gardenData.find(element => element.id === gardenID);
  const cropIDs = [...new Set(gardenInfo.plantingData.map(planting => getCropID(planting.varietalID)))];
  return cropIDs.sort(cropComparator);
}
