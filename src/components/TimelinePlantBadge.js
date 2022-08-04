import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { getFamilyColorName, getFamilyName } from '../datamodel/VarietyInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';
import { getCropName } from '../datamodel/CropInfo';

export function TimelinePlantBadge({ plantingData }) {
  const varietyID = plantingData.varietyID;
  const varietyInfo = chapterOverview.varietyInfo(varietyID);
  const varietyNum = varietyID.substring(6);
  const showVarietyNum = false;
  const name = `${showVarietyNum ? varietyNum : ''} ${getCropName(varietyInfo.cropID)} (${varietyInfo.variety})`;
  const bg = getFamilyColorName(varietyID);
  const textColor = `text-${getFamilyColorName(varietyID)}`;
  const vendor = vendorName(varietyID);
  const vendorURL = vendorUrl(varietyID);
  const description = varietyInfo.description;
  const familyName = getFamilyName(varietyID);
  const varietyOutcomes = plantingData.outcomes;
  const ratingData = [
    { item: 'Appearance', rating: varietyOutcomes ? varietyOutcomes.appearance : 0 },
    { item: 'Flavor', rating: varietyOutcomes ? varietyOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: varietyOutcomes ? varietyOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: varietyOutcomes ? varietyOutcomes.yield : 0 },
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
