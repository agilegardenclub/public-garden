import React from 'react';
import { Container } from 'react-bootstrap';
import Documentation from './Documentation';

/**
 * Overview of the gardener and the chapter.
 */
function Overview() {

  return (
    <div className='gray-background'>
      <Container>
        <h2>Overview</h2>
        <Documentation heading="About the overview">
          <p>The overview section provides summary information about this garden and its chapter</p>
          <p>The Agile Garden Club organization is divided into a set of local <b>Chapters</b>. </p>
        </Documentation>
      </Container>
    </div>
  );
}

export default Overview;
