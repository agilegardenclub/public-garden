import React from 'react';
import { BadgeWithPopover } from './BadgeWithPopover';

export function ClimateVictoryGardenBadge() {
  return (
    <BadgeWithPopover header="Climate Victory Garden" label="Climate Victory Garden" bg="success">
      <p>This garden utilizes regenerative agricultural practices that reduce greenhouse gas emissions and increase carbon sequestration, including soil coverage, composting, reduced or no chemical usage, biodiversity</p>
      <p>For more details, see <a href="https://www.greenamerica.org/climate-victory-gardens" target="_blank" rel="noreferrer noopener">Green America on Climate Victory Gardens</a></p>
    </BadgeWithPopover>
  );
}

ClimateVictoryGardenBadge.propTypes = {
};
