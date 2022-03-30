import React from 'react';
import { Container } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';

/**
 * Seed section
 */
function Plants() {

  return (
    <div id="plant-summaries" className="gray-background">
      <Container className="py-3">
        <h2>Plant Summaries</h2>
        <Documentation>
          <p>(This section provides aggregate information about plants that combine chapter and gardener data.) </p>
        </Documentation>
      </Container>
    </div>
  );
}

export default Plants;