import { plantData } from './plantData';
import { plantFamilyData } from './plantFamilyData';

/** Returns the plant family color associated with plantID. */
export function plantColor(plantID) {
  const plantInfo = plantData.find(element => element.id === plantID);
  if (plantInfo) {
    const plantFamilyID = plantInfo.familyID;
    const familyData = plantFamilyData.find(element => element.id === plantFamilyID);
    if (familyData) {
      return familyData.color;
    }
  }
  return 'black';
}
