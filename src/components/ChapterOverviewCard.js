import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { chapterOverview } from '../datamodel/ChapterOverview';
import { ZoneBadge } from './ZoneBadge';
import { PictureCarousel } from './PictureCarousel';
import { RatingList } from './RatingList';

export function ChapterOverviewCard() {
  const name = chapterOverview.name();
  const pictureData = chapterOverview.pictures();
  const age = chapterOverview.age();
  const zipCodes = chapterOverview.zipCodes().join(', ');
  const members = chapterOverview.members();
  const gardens = chapterOverview.gardens();
  const zoneBadges = chapterOverview.zoneIDs().map((zoneID, index) => ZoneBadge({ zoneID, index }));
  const popularRatings = chapterOverview.ratings('popular');
  const outcomeRatings = chapterOverview.ratings('outcome');
  const localRatings = chapterOverview.ratings('local');
  return (
    <Card>
      <Card.Header><h5>Chapter: {name}</h5></Card.Header>
      <PictureCarousel pictureData={pictureData}/>
      <Card.Body>
        <Stack gap={1}>
          <Field title='Age:'>
            {age} seasons
          </Field>
          <Field title='Zip Codes:'>
            {zipCodes}
          </Field>
          <Field title='Hardiness Zone(s):'>
            {zoneBadges}
          </Field>
          <Field title='Number of members:'>
            {members}
          </Field>
          <Field title='Number of gardens:'>
            {gardens}
          </Field>
          <Field title='Top 5 Seeds (popularity):' direction='vertical'>
            <RatingList ratingData={popularRatings}/>
          </Field>
          <Field title='Top 5 Seeds (outcome):' direction='vertical'>
            <RatingList ratingData={outcomeRatings}/>
          </Field>
          <Field title='Top 5 Seeds (locally sourced):' direction='vertical'>
            <RatingList ratingData={localRatings}/>
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
