import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { gardenData } from '../datamodel/gardenData';
import { addPlantingWeeks } from '../datamodel/PlantingWeek';
import { plantingBackgroundClass } from './PlantingBackgroundClass';
import { TimelinePlantBadge } from './TimelinePlantBadge';

const firstColWidth = 3;

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
  return (
    <Col xs={3} className={bg} style={{ height: '24px', minWidth: '1px', padding: 0 }}/>
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

// eslint-disable-next-line no-unused-vars
export function PlanGrid({ year }) {
  const jennaGardenData = gardenData[0];
  const jennaHistory = jennaGardenData.history;
  const yearData = jennaHistory.find(object => (object.year === year));
  const plantingData = yearData.plantingData;
  plantingData.forEach(bedData => bedData.bedPlantings.forEach(planting => addPlantingWeeks(planting, year)));
  return (
    <Container>
      <Header/>
      {plantingData.map((bedData, index) => <BedRow key={index} bedData={bedData}/>)}
    </Container>
  );
}

PlanGrid.propTypes = {
  year: PropTypes.number,
};
