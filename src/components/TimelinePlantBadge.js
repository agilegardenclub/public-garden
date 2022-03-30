import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';

export function TimelinePlantBadge({ plantingData }) {
  const plantID = plantingData.plantID;
  const plantInfo = chapterOverview.plantInfo(plantID);
  const plantNum = plantID.substring(6);
  const name = `${plantNum} ${plantInfo.plant} (${plantInfo.variety})`;
  const bg = plantFamilyColorName(plantID);
  const textColor = `text-${plantFamilyColorName(plantID)}`;
  const vendor = plantInfo.vendor || '';
  const vendorURL = plantInfo.vendorURL || '';
  const description = plantInfo.description;
  const familyName = plantFamilyName(plantID);
  const plantOutcomes = plantingData.outcomes;
  const ratingData = [
    { item: 'Appearance', rating: plantOutcomes ? plantOutcomes.appearance : 0 },
    { item: 'Flavor', rating: plantOutcomes ? plantOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: plantOutcomes ? plantOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: plantOutcomes ? plantOutcomes.yield : 0 },
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
      { vendor ? <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Plant Info)</a></p> : ''}
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
