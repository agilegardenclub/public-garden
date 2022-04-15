import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Gardener } from '../datamodel/Gardener';
import { MasterGardenerBadge } from './MasterGardenerBadge';

function _popover({ gardener }) {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{gardener.initials()}</Popover.Header>
      <Popover.Body>
        <p><b>Gardens: </b> {gardener.numGardens()}</p>
        <p><b>Years: </b> {gardener.numYears()}</p>
        <p><b>Plantings: </b> {gardener.numPlantings()}</p>
        <p><b>Collaborators: </b> {gardener.collaboratorIDs().map((collaborator, index) => <Avatar key={index} gardenerID={collaborator}/>)}</p>
        {gardener.isMasterGardener() ? <MasterGardenerBadge/> : <div></div>}
      </Popover.Body>
    </Popover>
  );
}

_popover.propTypes = {
  gardener: PropTypes.any,
};

export function Avatar({ gardenerID, size = 16 }) {
  const gardener = new Gardener(gardenerID);
  const popover = _popover({ gardener });
  const px = `${size * 3}px`;
  const fontSize = `${size}px`;
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
