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

function SingleBedHistory({ bedHistoryData, bedID }) {
  const yearData = bedHistoryData.find(element => element.bedID === bedID).yearData;
  return (
    yearData.map((singleYearData, index) => <SingleBedYear key={index} singleYearData={singleYearData}/>)
  );
}

SingleBedHistory.propTypes = {
  bedHistoryData: PropTypes.array,
  bedID: PropTypes.string,
};

function SingleBedYear({ singleYearData }) {
  return (
    <Row className='pb-3'>
      <Col xs={1}>
        {singleYearData.year}
      </Col>
      <Col xs={11}>
        {singleYearData.bedData.map((plantingData, index) => <Row key={index}><Col><PlantRow plantingData={plantingData}/></Col></Row>)}
      </Col>
    </Row>
  );
}

SingleBedYear.propTypes = {
  singleYearData: PropTypes.object,
};

// eslint-disable-next-line no-unused-vars
export function PlantHistoryGrid() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  const bedHistoryData = plantingHistory.bedHistoryData();
  const plantHistoryData = plantingHistory.plantHistoryData();
  console.log('plantHistoryData', plantHistoryData);
  // eslint-disable-next-line no-unused-vars
  const [selectedPlantID, setPlantID] = useState();
  const [selectedPlantName, setPlantName] = useState('Plants');
  const onSelect = (eventKey) => { setPlantID(eventKey); if (eventKey) setPlantName(plantNameShort(eventKey)); console.log(eventKey); };
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
          <SingleBedHistory bedID={'01'} bedHistoryData={bedHistoryData}/>
        </Col>
      </Row>
    </Container>
  );
}
