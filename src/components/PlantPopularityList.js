import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from 'react-bootstrap';
import { ChapterVarietyBadge } from './ChapterPlantBadge';

function PlantPopularityRow({ varietyID, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterVarietyBadge varietyID={varietyID} /></div>
      <div className="ms-auto">{numRatings} plantings</div>
    </Stack>
  );
}

PlantPopularityRow.propTypes = {
  varietyID: PropTypes.string,
  numRatings: PropTypes.number,
};

export function PlantPopularityList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <PlantPopularityRow key={index} varietyID={data.varietyID} numRatings={data.numRatings}></PlantPopularityRow>) }
    </Stack>
  );
}

PlantPopularityList.propTypes = {
  ratingData: PropTypes.any,
};
