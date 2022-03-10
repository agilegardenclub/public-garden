import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { gardenOverview } from '../datamodel/GardenOverview';

export function GardenOverviewCard() {
  const year = `(${gardenOverview.currentYear()})`;
  const name = gardenOverview.name();
  const picture = gardenOverview.pictures()[0];
  const age = gardenOverview.age();
  const size = gardenOverview.currentSize();
  const beds = gardenOverview.currentBeds();
  const seeds = gardenOverview.currentSeedNames().toString();
  const gardeners = gardenOverview.currentGardenerNames().toString();
  const lastUpdate = gardenOverview.lastUpdate();
  return (
    <Card>
      <Card.Header>Garden: {name}</Card.Header>
      <Card.Img variant="top" src={picture}/>
      <Card.Body>
        <Stack gap={1}>
          <Field title='Age:'>
            <p>{age} season(s)</p>
          </Field>
          <Field title='Size:'>
            <p>{size} sq ft. {year}</p>
          </Field>
          <Field title='Number of beds:'>
            <p>{beds} {year}</p>
          </Field>
          <Field title='Seeds:'>
            <p>{seeds} {year}</p>
          </Field>
          <Field title='Gardener(s):'>
            <p>{gardeners} {year}</p>
          </Field>
          <Field title='Last Update:'>
            <p>{lastUpdate}</p>
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
