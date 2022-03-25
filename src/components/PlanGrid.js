import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BedOccupancyMap } from './BedOccupancyMap';
import { Colors } from '../Theme.js';
import { GardenPlantBadge } from './GardenPlantBadge';
import { plantFamilyColorHex } from '../datamodel/PlantInfo';
import { gardenData } from '../datamodel/gardenData';

const firstColWidth = 3;

function Header() {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}>Bed</Col>
      <Col xs={firstColWidth} style={{ padding: 0 }}>Plant</Col>
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
  const harvestClass = (weekNum) => (bedOccupancyMap.isOccupied(monthNum, weekNum) ? 'daisy-dark-harvest' : '');
  return (
    <Col xs={1} style={{ padding: 0 }}>
      <Row>
        {[1, 2, 3, 4]
          .map((weekNum, index) => <Col key={index} xs={3} className={harvestClass(weekNum)} style={{ height: '24px', backgroundColor: `${bgColor(weekNum)}`, minWidth: '1px', padding: 0 }}/>)}
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
      <Col xs={1} style={{ padding: 0, width: '50px' }}></Col>
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

function BedRow({ bedData }) {

  return (
    <div>{bedData.bedID}</div>
  );
}

BedRow.propTypes = {
  bedData: PropTypes.object,
};

// eslint-disable-next-line no-unused-vars
export function PlanGrid({ year }) {
  console.log(`Plan Grid: ${year}`);
  const jennaGardenData = gardenData[0];
  console.log('Jenna Garden', jennaGardenData);
  const jennaHistory = jennaGardenData.history;
  console.log('Jenna history', jennaHistory);
  const yearData = jennaHistory.find(object => (object.year === year));
  console.log(`Data for ${year}`, yearData);
  const plantingData = yearData.plantingData;
  console.log('Planting Data', plantingData);
  return (
    <Container>
      <Header/>
      { plantingData.map((bedData, index) => <BedRow key={index} bedData={bedData}/>)}
      <PlantRow plantID="plant-100" startDate={new Date('1/12/2022')} endDate={new Date('2/14/2022')}/>
      <PlantRow plantID="plant-101" startDate={new Date('2/15/2022')} endDate={new Date('3/14/2022')}/>
    </Container>
  );
}

PlanGrid.propTypes = {
  year: PropTypes.number,
};
