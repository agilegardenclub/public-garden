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

export function IconWithPopover({ bg = 'primary', label = '', header = '', children }) {
  const popover = _popover({ header, children });
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Badge pill bg={bg} className='mx-1' style={{ cursor: 'pointer' }}>
        {label}
      </Badge>
    </OverlayTrigger>
  );
}

IconWithPopover.propTypes = {
  bg: PropTypes.string,
  label: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.any,
};
