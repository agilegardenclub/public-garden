import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, Image } from 'react-bootstrap';

export function PictureCarousel({ pictureData }) {
  return (
    <Carousel interval={300000} variant="dark" fade controls={false}>
      { pictureData.map((data, index) => <Carousel.Item key={index} ><Image fluid src={data.url} /><Carousel.Caption><small>{`${data.caption} (${data.date})`}</small></Carousel.Caption></Carousel.Item>) }
    </Carousel>

  );
}

PictureCarousel.propTypes = {
  pictureData: PropTypes.any,
};
