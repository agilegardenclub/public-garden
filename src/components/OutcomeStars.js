import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { Stack } from 'react-bootstrap';
import { hasOutcomes } from '../datamodel/OutcomeDataInfo';

function RatingRow({ item, rating }) {
  return (
    <Stack direction="horizontal">
      <div>{item}</div>
      <div className="ms-auto"><Rating readonly initialValue={rating} size={20} /></div>
    </Stack>
  );
}

RatingRow.propTypes = {
  item: PropTypes.string,
  rating: PropTypes.number,
};

function makeRatingData(outcomeData) {
  return [
    { item: 'Appearance', rating: outcomeData.appearance ? outcomeData.appearance : 0 },
    { item: 'Flavor', rating: outcomeData.flavor ? outcomeData.flavor : 0 },
    { item: 'Germination', rating: outcomeData.germination ? outcomeData.germination : 0 },
    { item: 'Resistance', rating: outcomeData.resistance ? outcomeData.resistance : 0 },
    { item: 'Yield', rating: outcomeData.yield ? outcomeData.yield : 0 },
  ];
}
export function OutcomeStars({ outcomeData }) {
  return (
    hasOutcomes(outcomeData) ?
      <Stack>
        {makeRatingData(outcomeData).map((data, index) => <RatingRow key={index} item={data.item} rating={data.rating || 0}></RatingRow>)}
      </Stack> :
      <div>No outcome data</div>
  );
}

OutcomeStars.propTypes = {
  outcomeData: PropTypes.any,
};
