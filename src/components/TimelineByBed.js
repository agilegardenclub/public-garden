import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gardenData } from '../datamodel/data/gardenData';
import { plantData } from '../datamodel/data/plantData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getGardenName } from './GardenName';

export function TimelineByBed() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, plantData, plantFamilyData });
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
      <Row className="mb-3"><Col xs={2}>Select Bed:</Col> <Col><NestedDropdown title={selectedBed} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
