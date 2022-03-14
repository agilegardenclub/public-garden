import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';

export function ChapterSeedBadge({ seedID }) {
  const seedInfo = chapterOverview.seedInfo(seedID);
  const name = `${seedInfo.cultivar} (${seedInfo.variety})`;
  const vendor = seedInfo.vendor;
  const vendorURL = seedInfo.vendorURL;
  const description = seedInfo.description;

  return (
    <BadgeWithPopover header={name} label={name} bg='info'>
      <p>Description: {description}</p>
      <p>Vendor: {vendor}</p>
      <p><a target="_blank" rel="noreferrer noopener" href={vendorURL}>(More Info)</a></p>
    </BadgeWithPopover>
  );
}

ChapterSeedBadge.propTypes = {
  seedID: PropTypes.string,
};
