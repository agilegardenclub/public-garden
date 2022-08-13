import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { getCropInfo, getFamilyID } from '../datamodel/CropInfo';
import { getFamilyInfo, getFamilyColorName } from '../datamodel/FamilyInfo';
import { getPlantingsByCrop, getVarietyIDs } from '../datamodel/GardenInfo';
import { GardenVarietyBadge } from './GardenVarietyBadge';

export function GardenCropBadge({ gardenID, cropID }) {
  const cropInfo = getCropInfo(cropID);
  const name = cropInfo.name;
  const plantings = getPlantingsByCrop(gardenID, cropID);
  const numPlantings = plantings.length;
  const varietyIDs = getVarietyIDs(gardenID, cropID);
  const varietyBadges = varietyIDs.map((varietyID, index) => <GardenVarietyBadge key={index} varietyID={varietyID}/>);
  const familyID = getFamilyID(cropID);
  const familyName = getFamilyInfo(familyID).common;
  const bg = getFamilyColorName(familyID);
  const textColor = `text-${getFamilyColorName(familyID)}`;

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Num plantings:</b> {numPlantings}</p>
      <p><b>Varietys:</b> {varietyBadges}</p>
    </BadgeWithPopover>
  );
}

GardenCropBadge.propTypes = {
  gardenID: PropTypes.string,
  cropID: PropTypes.string,
};
