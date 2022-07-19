import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { plantData } from '../datamodel/data/plantData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { vendorName } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

export function TimelineByVendor() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, plantData, plantFamilyData });
  const familyIDs = plantingHistory.plantFamilyIDs();
  const vendorIDs = plantingHistory.vendorIDs();
  const menuItems = vendorIDs.map(vendorID => ({ type: 'item', label: vendorName(vendorID), eventKey: vendorID }));
  // const initialFamilyID = familyIDs[0];
  const initialVendorID = vendorIDs[0];
  // const initialFamilyName = plantFamilyCommonName(initialFamilyID, true);
  const initialVendorName = vendorName(initialVendorID);
  // const [selectedFamilyName, setFamilyName] = useState(initialFamilyName);
  const [selectedVendorName, setVendorName] = useState(initialVendorName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ familyID: familyIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVendorName(vendorName(eventKey));
      setHistoryData(plantingHistory.historyData({ vendorID: eventKey }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Vendor:</Col> <Col><NestedDropdown title={selectedVendorName} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
