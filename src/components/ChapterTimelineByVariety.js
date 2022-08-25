import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { getVarietyName } from '../datamodel/VarietyInfo';
import { NestedDropdown } from './NestedDropdown';
import { getOutcomeDataSet } from '../datamodel/OutcomeDataInfo';
import { getChapterID, getGardenID } from '../datamodel/GardenInfo';
import { getGardenIDs } from '../datamodel/ChapterInfo';
import { YearsSelector } from './YearsSelector';
import { getVarietyTimelineCounts, hasTimelineCounts } from '../datamodel/TimelineDataInfo';
import { TimelineChart } from './TimelineChart';

export function ChapterTimelineByVariety() {
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
  const initialChapterTimelineData = getVarietyTimelineCounts(initialVarietyID, initialYears, outcomeDataSet, chapterGardenIDs);
  const initialGardenTimelineData = getVarietyTimelineCounts(initialVarietyID, initialYears, outcomeDataSet, [gardenID]);
  const [selectedVarietyID, setVarietyID] = useState(initialVarietyID);
  const [selectedVarietyName, setVarietyName] = useState(initialVarietyName);
  const [chapterTimelineData, setChapterTimelineData] = useState(initialChapterTimelineData);
  const [gardenTimelineData, setGardenTimelineData] = useState(initialGardenTimelineData);
  console.log(gardenTimelineData);
  const [years, setYears] = useState(initialYears);
  const onSelectVariety = (eventKey) => {
    if (eventKey) {
      setVarietyID(eventKey);
      setVarietyName(getVarietyName(eventKey));
      setChapterTimelineData(getVarietyTimelineCounts(eventKey, years, outcomeDataSet, chapterGardenIDs));
      setGardenTimelineData(getVarietyTimelineCounts(eventKey, years, outcomeDataSet, [gardenID]));
    }
  };
  const onSetYears = (selectedYears) => {
    setYears(() => selectedYears);
    setChapterTimelineData(getVarietyTimelineCounts(selectedVarietyID, selectedYears, outcomeDataSet, chapterGardenIDs));
    setGardenTimelineData(getVarietyTimelineCounts(selectedVarietyID, selectedYears, outcomeDataSet, [gardenID]));
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={varietyMenuItems} onSelect={onSelectVariety}/></Col></Row>
      <Row className="mb-3"><Col xs={2}>Select Year(s):</Col> <Col><YearsSelector years={initialYears} onSetYears={onSetYears}/></Col></Row>

      <Row>
        <Col>
          <h6 className="text-center">Garden Outcomes</h6>
          <TimelineChart/>
        </Col>
        <Col>
          <h6 className="text-center">Chapter Outcomes</h6>
          {hasTimelineCounts(chapterTimelineData) ?
            JSON.stringify(chapterTimelineData) :
            <div>No outcome data available.</div>}
        </Col>
      </Row>
    </Container>
  );
}
