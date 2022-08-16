import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { TimelineData } from './TimelineData';
import { getGardenName } from './GardenName';
import { getVarietyNameShort } from '../datamodel/VarietyInfo';
import { NestedDropdown } from './NestedDropdown';

export function OutcomeByVariety() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const menuItems = plantingHistory.varietyDropdownMenuItems();
  const initialVarietyID = menuItems[0].items[0].eventKey;
  const initialVarietyName = menuItems[0].items[0].label;
  const [selectedVarietyName, setVarietyName] = useState(initialVarietyName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ varietyID: initialVarietyID }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVarietyName(getVarietyNameShort(eventKey));
      setHistoryData(plantingHistory.historyData({ varietyID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
