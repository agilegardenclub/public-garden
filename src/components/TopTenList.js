import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';

function TopTenRow({ item, rating }) {
  return (
    <Stack direction="horizontal" gap={3}>
      <div>{item}</div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20}/></div>
    </Stack>
  );
}

TopTenRow.propTypes = {
  item: PropTypes.string,
  rating: PropTypes.number,
};

export function TopTenList({ topTenData }) {
  return (
    <Stack>
      { topTenData.map((data, index) => <TopTenRow key={index} item={data.item} rating={data.rating}></TopTenRow>) }
    </Stack>
  );
}

TopTenList.propTypes = {
  topTenData: PropTypes.any,
};
