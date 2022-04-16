import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ExclamationTriangleFill as ObservationIcon } from 'react-bootstrap-icons';

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

export function IconWithPopover() {
  const popover = _popover({ header: 'header' });
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <ObservationIcon color={'red'} size={18} style={{ cursor: 'pointer' }} />
    </OverlayTrigger>
  );
}

IconWithPopover.propTypes = {
};
