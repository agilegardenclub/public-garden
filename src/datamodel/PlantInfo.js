import { plantData } from './plantData';
import { plantFamilyData } from './plantFamilyData';
// import { PlantFamilyColors } from '../Theme';

function getFamilyData(plantID) {
  const plantInfo = plantData.find(element => element.id === plantID);
  if (plantInfo) {
    const plantFamilyID = plantInfo.familyID;
    return plantFamilyData.find(element => element.id === plantFamilyID);
  }
  return null;
}

/** Returns the plant family color associated with plantID as a Bootstrap variable name. */
export function plantFamilyColorName(plantID, isLight) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return isLight ? familyData.bgs.light : familyData.bgs.dark;
  }
  return 'black';
}

/** Returns the plant family color associated with plantID as a hex color value. */
export function plantFamilyColorHex(plantID, isLight) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return isLight ? familyData.colors.light : familyData.colors.dark;
  }
  return '#FFF';
}

export function plantFamilyName(plantID) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return `${familyData.common} (${familyData.formal})`;
  }
  return 'Unknown family';
}

export function plantFamilyCommonName(plantID) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return familyData.common;
  }
  return 'Unknown family';
}
