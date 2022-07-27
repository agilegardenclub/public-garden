import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { Avatar } from './Avatar';
import { ObservationCardTagBadge } from './ObservationCardTagBadge';
import { GardenVarietalBadge } from './GardenVarietalBadge';

export function ObservationCard({ observation, isNotification = false }) {
  return (
    <Card>
      <Card.Body>
        <Stack>
          <Field>
            <a href={observation.picture}><Image fluid src={observation.picture} /></a>
          </Field>
          <Field title="Date:">
            {observation.observationDate}
          </Field>
          <Field title="Observed by:">
            <Avatar gardenerID={observation.gardenerID} />
          </Field>
          {isNotification ? <Field title="Observed on:"><GardenVarietalBadge varietalID={observation.varietalID}/></Field> : <div></div>}
          <Field>
            {observation.description}
          </Field>
          <Field>
            {observation.tags.map((tag, index) => <ObservationCardTagBadge key={index} tag={tag} />)}
          </Field>
          <Field>
            {observation.replies.map((reply, index) => <div key={index}><hr /><div className='mb-0'><b>Reply:&nbsp;</b><Avatar gardenerID={reply.gardenerID}/>&nbsp;{reply.date}</div><p>{reply.comment}</p></div>)}
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}

ObservationCard.propTypes = {
  observation: PropTypes.object,
  isNotification: PropTypes.bool,
};
