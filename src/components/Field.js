import PropTypes from 'prop-types';
import React from 'react';

export const Field = (props) => (
  <div>
    <small>{props.title}</small>
    {props.children}
  </div>
);

Field.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
