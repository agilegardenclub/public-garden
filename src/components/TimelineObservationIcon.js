import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';
import { plantFamilyColorName, plantFamilyName } from '../datamodel/PlantInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';

export function TimelineObservationIcon({ observationIDs }) {

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
