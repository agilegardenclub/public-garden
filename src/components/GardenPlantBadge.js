import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { gardenOverview } from '../datamodel/GardenOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';

export function GardenPlantBadge({ plantID }) {
  const plantInfo = chapterOverview.plantInfo(plantID);
  const name = `${plantInfo.plant} (${plantInfo.variety})`;
  const bg = plantFamilyColorName(plantID);
  const textColor = `text-${plantFamilyColorName(plantID)}`;
  const vendor = plantInfo.vendor;
  const vendorURL = plantInfo.vendorURL;
  const description = plantInfo.description;
  const familyName = plantFamilyName(plantID);
  const plantOutcomes = gardenOverview.plantOutcomes(plantID);
  const ratingData = [
    { item: 'Appearance', rating: plantOutcomes ? plantOutcomes.appearance : 0 },
    { item: 'Flavor', rating: plantOutcomes ? plantOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: plantOutcomes ? plantOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: plantOutcomes ? plantOutcomes.yield : 0 },
  ];

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Plant Info)</a></p>
      <Field title="Outcome (Average)" direction="vertical">
        <RatingList ratingData={ratingData}/>
      </Field>
    </BadgeWithPopover>
  );
}

GardenPlantBadge.propTypes = {
  plantID: PropTypes.string,
};
