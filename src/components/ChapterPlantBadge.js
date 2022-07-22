import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';

export function ChapterPlantBadge({ varietalID }) {
  const varietalInfo = chapterOverview.varietalInfo(varietalID);
  const name = `${varietalInfo.plant} (${varietalInfo.variety})`;
  const familyName = plantFamilyName(varietalID);
  const vendor = vendorName(varietalID);
  const vendorURL = vendorUrl(varietalID);
  const description = varietalInfo.description;
  const bg = plantFamilyColorName(varietalID);
  const textColor = `text-${plantFamilyColorName(varietalID)}`;

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor} </a></p>
    </BadgeWithPopover>
  );
}

ChapterPlantBadge.propTypes = {
  varietalID: PropTypes.string,
};
