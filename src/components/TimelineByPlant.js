import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { plantData } from '../datamodel/data/plantData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { plantNameShort } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

export function TimelineByPlant() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, plantData, plantFamilyData });
  const menuItems = plantingHistory.plantDropdownMenuItems();
  const initialPlantID = menuItems[0].items[0].eventKey;
  const initialPlantName = menuItems[0].items[0].label;
  const [selectedPlantName, setPlantName] = useState(initialPlantName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ plantID: initialPlantID }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setPlantName(plantNameShort(eventKey));
      setHistoryData(plantingHistory.historyData({ plantID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Plant:</Col> <Col><NestedDropdown title={selectedPlantName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
