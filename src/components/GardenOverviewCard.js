import React from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { GardenOverview } from '../datamodel/GardenOverview';
import { PictureCarousel } from './PictureCarousel';
import { ClimateVictoryGardenBadge } from './ClimateVictoryGardenBadge';
import { getGardenName } from './GardenName';
import { Avatar } from './Avatar';
import { getCropIDs, getGardenID, getGardenYears } from '../datamodel/GardenInfo';
import { GardenCropBadge } from './GardenCropBadge';
import { OutcomeChart } from './OutcomeChart';

export function GardenOverviewCard() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const gardenOverview = new GardenOverview(gardenName);
  const chapterName = gardenOverview.chapterName();
  const year = `(${gardenOverview.currentYear()})`;
  const pictureData = gardenOverview.pictures();
  const gardenYears = getGardenYears(gardenID);
  const outcomeData = gardenOverview.outcomeData();
  const size = gardenOverview.currentSize();
  const beds = gardenOverview.currentBeds();
  const totalPlantings = gardenOverview.totalPlantings();
  const cropIDs = getCropIDs(gardenID);
  const cropBadges = cropIDs.map((cropID, index) => <GardenCropBadge key={index} gardenID={gardenID} cropID={cropID}/>);
  const gardeners = gardenOverview.currentGardenerIDs()
    .map((gardenerID, index) => <Avatar key={index} gardenerID={gardenerID} role={gardenOverview.gardenerRole(gardenerID)} />);
  const lastUpdate = gardenOverview.lastUpdate();
  const climateVictoryGarden = gardenOverview.climateVictoryGarden();
  return (
    <Card>
      <Card.Header><h5>Garden: {gardenName} {climateVictoryGarden && <ClimateVictoryGardenBadge />}</h5></Card.Header>
      <PictureCarousel pictureData={pictureData} />
      <Card.Body>
        <Stack gap={1}>
          <Field title="Chapter:">{chapterName}</Field>
          <Field title="Years:">{gardenYears.join(', ')}</Field>
          <Field title="Current Size:">{size} sq ft. {year}</Field>
          <Field title="Number of beds:">{beds} {year}</Field>
          <Field title="Total Plantings:">{totalPlantings}</Field>
          <Field title="Crops:">{cropBadges} </Field>
          <Field title="Outcomes:"> </Field>
          <OutcomeChart outcomeData={outcomeData}/>
          <Field title="Gardener(s):">
            <Row>
              {gardeners.map((gardener, index) => <Col key={index}>{gardener}</Col>)}
            </Row>
          </Field>
          <Field title="Last Update:">{lastUpdate}</Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
