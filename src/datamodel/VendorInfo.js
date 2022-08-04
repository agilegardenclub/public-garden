import { vendorData } from './data/vendorData';
import { varietyData } from './data/varietyData';

function getVendorInfo(varietyID) {
  const varietyInfo = varietyData.find(element => element.id === varietyID);
  if (varietyInfo) {
    const vendorID = varietyInfo.vendorID;
    return vendorData.find(element => element.id === vendorID);
  }
  return null;
}

function getVendorField(varietyID, fieldName) {
  const vendorInfo = getVendorInfo(varietyID);
  if (vendorInfo) {
    return vendorInfo[fieldName];
  }
  return '';
}

export function vendorName(varietyID) {
  return getVendorField(varietyID, 'name');
}

export function vendorShortName(varietyID) {
  return getVendorField(varietyID, 'shortName');
}

export function vendorUrl(varietyID) {
  return getVendorField(varietyID, 'url');
}
