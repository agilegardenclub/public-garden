import React from 'react';
import PropTypes from 'prop-types';
import { MasterGardenerBadge } from './MasterGardenerBadge';
import { GardenOverview } from '../datamodel/GardenOverview';
import { getGardenName } from './GardenName';

export function GardenerLabel({ gardenerID }) {
  const gardenName = getGardenName();
  const gardenOverview = new GardenOverview(gardenName);
  const name = gardenOverview.gardenerName(gardenerID);
  const isMasterGardener = gardenOverview.isMasterGardener(gardenerID);
  return (
    <span>{name} {isMasterGardener && <MasterGardenerBadge/>}</span>
  );
}

GardenerLabel.propTypes = {
  gardenerID: PropTypes.string,
};
