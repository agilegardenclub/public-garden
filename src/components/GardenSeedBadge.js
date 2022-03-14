import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { gardenOverview } from '../datamodel/GardenOverview';
import { Field } from './Field';
import { RatingList } from './RatingList';

export function GardenSeedBadge({ seedID }) {
  const seedInfo = chapterOverview.seedInfo(seedID);
  const name = `${seedInfo.cultivar} (${seedInfo.variety})`;
  const vendor = seedInfo.vendor;
  const vendorURL = seedInfo.vendorURL;
  const description = seedInfo.description;
  const seedOutcomes = gardenOverview.seedOutcomes(seedID);
  const numSeasons = seedOutcomes.numSeasons;
  const ratingData = [
    { item: 'Appearance', rating: seedOutcomes.appearance },
    { item: 'Flavor', rating: seedOutcomes.flavor },
    { item: 'Pest Resistance', rating: seedOutcomes.pestResistance },
    { item: 'Yield', rating: seedOutcomes.yield },
  ];

  return (
    <BadgeWithPopover header={name} label={name} bg="warning">
      <p><b>Description:</b> {description}</p>
      <p><b>Vendor:</b> {vendor} <a target="_blank" rel="noreferrer noopener" href={vendorURL}>(Seed Info)</a></p>
      <Field title="Num Seasons:">
        {numSeasons}
      </Field>
      <Field title="Outcome (Average)" direction="vertical">
        <RatingList ratingData={ratingData}/>
      </Field>
    </BadgeWithPopover>
  );
}

GardenSeedBadge.propTypes = {
  seedID: PropTypes.string,
};
