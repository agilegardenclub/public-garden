import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

export function PictureCarousel({ pictureData }) {
  return (
    <Carousel>
      { pictureData.map((data, index) => <Carousel.Item key={index}><img src={data.url} /><Carousel.Caption>{data.caption}</Carousel.Caption></Carousel.Item>) }
    </Carousel>

  );
}

PictureCarousel.propTypes = {
  pictureData: PropTypes.any,
};
