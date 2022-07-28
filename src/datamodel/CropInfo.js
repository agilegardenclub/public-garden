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

export function cropComparator(cropID1, cropID2) {
  const name1 = cropID1 && getCropName(cropID1);
  const name2 = cropID2 && getCropName(cropID2);
  // Sometimes vendorName is called without a vendorID, resulting in null.
  return (!name1 || !name2) ? 0 : name1.localeCompare(name2);
}
