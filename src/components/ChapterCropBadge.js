import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { getCropInfo, getFamilyID } from '../datamodel/CropInfo';
import { getFamilyInfo, getFamilyColorName } from '../datamodel/FamilyInfo';
import { getPlantings, getVarietyIDs } from '../datamodel/GardenInfo';
import { GardenVarietyBadge } from './GardenVarietyBadge';
import { getGardenIDs } from '../datamodel/ChapterInfo';

export function ChapterCropBadge({ chapterID, cropID }) {
  const cropInfo = getCropInfo(cropID);
  const name = cropInfo.name;
  const gardenIDs = getGardenIDs(chapterID);
  const plantings = gardenIDs.map(gardenID => getPlantings(gardenID, cropID)).flat();
  const numPlantings = plantings.length;
  const varietyIDs = gardenIDs.map(gardenID => getVarietyIDs(gardenID, cropID)).flat();
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

ChapterCropBadge.propTypes = {
  chapterID: PropTypes.string,
  cropID: PropTypes.string,
};
