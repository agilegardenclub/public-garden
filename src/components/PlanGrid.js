import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BedOccupancyMap } from './BedOccupancyMap';
import { Colors } from '../Theme.js';
import { GardenSeedBadge } from './GardenSeedBadge';

const firstColWidth = 3;

function Header() {
  return (
    <Row>
      <Col xs={firstColWidth} style={{ padding: 0 }}/>
      <Col>
        <Row>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            .map((month, index) => <Col key={index} style={{ padding: 0 }} xs={1}>{month}</Col>)}
        </Row>
      </Col>
    </Row>
  );
}

function MonthCol({ monthNum, bedOccupancyMap }) {
  const bgColor = (weekNum) => (bedOccupancyMap.isOccupied(monthNum, weekNum) ? Colors.blue : Colors.white);
  return (
    <Col xs={1} style={{ padding: 0 }}>
      <Row>
        {[1, 2, 3, 4]
          .map((weekNum, index) => <Col key={index} xs={3} style={{ height: '24px', backgroundColor: `${bgColor(weekNum)}`, minWidth: '1px', padding: 0 }}/>)}
      </Row>
    </Col>
  );
}

MonthCol.propTypes = {
  monthNum: PropTypes.number,
  bedOccupancyMap: PropTypes.any,
};

function PlantRow({ seedID, startDate, endDate }) {
  const bedOccupancyMap = new BedOccupancyMap(startDate, endDate);
  const seedBadge = <GardenSeedBadge seedID={seedID}/>;
  return (
    <Row>
      <Col xs={firstColWidth}>{seedBadge}</Col>
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
  seedID: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

// eslint-disable-next-line no-unused-vars
export function PlanGrid({ year }) {
  return (
    <Container>
      <Header/>
      <PlantRow seedID="seed-01" startDate={new Date('1/12/2022')} endDate={new Date('2/14/2022')}/>
      <PlantRow seedID="seed-02" startDate={new Date('2/15/2022')} endDate={new Date('3/14/2022')}/>
    </Container>
  );
}

PlanGrid.propTypes = {
  year: PropTypes.number,
};
