import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';
import { ChapterPlantBadge } from './ChapterPlantBadge';

function PlantRatingRow({ plantID, rating, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterPlantBadge plantID={plantID} /></div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20}/> <small>({numRatings} ratings)</small></div>
    </Stack>
  );
}

PlantRatingRow.propTypes = {
  plantID: PropTypes.string,
  rating: PropTypes.number,
  numRatings: PropTypes.number,
};

export function PlantRatingList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <PlantRatingRow key={index} plantID={data.plantID} rating={data.rating} numRatings={data.numRatings}></PlantRatingRow>) }
    </Stack>
  );
}

PlantRatingList.propTypes = {
  ratingData: PropTypes.any,
};
