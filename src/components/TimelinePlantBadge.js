import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { Field } from './Field';
import { getFamilyColorName, getFamilyName } from '../datamodel/VarietyInfo';
import { vendorName, vendorUrl } from '../datamodel/VendorInfo';
import { getCropName } from '../datamodel/CropInfo';
import { OutcomeStars } from './OutcomeStars';

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
  const startDate = plantingData.startDate;
  const transplantDate = plantingData.transplantDate || 'N/A';
  const firstHarvestDate = plantingData.firstHarvestDate || 'N/A';
  const endDate = plantingData.endDate;
  const usedGreenhouse = plantingData.usedGreenhouse ? 'Yes' : 'No';

  return (
    <BadgeWithPopover header={name} label={name} bg={bg}>
      <p style={{ margin: 0 }}><b>Family:</b> <span className={textColor}>{familyName}</span> </p>
      <p style={{ margin: 0 }}><b>Description:</b> {description}</p>
      { vendor ? <p style={{ margin: 0 }}><b>Vendor:</b>  <a target="_blank" rel="noreferrer noopener" href={vendorURL}>{vendor}</a></p> : ''}
      <p style={{ margin: 0 }}><b>Used Greenhouse:</b> {usedGreenhouse}</p>
      <p style={{ margin: 0 }}><b>Start Date:</b> {startDate}</p>
      <p style={{ margin: 0 }}><b>Transplant Date:</b> {transplantDate}</p>
      <p style={{ margin: 0 }}><b>First Harvest Date:</b> {firstHarvestDate}</p>
      <p style={{ margin: 0 }}><b>End Date:</b> {endDate}</p>
      <Field title="Outcomes:" direction="vertical">
        <OutcomeStars outcomeData={plantingData.outcomes}/>
      </Field>
      <p style={{ margin: 0 }}><b>VarietyID:</b> {varietyID}</p>
    </BadgeWithPopover>
  );
}

TimelinePlantBadge.propTypes = {
  plantingData: PropTypes.any,
};
