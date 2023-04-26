import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { GardenOverviewCard } from '../components/GardenOverviewCard';
import { ChapterOverviewCard } from '../components/ChapterOverviewCard';

/**
 * Overview of the gardener and the chapter.
 */
function Overview() {

  return (
    <div id="overview" className="gray-background">
      <Container className="py-3">
        <h2>Overview</h2>
        <Documentation>
          <p>To provide gardeners with locally relevant information, each AGC garden is assigned to a single <b>Chapter</b>. Chapters are defined by GGC administrators, and consist of one or more continguous Zip Codes. Insights about seeds, plants, pests, weather, outcomes, and so forth are shared between gardens in the same chapter. </p>
        </Documentation>
        <Row md={1} lg={2} className="g-4">
          <Col>
            <GardenOverviewCard/>
          </Col>
          <Col>
            <ChapterOverviewCard/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Overview;
