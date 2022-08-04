import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getVarietyNameShort } from '../datamodel/VarietyInfo';
import { getGardenName } from './GardenName';

// Note that, technically, "plant" refers to "Tomato", while "variety" refers to "Tomato (Big Boy)".

export function TimelineByVariety() {
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
