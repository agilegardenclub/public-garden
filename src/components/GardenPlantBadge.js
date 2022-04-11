import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';

export function GardenPlantBadge({ plantID }) {
  const plantInfo = chapterOverview.plantInfo(plantID);
  const plantNum = plantID.substring(5);
  const name = `${plantInfo.plant} (${plantInfo.variety}) ${plantNum}`;
  const bg = plantFamilyColorName(plantID);
  const textColor = `text-${plantFamilyColorName(plantID)}`;
  const vendor = vendorName(plantID);
  const vendorURL = vendorUrl(plantID);
  const description = plantInfo.description;
  const familyName = plantFamilyName(plantID);
  const plantOutcomes = null; // Needs to be reimplemented.
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
      <p><b>Vendor:</b>  <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor}</a></p>
      <Field title="Outcome (Average)" direction="vertical">
        <RatingList ratingData={ratingData}/>
      </Field>
    </BadgeWithPopover>
  );
}

GardenPlantBadge.propTypes = {
  plantID: PropTypes.string,
};
