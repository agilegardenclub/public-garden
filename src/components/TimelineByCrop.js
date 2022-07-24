import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietalData } from '../datamodel/data/varietalData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getCropName } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

function cropComparator(cropID1, cropID2) {
  const name1 = getCropName(cropID1);
  const name2 = getCropName(cropID2);
  // Sometimes getCropName is called without a cropID, resulting in null.
  return (!name1 || !name2) ? 0 : name1.localeCompare(name2);
}

export function TimelineByCrop() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietalData, familyData });
  const cropIDs = plantingHistory.cropIDs().sort(cropComparator);
  const menuItems = cropIDs.map(cropID => ({ type: 'item', label: getCropName(cropID), eventKey: cropID }));
  const initialCropID = cropIDs[0];
  const initialCropName = getCropName(initialCropID);
  const [selectedCropName, setCropName] = useState(initialCropName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ cropID: cropIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setCropName(getCropName(eventKey));
      setHistoryData(plantingHistory.historyData({ cropID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Crop:</Col> <Col><NestedDropdown title={selectedCropName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
