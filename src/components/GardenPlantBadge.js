import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { getFamilyColorName, getFamilyName, getCropName } from '../datamodel/PlantInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';

export function GardenPlantBadge({ varietalID }) {
  const varietalInfo = chapterOverview.varietalInfo(varietalID);
  const varietalNum = varietalID.substring(5);
  const showVarietalNum = false;
  const name = `${showVarietalNum ? varietalNum : ''} ${getCropName(varietalInfo.cropID)} (${varietalInfo.variety})`;
  const bg = getFamilyColorName(varietalID);
  const textColor = `text-${getFamilyColorName(varietalID)}`;
  const vendor = vendorName(varietalID);
  const vendorURL = vendorUrl(varietalID);
  const description = varietalInfo.description;
  const familyName = getFamilyName(varietalID);
  const varietalOutcomes = null; // Needs to be reimplemented.
  const ratingData = [
    { item: 'Appearance', rating: varietalOutcomes ? varietalOutcomes.appearance : 0 },
    { item: 'Flavor', rating: varietalOutcomes ? varietalOutcomes.flavor : 0 },
    { item: 'Pest Resistance', rating: varietalOutcomes ? varietalOutcomes.pestResistance : 0 },
    { item: 'Yield', rating: varietalOutcomes ? varietalOutcomes.yield : 0 },
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
  varietalID: PropTypes.string,
};
