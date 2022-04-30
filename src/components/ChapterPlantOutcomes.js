import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NestedDropdown } from './NestedDropdown';
import { outcomeInfo } from '../datamodel/OutcomeInfo';

export function ChapterPlantOutcomes() {
  const outcomeCategories = outcomeInfo.categories();
  const [selectedCategory, setCategory] = useState(outcomeCategories[0]);
  const [outcomeData, setOutcomeData] = useState(outcomeInfo.getData(outcomeCategories[0]));
  const onSelect = (eventKey) => {
    if (eventKey) {
      setCategory(eventKey);
      setOutcomeData(outcomeInfo.getData(eventKey));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Outcome:</Col> <Col><NestedDropdown title={selectedCategory} items={outcomeCategories} onSelect={onSelect}/></Col></Row>
      <OutcomePanel data={outcomeData}/>
    </Container>
  );
}
