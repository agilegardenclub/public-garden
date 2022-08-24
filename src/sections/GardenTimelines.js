import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { TimelineByYear } from '../components/TimelineByYear';
import { TimelineByBed } from '../components/TimelineByBed';
import { TimelineByVariety } from '../components/TimelineByVariety';
import { TimelineByFamily } from '../components/TimelineByFamily';
import { TimelineByVendor } from '../components/TimelineByVendor';
import { TimelineByCrop } from '../components/TimelineByCrop';

/**
 * Planting section
 */
function GardenTimelines() {
  return (
    <div id="garden-timelines">
      <Container className="py-3">
        <h2>Garden Timelines</h2>
        <Documentation heading="About garden timelines">
          <p>This section provides a &quot;timeline&quot; perspective on the growing season for each planting in this garden. </p>
          <p>Click on the plant badge for details regarding each planting.</p>
          <p>Each timeline consists of a colored bar indicating the various states of a planting over the course of one year. A light color indicates the planting is in the greenhouse. A dark color indicates that the planting is in the garden. If the color is striped, it means the planting is being harvested.</p>
          <p>You can filter the timelines to display plantings by year, bed, variety, crop, family, or vendor. </p>
        </Documentation>
        <Tabs defaultActiveKey="By Year" className="mb-3">
          <Tab eventKey="By Year" title="By Year">
            <TimelineByYear />
          </Tab>
          <Tab eventKey="By Bed" title="By Bed">
            <TimelineByBed />
          </Tab>
          <Tab eventKey="By Variety" title="By Variety">
            <TimelineByVariety />
          </Tab>
          <Tab eventKey="By Crop" title="By Crop">
            <TimelineByCrop />
          </Tab>
          <Tab eventKey="By Family" title="By Family">
            <TimelineByFamily />
          </Tab>
          <Tab eventKey="By Vendor" title="By Vendor">
            <TimelineByVendor />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default GardenTimelines;
