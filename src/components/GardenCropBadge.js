import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { getCropInfo, getFamilyID } from '../datamodel/CropInfo';
import { getFamilyInfo, getFamilyColorName } from '../datamodel/FamilyInfo';
import { getPlantings, getVarietalIDs } from '../datamodel/GardenInfo';
import { GardenVarietalBadge } from './GardenVarietalBadge';
// import { getVarietalName } from '../datamodel/VarietalInfo';

export function GardenCropBadge({ gardenID, cropID }) {
  const cropInfo = getCropInfo(cropID);
  const name = cropInfo.name;
  const plantings = getPlantings(gardenID, cropID);
  const numPlantings = plantings.length;
  const varietalIDs = getVarietalIDs(gardenID, cropID);
  // const varietalNames = [...new Set(varietalIDs.map(varietalID => getVarietalName(varietalID, true)))].sort();
  const varietalBadges = varietalIDs.map((varietalID, index) => <GardenVarietalBadge key={index} varietalID={varietalID}/>);
  const familyID = getFamilyID(cropID);
  const familyName = getFamilyInfo(familyID).common;
  const bg = getFamilyColorName(familyID);
  const textColor = `text-${getFamilyColorName(familyID)}`;

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Num plantings:</b> {numPlantings}</p>
      <p><b>Varietals:</b> {varietalBadges}</p>
    </BadgeWithPopover>
  );
}

GardenCropBadge.propTypes = {
  gardenID: PropTypes.string,
  cropID: PropTypes.string,
};
