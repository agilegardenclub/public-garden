import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { TimelineByYear } from '../components/TimelineByYear';
import { TimelineByBed } from '../components/TimelineByBed';
import { TimelineByPlant } from '../components/TimelineByPlant';

/**
 * Planting section
 */
function PlantingTimelines() {

  return (
    <div id="plans">
      <Container className="py-3">
        <h2>Garden Timelines</h2>
        <Documentation>
          <p>This section provides a &quot;timeline&quot; perspective on the growing season for the plants in the garden. </p>
          <p>Click on the plant badge for details regarding the planting.</p>
          <p>Each timeline consists of a colored bar indicating the various planting states for the year. A light color indicates the plant is in the greenhouse. A dark color indicates that the plant is in the garden. If the color is striped, it means the plant is being harvested.</p>
          <p>You can filter the timelines by year, by bed, and by plant. </p>
        </Documentation>
        <Tabs defaultActiveKey="By Year" className="mb-3">
          <Tab eventKey="By Year" title="By Year">
            <TimelineByYear />
          </Tab>
          <Tab eventKey="By Bed" title="By Bed">
            <TimelineByBed />
          </Tab>
          <Tab eventKey="By Plant" title="By Plant">
            <TimelineByPlant />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default PlantingTimelines;
