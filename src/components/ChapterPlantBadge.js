import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { getFamilyColorName, getFamilyName, getCropName } from '../datamodel/PlantInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';

export function ChapterPlantBadge({ varietalID }) {
  const varietalInfo = chapterOverview.varietalInfo(varietalID);
  const name = `${getCropName(varietalInfo.cropID)} (${varietalInfo.variety})`;
  const familyName = getFamilyName(varietalID);
  const vendor = vendorName(varietalID);
  const vendorURL = vendorUrl(varietalID);
  const description = varietalInfo.description;
  const bg = getFamilyColorName(varietalID);
  const textColor = `text-${getFamilyColorName(varietalID)}`;

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
