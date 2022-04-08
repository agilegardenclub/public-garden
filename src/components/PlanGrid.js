import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { gardenData } from '../datamodel/gardenData';
import { PlantRow, PlantRowMonthHeaderCol, PlantRowNameHeaderCol } from './PlantRow';

function Header() {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0, width: '50px' }}><small>Bed</small></Col>
      <PlantRowNameHeaderCol/>
      <PlantRowMonthHeaderCol />
    </Row>
  );
}

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

export function PlanGrid({ year }) {
  const jennaGardenData = gardenData[0];
  const jennaHistory = jennaGardenData.history;
  const yearData = jennaHistory.find(object => (object.year === year));
  const plantingData = yearData.plantingData;
  // plantingData.forEach(bedData => bedData.bedPlantings.forEach(planting => addPlantingWeeks(planting, year)));
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
