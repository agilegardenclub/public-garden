import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { gardenData } from '../datamodel/gardenData';
import { plantingBackgroundClass } from './PlantingBackgroundClass';
import { TimelinePlantBadge } from './TimelinePlantBadge';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';

const firstColWidth = 3;

// eslint-disable-next-line no-unused-vars
function Header() {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}><small>Bed</small></Col>
      <Col xs={firstColWidth} style={{ padding: 0 }}><small>Plant</small></Col>
      <Col>
        <Row>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            .map((month, index) => <Col key={index} style={{ padding: 0 }} xs={1}><small>{month}</small></Col>)}
        </Row>
      </Col>
    </Row>
  );
}

function PlantRow({ plantingData }) {
  const plantBadge = <TimelinePlantBadge plantingData={plantingData}/>;
  return (
    <Row className={'mb-1'}>
      <Col style={{ padding: 0 }} xs={3}>{plantBadge}</Col>
      <Col xs={9}>
        <Row>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .map((currMonth, index) => <MonthCol key={index} currMonth={currMonth} plantingData={plantingData}/>)}
        </Row>
      </Col>
    </Row>
  );
}

PlantRow.propTypes = {
  plantingData: PropTypes.any,
};

function MonthCol({ currMonth, plantingData }) {
  return (
    <Col>
      <Row>
        {[1, 2, 3, 4]
          .map((weekOfMonth, index) => <WeekCol key={index} currWeek={(currMonth * 4) + weekOfMonth} plantingData={plantingData}/>)}
      </Row>
    </Col>
  );
}

MonthCol.propTypes = {
  currMonth: PropTypes.number,
  plantingData: PropTypes.any,
};

function WeekCol({ currWeek, plantingData }) {
  const bg = plantingBackgroundClass(currWeek, plantingData);
  const border = (((currWeek % 4) === 0) && currWeek < 48) ? 'border-end' : '';
  return (
    <Col xs={3} className={`${bg} ${border}`} style={{ height: '24px', minWidth: '1px', padding: 0 }}/>
  );
}

WeekCol.propTypes = {
  currWeek: PropTypes.number,
  plantingData: PropTypes.any,
};

function BedRow({ bedData }) {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}>{bedData.bedID}</Col>
      <Col>
        {bedData.bedPlantings.map((plantingData, index) => <PlantRow key={index} plantingData={plantingData}/>)}
      </Col>
    </Row>
  );
}

BedRow.propTypes = {
  bedData: PropTypes.object,
};

function BedHistoryNav({ bedHistoryData }) {
  const bedIDs = bedHistoryData.map(entry => entry.bedID);
  return (
    <Nav variant="pills" className="flex-column">
      {bedIDs.map((bedID, index) => <Nav.Item key={index}><Nav.Link eventKey={bedID}>{bedID}</Nav.Link></Nav.Item>)}
    </Nav>
  );
}

BedHistoryNav.propTypes = {
  bedHistoryData: PropTypes.array,
};

function BedHistoryTabContent({ bedHistoryData }) {
  // eslint-disable-next-line no-unused-vars
  const bedIDs = bedHistoryData.map(entry => entry.bedID);
  return (
    <Tab.Content>
      {bedIDs.map((bedID, index) => <Tab.Pane key={index} eventKey={bedID}>{bedID}</Tab.Pane>)}
    </Tab.Content>
  );
}

BedHistoryTabContent.propTypes = {
  bedHistoryData: PropTypes.array,
};

// eslint-disable-next-line no-unused-vars
export function BedHistoryGrid() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  // eslint-disable-next-line no-unused-vars
  const bedHistoryData = plantingHistory.bedHistoryData();
  console.log('Bed History Data', bedHistoryData);
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <BedHistoryNav bedHistoryData={bedHistoryData}/>
          </Col>
          <Col sm={11}>
            <BedHistoryTabContent bedHistoryData={bedHistoryData}/>
          </Col>
        </Row>
      </Tab.Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                stuff here
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                2stuff here
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
