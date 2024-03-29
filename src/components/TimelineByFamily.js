import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getFamilyCommonName } from '../datamodel/VarietyInfo';
import { getGardenName } from './GardenName';

export function TimelineByFamily() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const familyIDs = plantingHistory.familyIDs();
  let menuItems = familyIDs.map(familyID => ({ type: 'item', label: getFamilyCommonName(familyID, true), eventKey: familyID }));
  menuItems = menuItems.sort((a, b) => a.label.localeCompare(b.label));
  const initialFamilyID = familyIDs[0];
  const initialFamilyName = getFamilyCommonName(initialFamilyID, true);
  const [selectedFamilyName, setFamilyName] = useState(initialFamilyName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ familyID: familyIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setFamilyName(getFamilyCommonName(eventKey, true));
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
