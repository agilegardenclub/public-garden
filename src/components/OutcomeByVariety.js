import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { varietyData } from '../datamodel/data/varietyData';
import { familyData } from '../datamodel/data/familyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { getGardenName } from './GardenName';
import { getVarietyName } from '../datamodel/VarietyInfo';
import { NestedDropdown } from './NestedDropdown';
import { getOutcomeDataSet, getVarietyOutcomeData } from '../datamodel/OutcomeDataInfo';
import { getChapterID, getGardenID } from '../datamodel/GardenInfo';
import { OutcomeChart } from './OutcomeChart';
import { getGardenIDs } from '../datamodel/ChapterInfo';

/*
  We have a set of context-sensitive menus:
    * Select chapter vs. garden (toggle). Changing selection changes the set of possible years.
    * Select year (checkboxes).  Changing selection changes the set of possible varieties.
    * Select variety (pull down). Changing selection recomputes the outcome data to display.

  It would be nice for folks to be able to "compare" outcomes by changing one value and none of the others.
  However, if outcome data is "sparse", we don't want to have to make the user "search" for a selection combination that actually yields outcome data.

  We know that there will be outcome data for all varietals if you select chapter and all years. So maybe it's not so bad to have some empty outcome possibilities?. In this case, we can just statically compute the set of years and varieties based on chapter and garden?

  We could also *always* show chapter-level and garden level. Then there's less chance of coming up empty with no outcome charts.

  We could have them side-by-side and the second one won't have a Y axis so labels appear only once? (That won't look good on mobile once stacked).
 */

export function OutcomeByVariety() {
  const gardenName = getGardenName();
  const gardenID = getGardenID(gardenName);
  const chapterID = getChapterID(gardenID);
  const chapterGardenIDs = getGardenIDs(chapterID);
  const plantingHistory = new PlantingHistory({ gardenName, varietyData, familyData });
  const initialYears = plantingHistory.getPlantingYears();
  const outcomeDataSet = getOutcomeDataSet(chapterID, initialYears);
  const varietyMenuItems = plantingHistory.varietyDropdownMenuItems(outcomeDataSet);
  const initialVarietyID = varietyMenuItems[0].items[0].eventKey;
  const initialVarietyName = varietyMenuItems[0].items[0].label;
  const initialChapterOutcomeData = getVarietyOutcomeData(initialVarietyID, initialYears, outcomeDataSet, chapterGardenIDs);
  const initialGardenOutcomeData = getVarietyOutcomeData(initialVarietyID, initialYears, outcomeDataSet, [gardenID]);
  const [selectedVarietyName, setVarietyName] = useState(initialVarietyName);
  const [chapterOutcomeData, setChapterOutcomeData] = useState(initialChapterOutcomeData);
  const [gardenOutcomeData, setGardenOutcomeData] = useState(initialGardenOutcomeData);
  const [years, setYears] = useState(initialYears);
  const onSelectVariety = (eventKey) => {
    if (eventKey) {
      setVarietyName(getVarietyName(eventKey));
      setYears(years);
      setChapterOutcomeData(getVarietyOutcomeData(eventKey, years, outcomeDataSet, chapterGardenIDs));
      setGardenOutcomeData(getVarietyOutcomeData(eventKey, years, outcomeDataSet, [gardenID]));
    }
  };
  return (
    <Container>
      <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={varietyMenuItems} onSelect={onSelectVariety}/></Col></Row>
      <Row>
        <Col>
          <h6 className="text-center">Garden Outcomes</h6>
          {gardenOutcomeData && <OutcomeChart outcomeData={gardenOutcomeData}/>}
        </Col>
        <Col>
          <h6 className="text-center">Chapter Outcomes</h6>
          {chapterOutcomeData && <OutcomeChart outcomeData={chapterOutcomeData}/>}
        </Col>
      </Row>
    </Container>
  );
}
