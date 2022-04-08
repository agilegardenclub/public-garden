import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlantingData } from './PlantRow';
import { addPlantingWeeks } from '../datamodel/PlantingWeek';

function Header() {
  return (
    <Row>
      <Col xs={1} className=""><small>Year</small></Col>
      <Col xs={11}>
        <Row>
          <Col xs={1} className=""><small>Bed</small></Col>
          <Col xs={11}>
            <Row>
              <Col xs={3} className="p-0"><small>Plant</small></Col>
              <Col xs={9} className="p-0">
                <Row>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    .map((month, index) => <Col key={index} className="" xs={1}><small>{month}</small></Col>)}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function BedData({ bedData }) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="">{bedData.bedID}</Col>
      <Col xs={11} className="">
        {bedData.plantingData.map((plantingData, index) => <PlantingData key={index} plantingData={plantingData}/>)}
      </Col>
    </Row>
  );
}

BedData.propTypes = {
  bedData: PropTypes.object,
};

function YearData({ yearData }) {
  yearData.bedData.forEach(bedData => bedData.plantingData.forEach(planting => addPlantingWeeks(planting, yearData.year)));
  return (
    <Row className="pb-3">
      <Col xs={1} className="">
        {yearData.year}
      </Col>
      <Col xs={11} className="">
        {yearData.bedData.map((bedData, index) => <BedData key={index} bedData={bedData}/>)}
      </Col>
    </Row>
  );
}

YearData.propTypes = {
  yearData: PropTypes.object,
};

export function TimelineData({ historyData }) {
  return (
    <>
      <Header/>
      {historyData.map((yearData, index) => <YearData key={index} yearData={yearData}/>)}
    </>
  );
}

TimelineData.propTypes = {
  historyData: PropTypes.array,
};
