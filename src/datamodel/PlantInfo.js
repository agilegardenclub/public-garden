import { plantData } from './plantData';
import { plantFamilyData } from './plantFamilyData';

function getFamilyData(plantID) {
  const plantInfo = plantData.find(element => element.id === plantID);
  if (plantInfo) {
    const plantFamilyID = plantInfo.familyID;
    return plantFamilyData.find(element => element.id === plantFamilyID);
  }
  return null;
}

/** Returns the plant family color associated with plantID as a Bootstrap variable name. */
export function plantFamilyColor(plantID) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return familyData.bg;
  }
  return 'black';
}

/** Returns the plant family color associated with plantID as a hex color value. */
export function plantFamilyColorHex(plantID) {
  const familyData = getFamilyData(plantID);
  if (familyData) {
    return familyData.color;
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
