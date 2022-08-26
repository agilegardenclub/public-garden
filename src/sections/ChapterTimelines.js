import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { ChapterTimelineByVariety } from '../components/ChapterTimelineByVariety';
import { ChapterTimelineByCrop } from '../components/ChapterTimelineByCrop';

function ChapterTimelines() {
  return (
    <div id="chapter-timelines" className="gray-background">
      <Container className="py-3">
        <h2>Chapter Timelines</h2>
        <Documentation heading="About chapter timelines">
          <p>These timelines provide historical data on the start dates, transplant dates, first harvest dates, and end dates associated with plant varieties and crops. Data on chapter timing data can be useful when planning a garden with a
            new plant variety, or to compare your own timing with others in your chapter to look for potential improvements. </p>
        </Documentation>
        <div className="light-gray-background">
          <Tabs defaultActiveKey="By Crop" className="mb-3">
            <Tab eventKey="By Crop" title="By Crop">
              <ChapterTimelineByCrop/>
            </Tab>
            <Tab eventKey="By Variety" title="By Variety">
              <ChapterTimelineByVariety/>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default ChapterTimelines;
