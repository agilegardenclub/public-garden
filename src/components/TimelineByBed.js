import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gardenData } from '../datamodel/gardenData';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';

export function TimelineByBed() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  const bedIDs = plantingHistory.bedIDs();
  const menuItems = bedIDs.map(bedID => ({ type: 'item', label: `Bed ${bedID}`, eventKey: bedID }));
  const initialBed = bedIDs[0];
  const [selectedBed, setBed] = useState(initialBed);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ bedID: bedIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setBed(eventKey);
      setHistoryData(plantingHistory.historyData({ bedID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Bed:</Col> <Col><NestedDropdown title={selectedBed || 'Select Bed'} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
