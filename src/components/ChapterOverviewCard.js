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
            <p>{age} seasons</p>
          </Field>
          <Field title='Zip Codes:'>
            <p>{zipCodes}</p>
          </Field>
          <Field title='Hardiness Zone(s):'>
            {zoneBadges}
          </Field>
          <Field title='Number of members:'>
            <p>{members}</p>
          </Field>
          <Field title='Number of gardens:'>
            <p>{gardens}</p>
          </Field>
          <Field title='Top 5 Seeds (popularity):'>
            <RatingList ratingData={popularRatings}/>
            <p></p>
          </Field>
          <Field title='Top 5 Seeds (outcome):'>
            <RatingList ratingData={outcomeRatings}/>
            <p></p>
          </Field>
          <Field title='Top 5 Seeds (locally sourced)'>
            <RatingList ratingData={localRatings}/>
            <p></p>
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
