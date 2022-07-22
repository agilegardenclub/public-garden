import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietalData } from '../datamodel/data/varietalData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { plantFamilyCommonName } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

export function TimelineByFamily() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietalData, plantFamilyData });
  const familyIDs = plantingHistory.plantFamilyIDs();
  const menuItems = familyIDs.map(familyID => ({ type: 'item', label: plantFamilyCommonName(familyID, true), eventKey: familyID }));
  const initialFamilyID = familyIDs[0];
  const initialFamilyName = plantFamilyCommonName(initialFamilyID, true);
  const [selectedFamilyName, setFamilyName] = useState(initialFamilyName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ familyID: familyIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setFamilyName(plantFamilyCommonName(eventKey, true));
      setHistoryData(plantingHistory.historyData({ familyID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Family:</Col> <Col><NestedDropdown title={selectedFamilyName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
