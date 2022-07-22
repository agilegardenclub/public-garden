import { varietalData } from './data/varietalData';
import { vendorData } from './data/vendorData';
import { plantFamilyData } from './data/plantFamilyData';

function getFamilyData(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    const familyID = varietalInfo.familyID;
    return plantFamilyData.find(element => element.id === familyID);
  }
  return null;
}

export function getVendorID(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  return (varietalInfo) ? varietalInfo.vendorID : null;
}

export function vendorName(vendorID) {
  const vendorInfo = vendorData.find(element => element.id === vendorID);
  return (vendorInfo) ? vendorInfo.name : null;
}

/** Returns the plant family color associated with varietalID as a Bootstrap variable name. */
export function plantFamilyColorName(varietalID, isLight) {
  const familyData = getFamilyData(varietalID);
  if (familyData) {
    return isLight ? familyData.bgs.light : familyData.bgs.dark;
  }
  return 'black';
}

/** Returns the plant family color associated with varietalID as a hex color value. */
export function plantFamilyColorHex(varietalID, isLight) {
  const familyData = getFamilyData(varietalID);
  if (familyData) {
    return isLight ? familyData.colors.light : familyData.colors.dark;
  }
  return '#FFF';
}

export function plantFamilyName(varietalID) {
  const familyData = getFamilyData(varietalID);
  if (familyData) {
    return `${familyData.common} (${familyData.formal})`;
  }
  return 'Unknown family';
}

/** id is a varietalID unless fromFamilyID is true, then id is a plantFamilyID */
export function plantFamilyCommonName(id, fromFamilyID) {
  const familyData = fromFamilyID ? plantFamilyData.find(element => element.id === id) : getFamilyData(id);
  if (familyData) {
    return familyData.common;
  }
  return 'Unknown family';
}

export function plantFamilyID(varietalID) {
  const familyData = getFamilyData(varietalID);
  if (familyData) {
    return familyData.id;
  }
  return 'Unknown plantfamilyID';
}

export function varietalName(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    return `${varietalInfo.plant} (${varietalInfo.variety})`;
  }
  return 'Unknown varietalID';
}

export function varietalNameShort(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    return `${varietalInfo.plant}`;
  }
  return 'Unknown varietalID';
}
