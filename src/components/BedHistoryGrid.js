import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { gardenData } from '../datamodel/gardenData';
import { plantData } from '../datamodel/plantData';
import { plantFamilyData } from '../datamodel/plantFamilyData';
import { PlantingHistory } from '../datamodel/PlantingHistory';
import { PlantRow, PlantRowMonthHeaderCol, PlantRowNameHeaderCol } from './PlantRow';

// eslint-disable-next-line no-unused-vars
function Header() {
  return (
    <Row>
      <Col xs={1} style={{ padding: 0 }}><small>Bed</small></Col>
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
export function BedHistoryGrid() {
  const plantingHistory = new PlantingHistory({ gardenData: gardenData[0], plantData, plantFamilyData });
  const bedHistoryData = plantingHistory.bedHistoryData();
  const bedIDs = plantingHistory.bedIDs();
  const [selectedBedID, setBedID] = useState(bedIDs[0]);
  return (
    <Container>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col xs={1} className="p-0">
          <Dropdown onSelect={(eventKey) => setBedID(eventKey)}>
            <Dropdown.Toggle size={'sm'}>{selectedBedID}</Dropdown.Toggle>
            <Dropdown.Menu>
              {bedIDs.map((bedID, index) => <Dropdown.Item key={index} eventKey={bedID}>{bedID}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={11} className="p-0">
          <SingleBedHistory bedID={selectedBedID} bedHistoryData={bedHistoryData}/>
        </Col>
      </Row>
    </Container>
  );
}
