import React from 'react';
import { Container, Row, Col, Card, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Documentation from './Documentation';

const Field = (props) => (
  <div>
    <small>{props.title}</small>
    {props.children}
  </div>
);

Field.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

/**
 * Overview of the gardener and the chapter.
 */
function Overview() {

  return (
    <div className="gray-background">
      <Container>
        <h2>Overview</h2>
        <Documentation>
          <p>To provide gardeners with locally relevant information, each AGC garden is assigned to a single <b>Chapter</b>. Chapters are defined by AGC administrators, and consist of one or more continguous Zip Codes. Insights about seeds, plants, pests, weather, outcomes, and so forth are shared between gardens in the same chapter. </p>
        </Documentation>
        <Row>
          <Col md className="pb-3">
            <Card>
              <Card.Header>Garden: 45ght3cf</Card.Header>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/garden.jpg`}/>
              <Card.Body>
                <Stack gap={1}>
                  <Field title='Age:'>
                    <p>4 seasons</p>
                  </Field>
                  <Field title='Size:'>
                    <p>300 sq ft. (2022)</p>
                  </Field>
                  <Field title='Number of beds:'>
                    <p>12 (2022)</p>
                  </Field>
                  <Field title='Plants:'>
                    <p>Asparagus, Broccoli, Carrots, Echinacea, Kale, Potatoes, Radish, Turnip, Watermelon, Zucchini (2022)</p>
                  </Field>
                  <Field title='Gardener(s):'>
                    <p>J.D., K.A. (2022)</p>
                  </Field>
                  <Field title='Last Updated:'>
                    <p>March 12, 2022</p>
                  </Field>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <Card.Header>Chapter: Bellingham, WA</Card.Header>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bellingham-chapter-map.png`}/>
              <Card.Body>
                <Stack gap={1}>
                  <Field title='Age:'>
                    <p>6 seasons</p>
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
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default Overview;
