import React from 'react';
import { Container } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';

/**
 * Seed section
 */
function ChapterTimelines() {

  return (
    <div id="chapter-timelines" className="gray-background">
      <Container className="py-3">
        <h2>Chapter Timelines</h2>
        <Documentation>
          <p>(When completed, this section will provide timelines for varietals and crops that aggregate individual planting data. It will show typical times for starting, harvesting, and pulling.  ) </p>
        </Documentation>
      </Container>
    </div>
  );
}

export default ChapterTimelines;
