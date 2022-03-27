import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BedOccupancyMap } from './BedOccupancyMap';
import { Colors } from '../Theme.js';
import { GardenPlantBadge } from './GardenPlantBadge';
import { plantFamilyColorHex } from '../datamodel/PlantInfo';
import { gardenData } from '../datamodel/gardenData';
import { addPlantingWeeks } from '../datamodel/PlantingWeek';

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

function PlantRowOLD({ plantID, startDate, endDate }) {
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

PlantRowOLD.propTypes = {
  plantID: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

function PlantRow({ plantData }) {
  console.log('in PlantRow', plantData);
  const plantBadge = <GardenPlantBadge plantID={plantData.plantID}/>;
  return (
    <Row>
      <Col xs={3}>{plantBadge}</Col>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 24, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
        .map((currWeek, index) => <WeekCell key={index} currWeek={currWeek} plantData={plantData} />)}
    </Row>
  );
}

PlantRow.propTypes = {
  plantData: PropTypes.any,
};

function WeekCell({ currWeek, plantData }) {
  console.log('WeekCell', currWeek, plantData);
  return (
    <div></div>
  );
}

WeekCell.propTypes = {
  currWeek: PropTypes.number,
  plantData: PropTypes.any,
};

function BedRow({ bedData }) {
  console.log('bedData', bedData);

  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}>{bedData.bedID}</Col>
      <Col>
        {bedData.bedPlantings.map((plantingData, index) => <PlantRow key={index} plantData={plantingData}/>)}
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
