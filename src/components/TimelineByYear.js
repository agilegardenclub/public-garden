import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';
import { getGardenName } from './GardenName';

export function TimelineByYear() {
  const gardenName = getGardenName();
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const years = plantingHistory.years();
  const menuItems = years.map(year => ({ type: 'item', label: year, eventKey: year }));
  const initialYear = `${years[0]}`;
  const [selectedYear, setYear] = useState(initialYear);
  const [historyData, setHistoryData] = useState(plantingHistory.historyData({ year: years[0] }));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setYear(eventKey);
      setHistoryData(plantingHistory.historyData({ year: parseInt(eventKey, 10) }));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Year:</Col> <Col><NestedDropdown title={selectedYear} items={menuItems} onSelect={onSelect}/></Col></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
