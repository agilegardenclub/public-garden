import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { getVarietyNameShort } from '../datamodel/VarietyInfo';
import { NestedDropdown } from './NestedDropdown';
import { getGardenOutcomeData } from '../datamodel/OutcomeDataInfo';
import { getGardenID } from '../datamodel/GardenInfo';
import { OutcomeChart } from './OutcomeChart';

export function OutcomeByVariety() {
  const gardenName = getGardenName();
  const initialOutcomeData = getGardenOutcomeData(getGardenID(gardenName));
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const menuItems = plantingHistory.varietyDropdownMenuItems();
  const initialVarietyID = menuItems[0].items[0].eventKey;
  console.log(initialVarietyID);
  const initialVarietyName = menuItems[0].items[0].label;
  const [selectedVarietyName, setVarietyName] = useState(initialVarietyName);
  const [outcomeData, setOutcomeData] = useState(initialOutcomeData);
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVarietyName(getVarietyNameShort(eventKey));
      setOutcomeData(initialOutcomeData);
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { outcomeData && <OutcomeChart outcomeData={outcomeData} /> }
    </Container>
  );
}
