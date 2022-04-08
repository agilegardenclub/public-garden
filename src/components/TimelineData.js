import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlantingData } from './PlantRow';

function Header() {
  return (
    <Row>
      <Col xs={1} className='p-0'><small>Year</small></Col>
      <Col xs={1} className='p-0'><small>Bed</small></Col>
      <Col xs={3} className='p-0'><small>Plant</small></Col>
      <Col>
        <Row>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            .map((month, index) => <Col key={index} className='p-0' xs={1}><small>{month}</small></Col>)}
        </Row>
      </Col>
    </Row>
  );
}

function BedData({ bedData }) {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}>{bedData.bed}</Col>
      <Col>
        {bedData.plantingData.map((plantingData, index) => <PlantingData key={index} plantingData={plantingData}/>)}
      </Col>
    </Row>
  );
}

BedData.propTypes = {
  bedData: PropTypes.object,
};

function YearData({ yearData }) {
  return (
    <Row className='pb-3'>
      <Col xs={1}>
        {yearData.year}
      </Col>
      <Col xs={11}>
        {yearData.bedData.map((bedData, index) => <BedData key={index} bedData={bedData}/>)}
      </Col>
    </Row>
  );
}

YearData.propTypes = {
  yearData: PropTypes.object,
};

export function TimelineData({ historyData }) {
  console.log('timelinedata', historyData);
  return (
    <Container>
      <Row>
        <Header/>
      </Row>
      { historyData.map((yearData, index) => <YearData key={index} yearData={yearData} />) }
    </Container>
  );
}

TimelineData.propTypes = {
  historyData: PropTypes.object,
};
