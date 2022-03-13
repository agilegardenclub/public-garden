import React from 'react';
import PropTypes from 'prop-types';
import { MasterGardenerBadge } from './MasterGardenerBadge';
import { gardenOverview } from '../datamodel/GardenOverview';

export function GardenerLabel({ gardenerID }) {
  const name = gardenOverview.gardenerName(gardenerID);
  const isMasterGardener = gardenOverview.isMasterGardener(gardenerID);
  return (
    <span>{name} {isMasterGardener && <MasterGardenerBadge/>}</span>
  );
}

GardenerLabel.propTypes = {
  gardenerID: PropTypes.string,
};
