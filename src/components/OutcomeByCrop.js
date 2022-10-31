import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { NestedDropdown } from './NestedDropdown';
import { getOutcomeDataSet, getCropOutcomeCounts, hasOutcomeCounts } from '../datamodel/OutcomeDataInfo';
import { getChapterID, getGardenID } from '../datamodel/GardenInfo';
import { OutcomeChart } from './OutcomeChart';
import { getGardenIDs } from '../datamodel/ChapterInfo';
import { YearsSelector } from './YearsSelector';
import { cropComparator, getCropName } from '../datamodel/CropInfo';

export function OutcomeByCrop() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const chapterID = getChapterID(gardenID);
  const chapterGardenIDs = getGardenIDs(chapterID);
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  let initialYears = plantingHistory.getPlantingYears();
  const currYear = new Date().getFullYear();
  initialYears = initialYears.filter(year => year <= currYear);
  const outcomeDataSet = getOutcomeDataSet(chapterID, initialYears);
  const cropIDs = plantingHistory.cropIDs().sort(cropComparator);
  const menuItems = cropIDs.map(cropID => ({ type: 'item', label: getCropName(cropID), eventKey: cropID }));
  const initialCropID = 'crop-07'; // broccoli is good for the demo.
  const initialCropName = getCropName(initialCropID);
  const initialChapterOutcomeData = getCropOutcomeCounts(initialCropID, initialYears, outcomeDataSet, chapterGardenIDs);
  const initialGardenOutcomeData = getCropOutcomeCounts(initialCropID, initialYears, outcomeDataSet, [gardenID]);
  const [selectedCropID, setCropID] = useState(initialCropID);
  const [selectedCropName, setCropName] = useState(initialCropName);
  const [chapterOutcomeData, setChapterOutcomeData] = useState(initialChapterOutcomeData);
  const [gardenOutcomeData, setGardenOutcomeData] = useState(initialGardenOutcomeData);
  const [years, setYears] = useState(initialYears);
  const onSelectVariety = (eventKey) => {
    if (eventKey) {
      setCropID(eventKey);
      setCropName(getCropName(eventKey));
      setChapterOutcomeData(getCropOutcomeCounts(eventKey, years, outcomeDataSet, chapterGardenIDs));
      setGardenOutcomeData(getCropOutcomeCounts(eventKey, years, outcomeDataSet, [gardenID]));
    }
  };
  const onSetYears = (selectedYears) => {
    setYears(() => selectedYears);
    setChapterOutcomeData(getCropOutcomeCounts(selectedCropID, selectedYears, outcomeDataSet, chapterGardenIDs));
    setGardenOutcomeData(getCropOutcomeCounts(selectedCropID, selectedYears, outcomeDataSet, [gardenID]));
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Crop:</Col> <Col><NestedDropdown title={selectedCropName} items={menuItems} onSelect={onSelectVariety}/></Col></Row>
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
