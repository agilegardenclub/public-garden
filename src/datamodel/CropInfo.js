import { cropData } from './data/cropData';

export function getCropInfo(cropID) {
  const cropInfo = cropData.find(element => element.id === cropID);
  if (!cropInfo) {
    throw new Error(`Undefined cropID: ${cropID}`);
  }
  return cropInfo;
}

export function getCropName(cropID) {
  return getCropInfo(cropID).name;
}

export function getFamilyID(cropID) {
  return getCropInfo(cropID).familyID;
}
