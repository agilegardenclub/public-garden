import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { PlanGrid } from '../components/PlanGrid';

/**
 * Planting section
 */
function Plantings() {

  return (
    <div id="plans">
      <Container className="py-3">
        <h2>Planting Summaries</h2>
        <Documentation>
          <p>(This section will provide information about the history of plans for this garden.)</p>
        </Documentation>
        <Tabs defaultActiveKey="2022" className="mb-3">
          <Tab eventKey="2020" title="2020">
            2020 Garden Plan goes here.
          </Tab>
          <Tab eventKey="2021" title="2021">
            2021 Garden Plan goes here.
          </Tab>
          <Tab eventKey="2022" title="2022">
            <PlanGrid year={2022}/>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Plantings;
