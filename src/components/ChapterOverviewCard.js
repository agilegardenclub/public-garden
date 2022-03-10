import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { chapterOverview } from '../datamodel/ChapterOverview';

export function ChapterOverviewCard() {
  const name = chapterOverview.name();
  const picture = chapterOverview.pictures()[0];
  const age = chapterOverview.age();
  const zipCodes = chapterOverview.zipCodes().join(', ');
  const zones = chapterOverview.zoneIDs().join(', ');
  const members = chapterOverview.members();
  const gardens = chapterOverview.gardens();
  const popularSeeds = chapterOverview.popularSeeds().join(', ');
  const outcomeSeeds = chapterOverview.outcomeSeeds().join(', ');
  const localSeeds = chapterOverview.localSeeds().join(', ');
  return (
    <Card>
      <Card.Header>Chapter: {name}</Card.Header>
      <Card.Img variant="top" src={picture}/>
      <Card.Body>
        <Stack gap={1}>
          <Field title='Age:'>
            <p>{age} seasons</p>
          </Field>
          <Field title='Zip Codes:'>
            <p>{zipCodes}</p>
          </Field>
          <Field title='Hardiness Zone(s):'>
            <p>{zones}</p>
          </Field>
          <Field title='Number of members:'>
            <p>{members}</p>
          </Field>
          <Field title='Number of gardens:'>
            <p>{gardens}</p>
          </Field>
          <Field title='Top 10 Seeds (popularity):'>
            <p>{popularSeeds}</p>
          </Field>
          <Field title='Top 10 Seeds (outcome):'>
            <p>{outcomeSeeds}</p>
          </Field>
          <Field title='Top 10 Seeds (locally sourced)'>
            <p>{localSeeds}</p>
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
