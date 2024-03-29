import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { cropComparator, getCropName } from '../datamodel/CropInfo';
import { getGardenName } from './GardenName';

export function TimelineByCrop() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
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
