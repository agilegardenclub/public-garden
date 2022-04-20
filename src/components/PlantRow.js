import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { TimelinePlantBadge } from './TimelinePlantBadge';
import { plantingBackgroundClass } from './PlantingBackgroundClass';
import { getObservations, getNotifications } from '../datamodel/ObservationInfo';
import { TimelineObservationPin } from './TimelineObservationPin';
import { TimelineNotificationPin } from './TimelineNotificationPin';

export function PlantRowNameHeaderCol() {
  return (
    <Col xs={3} style={{ padding: 0 }}><small>Plant</small></Col>
  );
}

export function PlantRowBedHeaderCol() {
  return (
    <Col xs={3} style={{ padding: 0 }}><small>Bed</small></Col>
  );
}

export function PlantRowMonthHeaderCol() {
  return (
    <Col>
      <Row>
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          .map((month, index) => <Col key={index} style={{ padding: 0 }} xs={1}><small>{month}</small></Col>)}
      </Row>
    </Col>
  );
}

function MonthCol({ currMonth, plantingData }) {
  return (
    <Col xs={1} className="p-0">
      <Row className="mx-auto">
        {[1, 2, 3, 4]
          .map((weekOfMonth, index) => <WeekCol key={index} currWeek={(currMonth * 4) + weekOfMonth} plantingData={plantingData}/>)}
      </Row>
    </Col>
  );
}

MonthCol.propTypes = {
  currMonth: PropTypes.number,
  plantingData: PropTypes.any,
};

function WeekCol({ currWeek, plantingData }) {
  const bg = plantingBackgroundClass(currWeek, plantingData);
  // eslint-disable-next-line no-unused-vars
  const observations = getObservations(currWeek, plantingData);
  const notifications = getNotifications(currWeek, plantingData);
  const border = (((currWeek % 4) === 0) && currWeek < 48) ? 'border-end' : '';
  const classNameString = `p-0 ${bg} ${border}`;
  const style = { height: '24px', minWidth: '1px' };
  return (
    <Col xs={3} className={classNameString} style={style}>
      {observations.length > 0 ? <TimelineObservationPin observations={observations}/> : <div></div>}
      {notifications.length > 0 ? <TimelineNotificationPin notifications={notifications}/> : <div></div>}
    </Col>
  );
}

WeekCol.propTypes = {
  currWeek: PropTypes.number,
  plantingData: PropTypes.any,
};

export function PlantRow({ plantingData }) {
  const plantBadge = <TimelinePlantBadge plantingData={plantingData}/>;
  return (
    <Row className={'mb-1'}>
      <Col style={{ padding: 0 }} xs={3}>{plantBadge}</Col>
      <Col xs={9}>
        <Row>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .map((currMonth, index) => <MonthCol key={index} currMonth={currMonth} plantingData={plantingData}/>)}
        </Row>
      </Col>
    </Row>
  );
}

PlantRow.propTypes = {
  plantingData: PropTypes.any,
};

export function PlantingData({ plantingData }) {
  const plantBadge = <TimelinePlantBadge plantingData={plantingData}/>;
  return (
    <Row className={'mb-1'}>
      <Col xs={3} className="p-0">{plantBadge}</Col>
      <Col xs={9} className="p-0">
        <Row>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .map((currMonth, index) => <MonthCol key={index} currMonth={currMonth} plantingData={plantingData}/>)}
        </Row>
      </Col>
    </Row>
  );
}

PlantingData.propTypes = {
  plantingData: PropTypes.any,
};
