import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { PlanGrid } from '../components/PlanGrid';
import { BedHistoryGrid } from '../components/BedHistoryGrid';
import { PlantHistoryGrid } from '../components/PlantHistoryGrid';

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
        <Tabs defaultActiveKey="2020" className="mb-3">
          <Tab eventKey="2020" title="2020">
            <PlanGrid year={2020}/>
          </Tab>
          <Tab eventKey="2021" title="2021">
            <PlanGrid year={2021}/>
          </Tab>
          <Tab eventKey="Bed History" title="Bed History">
            <BedHistoryGrid />
          </Tab>
          <Tab eventKey="Plant History" title="Plant History">
            <PlantHistoryGrid />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default PlantingTimelines;
