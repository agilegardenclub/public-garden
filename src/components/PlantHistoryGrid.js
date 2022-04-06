import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { gardenData } from '../datamodel/gardenData';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { PlantRow, PlantRowMonthHeaderCol, PlantRowNameHeaderCol } from './PlantRow';
import { NestedDropdown } from './NestedDropdown';
import { plantNameShort } from '../datamodel/PlantInfo';

// eslint-disable-next-line no-unused-vars
function Header() {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0 }}><small>Plant</small></Col>
      <Col xs={1} style={{ padding: 0 }}><small>Year</small></Col>
      <Col>
        <Row>
          <PlantRowNameHeaderCol/>
          <PlantRowMonthHeaderCol/>
        </Row>
      </Col>
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

function SinglePlantHistory({ plantHistoryData, plantID }) {
  const yearData = plantHistoryData.find(element => element.plantID === plantID).yearData;
  return (
    yearData.map((singleYearData, index) => <SinglePlantYear key={index} singleYearData={singleYearData}/>)
  );
}

SinglePlantHistory.propTypes = {
  plantHistoryData: PropTypes.array,
  plantID: PropTypes.string,
};

function SinglePlantYear({ singleYearData }) {
  return (
    <Row className='pb-3'>
      <Col xs={1}>
        {singleYearData.year}
      </Col>
      <Col xs={11}>
        {singleYearData.plantData.map((plantingData, index) => <Row key={index}><Col><PlantRow plantingData={plantingData}/></Col></Row>)}
      </Col>
    </Row>
  );
}

SinglePlantYear.propTypes = {
  singleYearData: PropTypes.object,
};

export function PlantHistoryGrid() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  const plantHistoryData = plantingHistory.plantHistoryData();
  const [selectedPlantID, setPlantID] = useState();
  const [selectedPlantName, setPlantName] = useState('Plants');
  const onSelect = (eventKey) => { if (eventKey) { setPlantName(plantNameShort(eventKey)); setPlantID(eventKey); } };
  const plantItems = plantingHistory.plantDropdownMenuItems();
  return (
    <Container>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col xs={1} className="p-0">
          <NestedDropdown title={selectedPlantName} items={plantItems} onSelect={onSelect} />
        </Col>
        <Col xs={11} className="p-0">
          { selectedPlantID ? <SinglePlantHistory plantID={selectedPlantID} plantHistoryData={plantHistoryData}/> : <div></div> }
        </Col>
      </Row>
    </Container>
  );
}
