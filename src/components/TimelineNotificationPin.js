import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ExclamationTriangleFill as ObservationIcon } from 'react-bootstrap-icons';
import { ObservationCard } from './ObservationCard';

function _popover({ notifications }) {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{'Notifications'}</Popover.Header>
      <Popover.Body>
        {notifications.map((notification, index) => <ObservationCard key={index} observation={notification} isNotification={true} />)}
      </Popover.Body>
    </Popover>
  );
}

_popover.propTypes = {
  notifications: PropTypes.array,
};

export function TimelineNotificationPin({ notifications }) {
  const popover = _popover({ notifications });
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <ObservationIcon color='red' size={16} style={{ cursor: 'pointer' }} />
    </OverlayTrigger>
  );
}

TimelineNotificationPin.propTypes = {
  notifications: PropTypes.array,
};
