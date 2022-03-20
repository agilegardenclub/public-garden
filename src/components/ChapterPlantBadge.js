import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';

export function ChapterPlantBadge({ plantID }) {
  const plantInfo = chapterOverview.plantInfo(plantID);
  const name = `${plantInfo.cultivar} (${plantInfo.variety})`;
  const vendor = plantInfo.vendor;
  const vendorURL = plantInfo.vendorURL;
  const description = plantInfo.description;

  return (
    <BadgeWithPopover header={name} label={name} bg='info'>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Plant Info)</a></p>
    </BadgeWithPopover>
  );
}

ChapterPlantBadge.propTypes = {
  plantID: PropTypes.string,
};
