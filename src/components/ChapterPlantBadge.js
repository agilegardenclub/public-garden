import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';

export function ChapterPlantBadge({ plantID }) {
  const plantInfo = chapterOverview.plantInfo(plantID);
  const name = `${plantInfo.plant} (${plantInfo.variety})`;
  const familyName = plantFamilyName(plantID);
  const vendor = plantInfo.vendor;
  const vendorURL = plantInfo.vendorURL;
  const description = plantInfo.description;
  const bg = plantFamilyColorName(plantID);
  const textColor = `text-${plantFamilyColorName(plantID)}`;

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Plant Info)</a></p>
    </BadgeWithPopover>
  );
}

ChapterPlantBadge.propTypes = {
  plantID: PropTypes.string,
};
