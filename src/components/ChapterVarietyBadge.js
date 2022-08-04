import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { getFamilyColorName, getFamilyName } from '../datamodel/VarietyInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';
import { getCropName } from '../datamodel/CropInfo';

export function ChapterVarietyBadge({ varietyID }) {
  const varietyInfo = chapterOverview.varietyInfo(varietyID);
  const name = `${getCropName(varietyInfo.cropID)} (${varietyInfo.variety})`;
  const familyName = getFamilyName(varietyID);
  const vendor = vendorName(varietyID);
  const vendorURL = vendorUrl(varietyID);
  const description = varietyInfo.description;
  const bg = getFamilyColorName(varietyID);
  const textColor = `text-${getFamilyColorName(varietyID)}`;

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor} </a></p>
    </BadgeWithPopover>
  );
}

ChapterVarietyBadge.propTypes = {
  varietyID: PropTypes.string,
};
