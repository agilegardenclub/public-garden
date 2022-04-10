import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gardenData } from '../datamodel/gardenData';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { plantNameShort } from '../datamodel/PlantInfo';

export function TimelineByPlant() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
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
