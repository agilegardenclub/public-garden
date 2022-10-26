import React from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { GardenOverview } from '../datamodel/GardenOverview';
import { PictureCarousel } from './PictureCarousel';
import { ClimateVictoryGardenBadge } from './ClimateVictoryGardenBadge';
import { getGardenName } from './GardenName';
import { Avatar } from './Avatar';
import { getCropIDs, getGardenID, getGardenYears, getSeedsSavedPlantingData, getSeedsToSharePlantingData } from '../datamodel/GardenInfo';
import { GardenCropBadge } from './GardenCropBadge';
import { TimelinePlantBadge } from './TimelinePlantBadge';

export function GardenOverviewCard() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const gardenOverview = new GardenOverview(gardenName);
  const chapterName = gardenOverview.chapterName();
  const year = `(${gardenOverview.currentYear()})`;
  const pictureData = gardenOverview.pictures();
  const gardenYears = getGardenYears(gardenID);
  const size = gardenOverview.currentSize();
  const beds = gardenOverview.currentBeds();
  const totalPlantings = gardenOverview.totalPlantings();
  const cropIDs = getCropIDs(gardenID);
  const seedsSavedPlantingBadges = getSeedsSavedPlantingData(gardenID).map((plantingData, index) => <TimelinePlantBadge key={index} plantingData={plantingData}/>);
  const seedsToSharePlantingBadges = getSeedsToSharePlantingData(gardenID).map((plantingData, index) => <TimelinePlantBadge key={index} plantingData={plantingData}/>);
  const cropBadges = cropIDs.map((cropID, index) => <GardenCropBadge key={index} gardenID={gardenID} cropID={cropID}/>);
  const gardeners = gardenOverview.currentGardenerIDs()
    .map((gardenerID, index) => <Avatar key={index} gardenerID={gardenerID} role={gardenOverview.gardenerRole(gardenerID)} />);
  const lastUpdate = gardenOverview.lastUpdate();
  const climateVictoryGarden = gardenOverview.climateVictoryGarden();
  return (
    <Card>
      <Card.Header><h5>Garden Overview </h5></Card.Header>
      <PictureCarousel pictureData={pictureData} />
      <Card.Body>
        <Stack gap={1}>
          <Field title="Garden name:">{gardenName}</Field>
          <Field title="Chapter membership:">{chapterName}</Field>
          <Field title="Years:">{gardenYears.join(', ')}</Field>
          <Field title="Current Size:">{size} sq ft. {year}</Field>
          <Field title="Number of beds:">{beds} {year}</Field>
          <Field title="Total Plantings:">{totalPlantings}</Field>
          <Field title="Crops:">{cropBadges} </Field>
          <Field title="Saved Seeds:">{seedsSavedPlantingBadges} </Field>
          <Field title="Seeds to Share:">{seedsToSharePlantingBadges} </Field>
          <Field title="Gardener(s):">
            <Row>
              {gardeners.map((gardener, index) => <Col key={index}>{gardener}</Col>)}
            </Row>
          </Field>
          {climateVictoryGarden && <Field title="Flair:"><ClimateVictoryGardenBadge /></Field>}
          <Field title="Last Update:">{lastUpdate}</Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
