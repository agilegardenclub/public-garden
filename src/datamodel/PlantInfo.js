import { varietalData } from './data/varietalData';
import { vendorData } from './data/vendorData';
import { familyData } from './data/familyData';
import { cropData } from './data/cropData';

function getFamilyData(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    const familyID = varietalInfo.familyID;
    return familyData.find(element => element.id === familyID);
  }
  return null;
}

export function getVendorID(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  return (varietalInfo) ? varietalInfo.vendorID : null;
}

export function getVendorName(vendorID) {
  const vendorInfo = vendorData.find(element => element.id === vendorID);
  return (vendorInfo) ? vendorInfo.name : null;
}

/** Returns the plant family color associated with varietalID as a Bootstrap variable name. */
export function getFamilyColorName(varietalID, isLight) {
  const data = getFamilyData(varietalID);
  if (data) {
    return isLight ? data.bgs.light : data.bgs.dark;
  }
  return 'black';
}

/** Returns the plant family color associated with varietalID as a hex color value. */
export function getFamilyColorHex(varietalID, isLight) {
  const data = getFamilyData(varietalID);
  if (data) {
    return isLight ? data.colors.light : data.colors.dark;
  }
  return '#FFF';
}

export function getFamilyName(varietalID) {
  const data = getFamilyData(varietalID);
  if (data) {
    return `${data.common} (${data.formal})`;
  }
  return 'Unknown family';
}

/** id is a varietalID unless fromFamilyID is true, then id is a familyID */
export function getFamilyCommonName(id, fromFamilyID) {
  const data = fromFamilyID ? familyData.find(element => element.id === id) : getFamilyData(id);
  if (data) {
    return data.common;
  }
  return 'Unknown family';
}

export function getFamilyID(varietalID) {
  const data = getFamilyData(varietalID);
  if (data) {
    return data.id;
  }
  return 'Unknown familyID';
}

export function getCropName(cropID) {
  const cropInfo = cropData.find(element => element.id === cropID);
  if (cropInfo) {
    return `${cropInfo.name}`;
  }
  return 'Unknown cropID';
}

export function getVarietalName(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    return `${getCropName(varietalInfo.crop)} (${varietalInfo.variety})`;
  }
  return 'Unknown varietalID';
}

export function getVarietalNameShort(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    return `${getCropName(varietalInfo.crop)}`;
  }
  return 'Unknown varietalID';
}
