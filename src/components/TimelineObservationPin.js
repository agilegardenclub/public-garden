import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ExclamationTriangleFill as ObservationIcon } from 'react-bootstrap-icons';
import { ObservationCard } from './ObservationCard';

function _popover({ observations }) {
  return (
    <Popover id="popover-basic" style={{ maxWidth: '400px' }}>
      <Popover.Header as="h3">{'Observations'}</Popover.Header>
      <Popover.Body>
        {observations.map((observation, index) => <ObservationCard key={index} observation={observation} />)}
      </Popover.Body>
    </Popover>
  );
}

_popover.propTypes = {
  observations: PropTypes.array,
};

export function TimelineObservationPin({ observations }) {
  const popover = _popover({ observations });
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <ObservationIcon color='yellow' size={16} style={{ cursor: 'pointer' }} />
    </OverlayTrigger>
  );
}

TimelineObservationPin.propTypes = {
  observations: PropTypes.array,
};
