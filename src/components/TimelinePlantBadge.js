import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { getFamilyColorName, getFamilyName } from '../datamodel/VarietalInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';
import { getCropName } from '../datamodel/CropInfo';

export function TimelinePlantBadge({ plantingData }) {
  const varietalID = plantingData.varietalID;
  const varietalInfo = chapterOverview.varietalInfo(varietalID);
  const varietalNum = varietalID.substring(6);
  const showVarietalNum = false;
  const name = `${showVarietalNum ? varietalNum : ''} ${getCropName(varietalInfo.cropID)} (${varietalInfo.variety})`;
  const bg = getFamilyColorName(varietalID);
  const textColor = `text-${getFamilyColorName(varietalID)}`;
  const vendor = vendorName(varietalID);
  const vendorURL = vendorUrl(varietalID);
  const description = varietalInfo.description;
  const familyName = getFamilyName(varietalID);
  const varietalOutcomes = plantingData.outcomes;
  const ratingData = [
    { item: 'Appearance', rating: varietalOutcomes ? varietalOutcomes.appearance : 0 },
    { item: 'Flavor', rating: varietalOutcomes ? varietalOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: varietalOutcomes ? varietalOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: varietalOutcomes ? varietalOutcomes.yield : 0 },
  ];
  const startDate = plantingData.startDate;
  const transplantDate = plantingData.transplantDate || 'N/A';
  const firstHarvestDate = plantingData.firstHarvestDate || 'N/A';
  const endDate = plantingData.endDate;
  const usedGreenhouse = plantingData.usedGreenhouse ? 'Yes' : 'No';

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      { vendor ? <p><b>Vendor:</b>  <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor}</a></p> : ''}
      <p><b>Used Greenhouse:</b> {usedGreenhouse}</p>
      <p><b>Start Date:</b> {startDate}</p>
      <p><b>Transplant Date:</b> {transplantDate}</p>
      <p><b>First Harvest Date:</b> {firstHarvestDate}</p>
      <p><b>End Date:</b> {endDate}</p>
      <Field title="Outcomes:" direction="vertical">
        <RatingList ratingData={ratingData}/>
      </Field>
    </BadgeWithPopover>
  );
}

TimelinePlantBadge.propTypes = {
  plantingData: PropTypes.any,
};
