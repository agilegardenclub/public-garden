import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Gardener } from '../datamodel/Gardener';

function _popover({ gardenerID }) {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">The header</Popover.Header>
      <Popover.Body>
        The body: {gardenerID}
      </Popover.Body>
    </Popover>
  );
}

_popover.propTypes = {
  gardenerID: PropTypes.string,
};

export function Avatar({ gardenerID, size = 16 }) {
  const popover = _popover({ gardenerID });
  const px = `${size * 3}px`;
  const fontSize = `${size}px`;
  const gardener = new Gardener(gardenerID);
  const initials = gardener.initials();
  const background = gardener.bgColor();
  const color = 'white';
  const style = { cursor: 'pointer', margin: '3px', padding: '2px', fontWeight: 700, borderRadius: '50%', fontSize, lineHeight: px, textAlign: 'center', background, color };
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <span style={style}>{initials}</span>
    </OverlayTrigger>
  );
}

Avatar.propTypes = {
  gardenerID: PropTypes.string,
  size: PropTypes.number,
};
