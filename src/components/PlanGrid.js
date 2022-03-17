import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BedOccupancyMap } from './BedOccupancyMap';

function Header() {
  return (
    <Row>
      <Col xs={1}/>
      <Col>
        <Row>
          <Col className="text-start" style={{ padding: 0 }} xs={1}>Jan</Col>
          <Col xs={1}>Feb</Col>
          <Col xs={1}>Mar</Col>
          <Col xs={1}>Apr</Col>
          <Col xs={1}>May</Col>
          <Col xs={1}>Jun</Col>
          <Col xs={1}>Jul</Col>
          <Col xs={1}>Aug</Col>
          <Col xs={1}>Sep</Col>
          <Col xs={1}>Oct</Col>
          <Col xs={1}>Nov</Col>
          <Col xs={1}>Dec</Col>
        </Row>
      </Col>
    </Row>
  );
}

function MonthCol({ monthNum, bedOccupancyMap }) {
  const bgColor = (weekNum) => (bedOccupancyMap.isOccupied(monthNum, weekNum) ? '#000' : '#FFF');
  return (
    <Col xs={1}>
      <Row>
        {[1, 2, 3, 4]
          .map((weekNum, index) => <Col key={index} xs={3} style={{ height: '20px', backgroundColor: `${bgColor(weekNum)}`, minWidth: '1px', padding: 0 }}/>)}
      </Row>
    </Col>
  );
}

MonthCol.propTypes = {
  monthNum: PropTypes.number,
  bedOccupancyMap: PropTypes.any,
};

function PlantRow({ name, startDate, endDate }) {
  const bedOccupancyMap = new BedOccupancyMap(startDate, endDate);
  return (
    <Row>
      <Col xs={1}>{name}</Col>
      <Col>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .map((monthNum, index) => <MonthCol key={index} monthNum={monthNum} bedOccupancyMap={bedOccupancyMap} />)}
        </Row>
      </Col>
    </Row>
  );
}

PlantRow.propTypes = {
  name: PropTypes.string,
  startDate: PropTypes.date,
  endDate: PropTypes.date,
};

// eslint-disable-next-line no-unused-vars
export function PlanGrid({ year }) {
  const startDate = new Date('January 12, 2022');
  const endDate = new Date('February 5, 2022');
  return (
    <Container>
      <Header/>
      <PlantRow name="Carrots" startDate={startDate} endDate={endDate}/>
    </Container>
  );
}

PlanGrid.propTypes = {
  year: PropTypes.number,
};
