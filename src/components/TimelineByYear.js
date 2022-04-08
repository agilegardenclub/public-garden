import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { gardenData } from '../datamodel/gardenData';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { NestedDropdown } from './NestedDropdown';
import { TimelineData } from './TimelineData';

export function TimelineByYear() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  const years = plantingHistory.years();
  const menuItems = years.map(year => ({ type: 'item', label: year, eventKey: year }));
  const [selectedYear, setYear] = useState();
  const [historyData, setHistoryData] = useState();
  const onSelect = (eventKey) => {
    if (eventKey) {
      setYear(eventKey);
      setHistoryData(plantingHistory.historyData({ year: parseInt(eventKey, 10) }));
    }
  };
  console.log('timelinebyyear', selectedYear, historyData);
  return (
    <Container>
      <Row><NestedDropdown title={selectedYear || 'Select Year'} items={menuItems} onSelect={onSelect}/></Row>
      { historyData && <TimelineData historyData={historyData}/> }
    </Container>
  );
}
