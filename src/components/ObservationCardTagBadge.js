import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWithPopover } from './BadgeWithPopover';

const descriptions = {
  disease: 'This tag indicates that a disease has been observed on the plant.',
  pest: 'This tag indicates that an animal has been observed on the plant.',
  help: 'This tag indicates that the gardeners is requesting more info from the community.',
};

export function ObservationCardTagBadge({ tag }) {
  const description = descriptions[tag] || '';
  return (
    <BadgeWithPopover header={tag.toUpperCase()} label={tag.toUpperCase()}>
      <p>{description}</p>
    </BadgeWithPopover>
  );
}

ObservationCardTagBadge.propTypes = {
  tag: PropTypes.string,
};
