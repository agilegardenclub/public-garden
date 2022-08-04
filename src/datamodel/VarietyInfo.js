import { varietyData } from './data/varietyData';
import { vendorData } from './data/vendorData';
import { familyData } from './data/familyData';
import { getCropName, getFamilyID } from './CropInfo';
import { getFamilyInfo } from './FamilyInfo';

export function getVarietyInfo(varietyID) {
  const varietyInfo = varietyData.find(element => element.id === varietyID);
  if (!varietyInfo) {
    throw new Error(`Undefined variety: ${varietyID}`);
  }
  return varietyInfo;
}

export function getFamilyData(varietyID) {
  const varietyInfo = getVarietyInfo(varietyID);
  return getFamilyInfo(getFamilyID(varietyInfo.cropID));
}

export function getVendorID(varietyID) {
  const varietyInfo = getVarietyInfo(varietyID);
  return (varietyInfo) ? varietyInfo.vendorID : null;
}

export function getCropID(varietyID) {
  const varietyInfo = getVarietyInfo(varietyID);
  return (varietyInfo) ? varietyInfo.cropID : null;
}

export function getVendorName(vendorID) {
  const vendorInfo = vendorData.find(element => element.id === vendorID);
  return (vendorInfo) ? vendorInfo.name : null;
}

/** Returns the plant family color associated with varietyID as a Bootstrap variable name. */
export function getFamilyColorName(varietyID, isLight) {
  const data = getFamilyData(varietyID);
  if (data) {
    return isLight ? data.bgs.light : data.bgs.dark;
  }
  return 'black';
}

/** Returns the plant family color associated with varietyID as a hex color value. */
export function getFamilyColorHex(varietyID, isLight) {
  const data = getFamilyData(varietyID);
  if (data) {
    return isLight ? data.colors.light : data.colors.dark;
  }
  return '#FFF';
}

export function getFamilyName(varietyID) {
  const data = getFamilyData(varietyID);
  if (data) {
    return `${data.common} (${data.formal})`;
  }
  return 'Unknown family';
}

/** id is a varietyID unless fromFamilyID is true, then id is a familyID */
export function getFamilyCommonName(id, fromFamilyID) {
  const data = fromFamilyID ? familyData.find(element => element.id === id) : getFamilyData(id);
  if (data) {
    return data.common;
  }
  return 'Unknown family';
}

export function getVarietyName(varietyID, varietyOnly) {
  const varietyInfo = varietyData.find(element => element.id === varietyID);
  if (varietyInfo) {
    return varietyOnly ? varietyInfo.variety : `${getCropName(varietyInfo.cropID)} (${varietyInfo.variety})`;
  }
  return 'Unknown varietyID';
}

export function getVarietyNameShort(varietyID) {
  const varietyInfo = varietyData.find(element => element.id === varietyID);
  if (varietyInfo) {
    return `${getCropName(varietyInfo.cropID)}`;
  }
  return 'Unknown varietyID';
}
