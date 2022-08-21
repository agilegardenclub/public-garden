import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { getVarietyName } from '../datamodel/VarietyInfo';
import { NestedDropdown } from './NestedDropdown';
import { getOutcomeDataSet, getVarietyOutcomeCounts, hasOutcomeCounts } from '../datamodel/OutcomeDataInfo';
import { getChapterID, getGardenID } from '../datamodel/GardenInfo';
import { OutcomeChart } from './OutcomeChart';
import { getGardenIDs } from '../datamodel/ChapterInfo';
import { YearsSelector } from './YearsSelector';

export function OutcomeByVariety() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const chapterID = getChapterID(gardenID);
  const chapterGardenIDs = getGardenIDs(chapterID);
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  let initialYears = plantingHistory.getPlantingYears();
  const currYear = new Date().getFullYear();
  initialYears = initialYears.filter(year => year <= currYear);
  const outcomeDataSet = getOutcomeDataSet(chapterID, initialYears);
  const varietyMenuItems = plantingHistory.varietyDropdownMenuItems(outcomeDataSet);
  const initialVarietyID = varietyMenuItems[0].items[0].eventKey;
  const initialVarietyName = varietyMenuItems[0].items[0].label;
  const initialChapterOutcomeData = getVarietyOutcomeCounts(initialVarietyID, initialYears, outcomeDataSet, chapterGardenIDs);
  const initialGardenOutcomeData = getVarietyOutcomeCounts(initialVarietyID, initialYears, outcomeDataSet, [gardenID]);
  const [selectedVarietyID, setVarietyID] = useState(initialVarietyID);
  const [selectedVarietyName, setVarietyName] = useState(initialVarietyName);
  const [chapterOutcomeData, setChapterOutcomeData] = useState(initialChapterOutcomeData);
  const [gardenOutcomeData, setGardenOutcomeData] = useState(initialGardenOutcomeData);
  const [years, setYears] = useState(initialYears);
  const onSelectVariety = (eventKey) => {
    if (eventKey) {
      setVarietyID(eventKey);
      setVarietyName(getVarietyName(eventKey));
      setChapterOutcomeData(getVarietyOutcomeCounts(eventKey, years, outcomeDataSet, chapterGardenIDs));
      setGardenOutcomeData(getVarietyOutcomeCounts(eventKey, years, outcomeDataSet, [gardenID]));
    }
  };
  const onSetYears = (selectedYears) => {
    setYears(() => selectedYears);
    setChapterOutcomeData(getVarietyOutcomeCounts(selectedVarietyID, selectedYears, outcomeDataSet, chapterGardenIDs));
    setGardenOutcomeData(getVarietyOutcomeCounts(selectedVarietyID, selectedYears, outcomeDataSet, [gardenID]));
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={varietyMenuItems} onSelect={onSelectVariety}/></Col></Row>
      <Row className="mb-3"><Col xs={2}>Select Year(s):</Col> <Col><YearsSelector years={initialYears} onSetYears={onSetYears}/></Col></Row>

      <Row>
        <Col>
          <h6 className="text-center">Garden Outcomes</h6>
          {hasOutcomeCounts(gardenOutcomeData) ?
            <OutcomeChart outcomeData={gardenOutcomeData}/> :
            <div>No outcome data available.</div>}
        </Col>
        <Col>
          <h6 className="text-center">Chapter Outcomes</h6>
          {hasOutcomeCounts(chapterOutcomeData) ?
            <OutcomeChart outcomeData={chapterOutcomeData}/> :
            <div>No outcome data available.</div>}
        </Col>
      </Row>
    </Container>
  );
}
