import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { PlanGrid } from '../components/PlanGrid';

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
        </Documentation>
        <Tabs defaultActiveKey="2021" className="mb-3">
          <Tab eventKey="2021" title="2021">
            <PlanGrid year={2021}/>
          </Tab>
          <Tab eventKey="2022" title="2022">
            2021 Garden Plan goes here.
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default PlantingTimelines;
