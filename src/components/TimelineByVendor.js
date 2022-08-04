import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getVendorName } from '../datamodel/VarietyInfo';
import { getGardenName } from './GardenName';

function vendorComparator(vendorID1, vendorID2) {
  const name1 = getVendorName(vendorID1);
  const name2 = getVendorName(vendorID2);
  // Sometimes vendorName is called without a vendorID, resulting in null.
  return (!name1 || !name2) ? 0 : name1.localeCompare(name2);
}

export function TimelineByVendor() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const vendorIDs = plantingHistory.vendorIDs().sort(vendorComparator);
  const menuItems = vendorIDs.map(vendorID => ({ type: 'item', label: getVendorName(vendorID), eventKey: vendorID }));
  const initialVendorID = vendorIDs[0];
  const initialVendorName = getVendorName(initialVendorID);
  const [selectedVendorName, setVendorName] = useState(initialVendorName);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ vendorID: vendorIDs[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVendorName(getVendorName(eventKey));
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
