import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { cropData } from '../datamodel/data/cropData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { NestedDropdown } from './NestedDropdown';
import { getOutcomeDataSet } from '../datamodel/OutcomeDataInfo';
import { getChapterID, getGardenID } from '../datamodel/GardenInfo';
import { getGardenIDs } from '../datamodel/ChapterInfo';
import { YearsSelector } from './YearsSelector';
import { getCropTimelineCounts, hasTimelineCounts } from '../datamodel/TimelineDataInfo';
import { TimelineChart } from './TimelineChart';
import { cropComparator, getCropName } from '../datamodel/CropInfo';

export function ChapterTimelineByCrop() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const chapterID = getChapterID(gardenID);
  const chapterGardenIDs = getGardenIDs(chapterID);
  const plantingHistory = new PlantingHistory({ gardenName, cropData, familyData });
  let initialYears = plantingHistory.getPlantingYears();
  const currYear = new Date().getFullYear();
  initialYears = initialYears.filter(year => year <= currYear);
  const outcomeDataSet = getOutcomeDataSet(chapterID, initialYears);
  const cropIDs = plantingHistory.cropIDs().sort(cropComparator);
  const menuItems = cropIDs.map(cropID => ({ type: 'item', label: getCropName(cropID), eventKey: cropID }));
  const initialCropID = 'crop-45';
  const initialCropName = getCropName(initialCropID);
  const initialChapterTimelineData = getCropTimelineCounts(initialCropID, initialYears, outcomeDataSet, chapterGardenIDs);
  const initialGardenTimelineData = getCropTimelineCounts(initialCropID, initialYears, outcomeDataSet, [gardenID]);
  const [selectedCropID, setCropID] = useState(initialCropID);
  const [selectedCropName, setCropName] = useState(initialCropName);
  const [chapterTimelineData, setChapterTimelineData] = useState(initialChapterTimelineData);
  const [gardenTimelineData, setGardenTimelineData] = useState(initialGardenTimelineData);
  const [years, setYears] = useState(initialYears);
  const onSelectCrop = (eventKey) => {
    if (eventKey) {
      setCropID(eventKey);
      setCropName(getCropName(eventKey));
      setChapterTimelineData(getCropTimelineCounts(eventKey, years, outcomeDataSet, chapterGardenIDs));
      setGardenTimelineData(getCropTimelineCounts(eventKey, years, outcomeDataSet, [gardenID]));
    }
  };
  const onSetYears = (selectedYears) => {
    setYears(() => selectedYears);
    setChapterTimelineData(getCropTimelineCounts(selectedCropID, selectedYears, outcomeDataSet, chapterGardenIDs));
    setGardenTimelineData(getCropTimelineCounts(selectedCropID, selectedYears, outcomeDataSet, [gardenID]));
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Crop:</Col> <Col><NestedDropdown title={selectedCropName} items={menuItems} onSelect={onSelectCrop}/></Col></Row>
      <Row className="mb-3"><Col xs={2}>Select Year(s):</Col> <Col><YearsSelector years={initialYears} onSetYears={onSetYears}/></Col></Row>

      <Row>
        <Col>
          <h6 className="text-center">Garden Outcomes</h6>
          {hasTimelineCounts(gardenTimelineData) ?
            <TimelineChart timelineData={gardenTimelineData}/> :
            <div>No outcome data available.</div>}
        </Col>
        <Col>
          <h6 className="text-center">Chapter Outcomes</h6>
          {hasTimelineCounts(chapterTimelineData) ?
            <TimelineChart timelineData={chapterTimelineData}/> :
            <div>No outcome data available.</div>}
        </Col>
      </Row>
    </Container>
  );
}
