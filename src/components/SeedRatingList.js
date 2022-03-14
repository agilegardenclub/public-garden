import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';
import { ChapterSeedBadge } from './ChapterSeedBadge';

function SeedRatingRow({ seedID, rating, numRatings }) {
  return (
    <Stack direction="horizontal">
      <div><ChapterSeedBadge seedID={seedID} /></div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20}/> <small>({numRatings} ratings)</small></div>
    </Stack>
  );
}

SeedRatingRow.propTypes = {
  seedID: PropTypes.string,
  rating: PropTypes.number,
  numRatings: PropTypes.number,
};

export function SeedRatingList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <SeedRatingRow key={index} seedID={data.seedID} rating={data.rating} numRatings={data.numRatings}></SeedRatingRow>) }
    </Stack>
  );
}

SeedRatingList.propTypes = {
  ratingData: PropTypes.any,
};
