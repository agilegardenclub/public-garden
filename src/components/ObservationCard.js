import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { Avatar } from './Avatar';
import { ObservationCardTagBadge } from './ObservationCardTagBadge';

export function ObservationCard({ observation }) {
  const imageSrc = `img/observations/${observation.picture}`;
  return (
    <Card>
      <Card.Body>
        <Stack>
          <Field>
            <a href={imageSrc}><Image fluid src={imageSrc}/></a>
          </Field>
          <Field title='Date:'>
            {observation.observationDate}
          </Field>
          <Field title='Observed by:'>
            <Avatar gardenerID={observation.gardenerID}/>
          </Field>
          <Field>
            {observation.description}
          </Field>
          <Field>
            {observation.tags.map((tag, index) => <ObservationCardTagBadge key={index} tag={tag} />)}
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}

ObservationCard.propTypes = {
  observation: PropTypes.object,
};
