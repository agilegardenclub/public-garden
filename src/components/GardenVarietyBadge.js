import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { getFamilyColorName, getFamilyName } from '../datamodel/VarietyInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';
import { getCropName } from '../datamodel/CropInfo';

export function GardenVarietyBadge({ varietyID }) {
  const varietyInfo = chapterOverview.varietyInfo(varietyID);
  const varietyNum = varietyID.substring(5);
  const showVarietyNum = false;
  const name = `${showVarietyNum ? varietyNum : ''} ${getCropName(varietyInfo.cropID)} (${varietyInfo.variety})`;
  const bg = getFamilyColorName(varietyID);
  const textColor = `text-${getFamilyColorName(varietyID)}`;
  const vendor = vendorName(varietyID);
  const vendorURL = vendorUrl(varietyID);
  const description = varietyInfo.description;
  const familyName = getFamilyName(varietyID);
  const varietyOutcomes = null; // Needs to be reimplemented.
  const ratingData = [
    { item: 'Appearance', rating: varietyOutcomes ? varietyOutcomes.appearance : 0 },
    { item: 'Flavor', rating: varietyOutcomes ? varietyOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: varietyOutcomes ? varietyOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: varietyOutcomes ? varietyOutcomes.yield : 0 },
  ];

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b>  <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor}</a></p>
      <Field title="Outcome (Average)" direction="vertical">
        <RatingList ratingData={ratingData}/>
      </Field>
    </BadgeWithPopover>
  );
}

GardenVarietyBadge.propTypes = {
  varietyID: PropTypes.string,
};
