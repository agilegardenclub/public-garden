import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';

function RatingRow({ item, rating }) {
  return (
    <Stack direction="horizontal">
      <div>{item}</div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20}/></div>
    </Stack>
  );
}

RatingRow.propTypes = {
  item: PropTypes.string,
  rating: PropTypes.number,
};

export function RatingList({ ratingData }) {
  return (
    <Stack>
      { ratingData.map((data, index) => <RatingRow key={index} item={data.item} rating={data.rating}></RatingRow>) }
    </Stack>
  );
}

RatingList.propTypes = {
  ratingData: PropTypes.any,
};
