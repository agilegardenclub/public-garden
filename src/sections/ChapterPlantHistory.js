import React from 'react';
import { Container } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { OutcomeChart } from '../components/OutcomeChart';

/**
 * Seed section
 */
function ChapterPlantHistory() {

  return (
    <div id="chapter-plant-history" className="gray-background">
      <Container className="py-3">
        <h2>Chapter Plant History</h2>
        <Documentation>
          <p>(This section provides aggregate information about plants that combine chapter and gardener data.) </p>
        </Documentation>
        <OutcomeChart/>
      </Container>
    </div>
  );
}

export default ChapterPlantHistory;
