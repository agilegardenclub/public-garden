import React from 'react';
import { Badge, Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';

function _popover({ header, children }) {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{header}</Popover.Header>
      <Popover.Body>
        {children}
      </Popover.Body>
    </Popover>
  );
}

_popover.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
};

/* bg: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' */

export function BadgeWithPopover({ bg = 'primary', label = '', header = '', children }) {
  const popover = _popover({ header, children });
  console.log(bg);
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Badge pill className='mx-1 bg-plant' style={{ cursor: 'pointer' }}>
        {label}
      </Badge>
    </OverlayTrigger>
  );
}

BadgeWithPopover.propTypes = {
  bg: PropTypes.string,
  label: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.any,
};
