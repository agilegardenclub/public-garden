import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietalData } from '../datamodel/data/varietalData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { varietalNameShort } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

// Note that, technically, "plant" refers to "Tomato", while "varietal" refers to "Tomato (Big Boy)".

export function TimelineByVarietal() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietalData, plantFamilyData });
  const menuItems = plantingHistory.varietalDropdownMenuItems();
  const initialVarietalID = menuItems[0].items[0].eventKey;
  const initialVarietalName = menuItems[0].items[0].label;
  const [selectedVarietalName, setVarietalName] = useState(initialVarietalName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ varietalID: initialVarietalID }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVarietalName(varietalNameShort(eventKey));
      setHistoryData(plantingHistory.historyData({ varietalID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Varietal:</Col> <Col><NestedDropdown title={selectedVarietalName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
