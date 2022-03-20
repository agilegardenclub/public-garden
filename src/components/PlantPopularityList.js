import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from 'react-bootstrap';
import { ChapterPlantBadge } from './ChapterPlantBadge';

function PlantPopularityRow({ plantID, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterPlantBadge plantID={plantID} /></div>
      <div className="ms-auto">{numRatings} plantings</div>
    </Stack>
  );
}

PlantPopularityRow.propTypes = {
  plantID: PropTypes.string,
  numRatings: PropTypes.number,
};

export function PlantPopularityList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <PlantPopularityRow key={index} plantID={data.plantID} numRatings={data.numRatings}></PlantPopularityRow>) }
    </Stack>
  );
}

PlantPopularityList.propTypes = {
  ratingData: PropTypes.any,
};
