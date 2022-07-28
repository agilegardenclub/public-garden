import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { ZoneBadge } from './ZoneBadge';
import { PictureCarousel } from './PictureCarousel';
import { ChapterCropBadge } from './ChapterCropBadge';
import { getChapterCropIDs } from '../datamodel/ChapterInfo';

export function ChapterOverviewCard() {
  const name = chapterOverview.name();
  const pictureData = chapterOverview.pictures();
  const zipCodes = chapterOverview.zipCodes().join(', ');
  const members = chapterOverview.members();
  const gardens = chapterOverview.gardens();
  const gardenYears = chapterOverview.gardenYears();
  const totalPlantings = chapterOverview.totalPlantings();
  const chapterID = chapterOverview.chapterID;
  const cropIDs = getChapterCropIDs(chapterID);
  const cropBadges = cropIDs.map((cropID, index) => <ChapterCropBadge key={index} chapterID={chapterID} cropID={cropID}/>);
  const zoneBadges = chapterOverview.zoneIDs()
    .map((zoneID, index) => ZoneBadge({ zoneID, index }));
  return (
    <Card>
      <Card.Header><h5>Chapter: {name}</h5></Card.Header>
      <PictureCarousel pictureData={pictureData}/>
      <Card.Body>
        <Stack gap={1}>
          <Field title="Years with garden(s):">{gardenYears.join(', ')}</Field>
          <Field title="Zip Codes:">{zipCodes}</Field>
          <Field title="Hardiness Zone(s):">{zoneBadges}</Field>
          <Field title="Number of members:">{members}</Field>
          <Field title="Number of gardens:">{gardens}</Field>
          <Field title="Total Plantings:">{totalPlantings}</Field>
          <Field title="Crops:">{cropBadges}</Field>
          {/*
          <Field title='Top 5 Plants (popularity):' direction='vertical'>
            <PlantPopularityList ratingData={popularPlantRatings}/>
          </Field>
          <Field title='Top 5 Plants (yield):' direction='vertical'>
            <PlantRatingList ratingData={yieldPlantRatings}/>
          </Field>
          <Field title='Top 5 Plants (local seeds):' direction='vertical'>
            <PlantRatingList ratingData={localPlantRatings}/>
          </Field>
          */}
        </Stack>
      </Card.Body>
    </Card>
  );
}
