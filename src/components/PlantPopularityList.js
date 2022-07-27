import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from 'react-bootstrap';
import { ChapterVarietalBadge } from './ChapterPlantBadge';

function PlantPopularityRow({ varietalID, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterVarietalBadge varietalID={varietalID} /></div>
      <div className="ms-auto">{numRatings} plantings</div>
    </Stack>
  );
}

PlantPopularityRow.propTypes = {
  varietalID: PropTypes.string,
  numRatings: PropTypes.number,
};

export function PlantPopularityList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <PlantPopularityRow key={index} varietalID={data.varietalID} numRatings={data.numRatings}></PlantPopularityRow>) }
    </Stack>
  );
}

PlantPopularityList.propTypes = {
  ratingData: PropTypes.any,
};
