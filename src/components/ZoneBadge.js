import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';
import { hardinessZoneInfo } from '../datamodel/HardinessZones';

export function ZoneBadge({ zoneID, index = 0 }) {
  const name = hardinessZoneInfo.name(zoneID);
  const description = hardinessZoneInfo.description(zoneID);
  return (
    <BadgeWithPopover header={name} label={name} key={index}>
      <p>{description} F</p>
    </BadgeWithPopover>
  );
}

ZoneBadge.propTypes = {
  zoneID: PropTypes.string,
  index: PropTypes.any,
};
