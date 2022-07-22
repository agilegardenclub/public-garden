import { vendorData } from './data/vendorData';
import { varietalData } from './data/varietalData';

function getVendorInfo(varietalID) {
  const varietalInfo = varietalData.find(element => element.id === varietalID);
  if (varietalInfo) {
    const vendorID = varietalInfo.vendorID;
    return vendorData.find(element => element.id === vendorID);
  }
  return null;
}

function getVendorField(varietalID, fieldName) {
  const vendorInfo = getVendorInfo(varietalID);
  if (vendorInfo) {
    return vendorInfo[fieldName];
  }
  return '';
}

export function vendorName(varietalID) {
  return getVendorField(varietalID, 'name');
}

export function vendorShortName(varietalID) {
  return getVendorField(varietalID, 'shortName');
}

export function vendorUrl(varietalID) {
  return getVendorField(varietalID, 'url');
}
