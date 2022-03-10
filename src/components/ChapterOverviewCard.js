import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Field } from './Field';
import { chapterOverview } from '../datamodel/ChapterOverview';

export function ChapterOverviewCard() {
  const name = chapterOverview.name();
  const picture = chapterOverview.pictures()[0];
  const age = chapterOverview.age();
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
            <p>98225, 98226</p>
          </Field>
          <Field title='Hardiness Zone(s):'>
            <p>8a, 8b</p>
          </Field>
          <Field title='Number of members:'>
            <p>123</p>
          </Field>
          <Field title='Number of gardens:'>
            <p>87</p>
          </Field>
          <Field title='Top 10 Seeds (popularity):'>
            <p>Asparagus, Broccoli, Carrots, Echinacea, Kale, Potatoes, Radish, Turnip, Watermelon, Zucchini</p>
          </Field>
          <Field title='Top 10 Seeds (success):'>
            <p>Asparagus, Broccoli, Carrots, Echinacea, Kale, Potatoes, Radish, Turnip, Watermelon, Zucchini</p>
          </Field>
          <Field title='Top 10 Seeds (locally sourced)'>
            <p>Asparagus, Broccoli, Carrots, Echinacea, Kale, Potatoes, Radish, Turnip, Watermelon, Zucchini</p>
          </Field>
        </Stack>
      </Card.Body>
    </Card>
  );
}
