import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';
import { ChapterVarietyBadge } from './ChapterPlantBadge';

function PlantRatingRow({ varietyID, rating, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterVarietyBadge varietyID={varietyID} /></div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20}/> <small>({numRatings} ratings)</small></div>
    </Stack>
  );
}

PlantRatingRow.propTypes = {
  varietyID: PropTypes.string,
  rating: PropTypes.number,
  numRatings: PropTypes.number,
};

export function PlantRatingList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <PlantRatingRow key={index} varietyID={data.varietyID} rating={data.rating} numRatings={data.numRatings}></PlantRatingRow>) }
    </Stack>
  );
}

PlantRatingList.propTypes = {
  ratingData: PropTypes.any,
};
