import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';

/**
 * Seed section
 */
function ChapterPlantHistory() {

  return (
    <div id="chapter-plant-history" className="gray-background">
      <Container className="py-3">
        <h2>Chapter Plant History</h2>
        <Documentation>
          <p>This section provides aggregate information about plants from Chapter members.</p>
        </Documentation>
        <Tabs defaultActiveKey="Outcomes" className="mb-3">
          <Tab eventKey="Outcomes" title="Outcomes">
            (outcomes)
          </Tab>
          <Tab eventKey="Timing" title="Timing">
            (Timing)
          </Tab>
          <Tab eventKey="Seeds" title="Seeds">
            (Seeds)
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ChapterPlantHistory;
