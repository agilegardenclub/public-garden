import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BedOccupancyMap } from './BedOccupancyMap';
import { Colors } from '../Theme.js';
import { GardenPlantBadge } from './GardenPlantBadge';
import { plantFamilyColorHex } from '../datamodel/PlantInfo';

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

function MonthCol({ monthNum, bedOccupancyMap, color }) {
  const bgColor = (weekNum) => (bedOccupancyMap.isOccupied(monthNum, weekNum) ? color : Colors.white);
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
  color: PropTypes.any,
  bedOccupancyMap: PropTypes.any,
};

function PlantRow({ plantID, startDate, endDate }) {
  const bedOccupancyMap = new BedOccupancyMap(startDate, endDate);
  const plantBadge = <GardenPlantBadge plantID={plantID}/>;
  const plantColorHex = plantFamilyColorHex(plantID);
  return (
    <Row>
      <Col xs={firstColWidth}>{plantBadge}</Col>
      <Col>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .map((monthNum, index) => <MonthCol key={index} monthNum={monthNum} bedOccupancyMap={bedOccupancyMap} color={plantColorHex}/>)}
        </Row>
      </Col>
    </Row>
  );
}

PlantRow.propTypes = {
  plantID: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

// eslint-disable-next-line no-unused-vars
export function PlanGrid({ year }) {
  return (
    <Container>
      <Header/>
      <PlantRow plantID="plant-01" startDate={new Date('1/12/2022')} endDate={new Date('2/14/2022')}/>
      <PlantRow plantID="plant-02" startDate={new Date('2/15/2022')} endDate={new Date('3/14/2022')}/>
    </Container>
  );
}

PlanGrid.propTypes = {
  year: PropTypes.number,
};
