import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { PlantHistoryGrid } from '../components/PlantHistoryGrid';
import { TimelineByYear } from '../components/TimelineByYear';
import { TimelineByBed } from '../components/TimelineByBed';

/**
 * Planting section
 */
function PlantingTimelines() {

  return (
    <div id="plans">
      <Container className="py-3">
        <h2>Planting Timelines</h2>
        <Documentation>
          <p>This section provides a perspective on the garden as a timeline that shows what plants are in each bed of the garden for each week of the year.</p>
          <p>Click on the plant badge for details regarding the planting.</p>
          <p>The timeline provides a colored bar indicating the various planting states for the year. A light color indicates the plant is in the greenhouse. A dark color indicates that the plant is in the garden. If the color is striped, it means the plant is being harvested.</p>
          <p>This coloring scheme enables you to easily answer questions like: Was the plant ever in the green house? (Answer: Yes, if there is some portion of the bar that is light colored). Did the plant spend its entire life in the greenhouse? (Answer: Yes, if the entire bar is light colored.) Did the plant die without ever yielding a harvest? (Answer: Yes, if no portion of the bar is striped.) </p>
        </Documentation>
        <Tabs defaultActiveKey="By Year" className="mb-3">
          <Tab eventKey="By Year" title="By Year">
            <TimelineByYear />
          </Tab>
          <Tab eventKey="By Bed" title="By Bed">
            <TimelineByBed />
          </Tab>
          <Tab eventKey="By Plant" title="By Plant">
            <PlantHistoryGrid />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default PlantingTimelines;
