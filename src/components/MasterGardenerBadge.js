import React from 'react';
import { BadgeWithPopover } from './BadgeWithPopover';

export function MasterGardenerBadge() {
  return (
    <BadgeWithPopover header="Master Gardener" label="Master Gardener" bg="warning">
      <p>Master Gardeners are trained volunteers who work in partnership with WSU Extension to educate the public and enhance the quality of life in the community by promoting sound gardening practices. This includes integrated pest management, efficient watering systems, soil improvement and choosing appropriate plants.</p>
      <p>For more details, see <a href="https://extension.wsu.edu/whatcom/hg/mg/" target="_blank" rel="noreferrer noopener">Washington State University Master Gardener Program</a></p>
    </BadgeWithPopover>
  );
}

MasterGardenerBadge.propTypes = {
};
