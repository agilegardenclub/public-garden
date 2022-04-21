import React from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { GardenOverview } from '../datamodel/GardenOverview';
import { PictureCarousel } from './PictureCarousel';
import { ClimateVictoryGardenBadge } from './ClimateVictoryGardenBadge';
import { GardenPlantBadge } from './GardenPlantBadge';
import { getGardenName } from './GardenName';
import { Avatar } from './Avatar';

export function GardenOverviewCard() {
  const gardenName = getGardenName();
  const gardenOverview = new GardenOverview(gardenName);
  const year = `(${gardenOverview.currentYear()})`;
  const gardenID = getGardenName();
  const pictureData = gardenOverview.pictures();
  const age = gardenOverview.age();
  const size = gardenOverview.currentSize();
  const beds = gardenOverview.currentBeds();
  const plantBadges = gardenOverview.currentPlantIDs()
    .map((plantID, index) => <GardenPlantBadge key={index} plantID={plantID} />);
  const gardeners = gardenOverview.currentGardenerIDs()
    .map((gardenerID, index) => <Avatar key={index} gardenerID={gardenerID} role={gardenOverview.gardenerRole(gardenerID)} />);
  const lastUpdate = gardenOverview.lastUpdate();
  const climateVictoryGarden = gardenOverview.climateVictoryGarden();
  return (
    <Card>
      <Card.Header><h5>Garden: {gardenID} {climateVictoryGarden && <ClimateVictoryGardenBadge />}</h5></Card.Header>
      <PictureCarousel pictureData={pictureData} />
      <Card.Body>
        <Stack gap={1}>
          <Field title="Age:">
            {age} season(s)
          </Field>
          <Field title="Size:">
            {size} sq ft. {year}
          </Field>
          <Field title="Number of beds:">
            {beds} {year}
          </Field>
          <Field title="Plants:">
            {plantBadges} {year}
          </Field>
          <Field title="Gardener(s):">
            <Row>
              {gardeners.map((gardener, index) => <Col key={index}>{gardener}</Col>)}
            </Row>
          </Field>
          <Field title="Last Update:">
            {lastUpdate}
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
