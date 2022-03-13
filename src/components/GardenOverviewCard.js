import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { gardenOverview } from '../datamodel/GardenOverview';
import { PictureCarousel } from './PictureCarousel';
import { ClimateVictoryGardenBadge } from './ClimateVictoryGardenBadge';
import { GardenerLabel } from './GardenerLabel';

export function GardenOverviewCard() {
  const year = `(${gardenOverview.currentYear()})`;
  const name = gardenOverview.name();
  const pictureData = gardenOverview.pictures();
  const age = gardenOverview.age();
  const size = gardenOverview.currentSize();
  const beds = gardenOverview.currentBeds();
  const seeds = gardenOverview.currentSeedNames().join(', ');
  const gardeners = gardenOverview.currentGardenerIDs().map((gardenerID, index) => <GardenerLabel key={index} gardenerID={gardenerID}/>);
  const lastUpdate = gardenOverview.lastUpdate();
  const climateVictoryGarden = gardenOverview.climateVictoryGarden();
  return (
    <Card>
      <Card.Header><h5>Garden: {name} {climateVictoryGarden && <ClimateVictoryGardenBadge/> }</h5> </Card.Header>
      <PictureCarousel pictureData={pictureData}/>
      <Card.Body>
        <Stack gap={1}>
          <Field title='Age:'>
            {age} season(s)
          </Field>
          <Field title='Size:'>
            {size} sq ft. {year}
          </Field>
          <Field title='Number of beds:'>
            {beds} {year}
          </Field>
          <Field title='Seeds:'>
            {seeds} {year}
          </Field>
          <Field title='Gardener(s):'>
            {gardeners} {year}
          </Field>
          <Field title='Last Update:'>
            {lastUpdate}
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
