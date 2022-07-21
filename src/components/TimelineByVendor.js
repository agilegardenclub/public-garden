import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { plantData } from '../datamodel/data/plantData';
import { plantFamilyData } from '../datamodel/data/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { vendorName } from '../datamodel/PlantInfo';
import { getGardenName } from './GardenName';

function vendorComparator(vendorID1, vendorID2) {
  const name1 = vendorName(vendorID1);
  const name2 = vendorName(vendorID2);
  // Sometimes vendorName is called without a vendorID, resulting in null.
  return (!name1 || !name2) ? 0 : name1.localeCompare(name2);
}

export function TimelineByVendor() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, plantData, plantFamilyData });
  const vendorIDs = plantingHistory.vendorIDs().sort(vendorComparator);
  const menuItems = vendorIDs.map(vendorID => ({ type: 'item', label: vendorName(vendorID), eventKey: vendorID }));
  const initialVendorID = vendorIDs[0];
  const initialVendorName = vendorName(initialVendorID);
  const [selectedVendorName, setVendorName] = useState(initialVendorName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ vendorID: vendorIDs[0] }));
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
