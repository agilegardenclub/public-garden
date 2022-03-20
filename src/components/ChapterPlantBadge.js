import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { plantColor } from '../datamodel/PlantColor';

export function ChapterPlantBadge({ plantID }) {
  const plantInfo = chapterOverview.plantInfo(plantID);
  const name = `${plantInfo.plant} (${plantInfo.variety})`;
  const vendor = plantInfo.vendor;
  const vendorURL = plantInfo.vendorURL;
  const description = plantInfo.description;
  const color = plantColor(plantID);
  console.log(color);

  return (
    <BadgeWithPopover header={name} label={name} bg={color}>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Plant Info)</a></p>
    </BadgeWithPopover>
  );
}

ChapterPlantBadge.propTypes = {
  plantID: PropTypes.string,
};
