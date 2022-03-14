import React from 'react';
import { Container } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';

/**
 * Seed section
 */
function Seeds() {

  return (
    <div id="seeds" className="gray-background">
      <Container className="py-3">
        <h2>Seed Summaries</h2>
        <Documentation>
          <p>(This section could provide information about experiences with seeds in a manner different from the badges.) </p>
        </Documentation>
      </Container>
    </div>
  );
}

export default Seeds;
