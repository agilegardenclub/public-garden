import { vendorData } from './data/vendorData';
import { plantData } from './data/plantData';

function getVendorInfo(plantID) {
  const plantInfo = plantData.find(element => element.id === plantID);
  if (plantInfo) {
    const vendorID = plantInfo.vendorID;
    return vendorData.find(element => element.id === vendorID);
  }
  return null;
}

function getVendorField(plantID, fieldName) {
  const vendorInfo = getVendorInfo(plantID);
  if (vendorInfo) {
    return vendorInfo[fieldName];
  }
  return '';
}

export function vendorName(plantID) {
  return getVendorField(plantID, 'name');
}

export function vendorShortName(plantID) {
  return getVendorField(plantID, 'shortName');
}

export function vendorUrl(plantID) {
  return getVendorField(plantID, 'url');
}
