import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';

export function ZoneBadge({ zoneID }) {
  return (
    <BadgeWithPopover bg='primary' header='Zone 8a' label='Zone 8a'>
      <p>Description of {zoneID} goes here.</p>
    </BadgeWithPopover>
  );
}

ZoneBadge.propTypes = {
  zoneID: PropTypes.string,
};
