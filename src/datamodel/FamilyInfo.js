import { familyData } from './data/familyData';

export function getFamilyInfo(familyID) {
  const familyInfo = familyData.find(element => element.id === familyID);
  if (!familyInfo) {
    throw new Error(`Undefined familyID: ${familyID}`);
  }
  return familyInfo;
}

/** Returns the plant family color associated with varietyID as a Bootstrap variable name. */
export function getFamilyColorName(familyID, isLight) {
  const info = getFamilyInfo(familyID);
  return isLight ? info.bgs.light : info.bgs.dark;
}

/** Returns the plant family color associated with varietyID as a hex color value. */
export function getFamilyColorHex(familyID, isLight) {
  const info = getFamilyInfo(familyID);
  return isLight ? info.colors.light : info.colors.dark;
}

export function getFamilyName(familyID) {
  const data = getFamilyInfo(familyID);
  return `${data.common} (${data.formal})`;
}

export function getFamilyCommonName(familyID) {
  return getFamilyInfo(familyID).common;
}
