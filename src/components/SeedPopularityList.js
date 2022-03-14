import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from 'react-bootstrap';
import { ChapterSeedBadge } from './ChapterSeedBadge';

function SeedPopularityRow({ seedID, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterSeedBadge seedID={seedID} /></div>
      <div className="ms-auto">{numRatings} plantings</div>
    </Stack>
  );
}

SeedPopularityRow.propTypes = {
  seedID: PropTypes.string,
  numRatings: PropTypes.number,
};

export function SeedPopularityList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <SeedPopularityRow key={index} seedID={data.seedID} numRatings={data.numRatings}></SeedPopularityRow>) }
    </Stack>
  );
}

SeedPopularityList.propTypes = {
  ratingData: PropTypes.any,
};
