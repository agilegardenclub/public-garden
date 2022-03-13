import PropTypes from 'prop-types';
import React from 'react';
import { Stack } from 'react-bootstrap';

// export const Field = ({ title, direction = 'horizontal', children }) => (
//   <Stack className="d-flex align-items-baseline mb-2" direction={direction} gap={3}>
//     <div>{title}</div>
//     <div className={(direction === 'horizontal') ? 'ms-auto' : ''}>{children}</div>
//   </Stack>
// );

export const Field = ({ title, direction = 'horizontal', children }) => (
  <Stack className="d-flex align-items-baseline mb-2" direction={direction}>
    <div><b>{title}&nbsp;</b></div>
    {(direction === 'horizontal') ? <div className='ms-auto'>{children}</div> : children }
  </Stack>
);

Field.propTypes = {
  title: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.any,
};
