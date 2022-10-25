import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TimelinePlantBadge } from './TimelinePlantBadge';
import { plantingBackgroundClass } from './PlantingBackgroundClass';
import { getObservations, getNotifications } from '../datamodel/ObservationInfo';
import { TimelineObservationPin } from './TimelineObservationPin';
import { TimelineNotificationPin } from './TimelineNotificationPin';
import { weekOfYear } from '../datamodel/WeekOfYear';

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
          .map((weekOfMonth, index) => <WeekColTooltip key={index} currWeek={(currMonth * 4) + weekOfMonth} plantingData={plantingData}/>)}
      </Row>
    </Col>
  );
}

MonthCol.propTypes = {
  currMonth: PropTypes.number,
  plantingData: PropTypes.any,
};

function isThisWeek(currWeek, year) {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisWeek = weekOfYear(today);
  return ((currWeek === thisWeek) && (thisYear === year));
}

function WeekCol({ currWeek, plantingData }) {
  const bg = plantingBackgroundClass(currWeek, plantingData);
  const observations = getObservations(currWeek, plantingData);
  const notifications = getNotifications(currWeek, plantingData);
  let border = (((currWeek % 4) === 0) && currWeek < 48) ? 'border-end' : '';
  if (isThisWeek(currWeek, plantingData.year)) {
    border = 'border-end border-3 border-success';
  }
  const classNameString = `p-0 ${bg} ${border}`;
  const style = { height: '24px', minWidth: '1px' };
  return (
    <Col xs={3} className={classNameString} style={style}>
      {observations.length > 0 ? <TimelineObservationPin observations={observations}/> : <div></div>}
      {notifications.length > 0 ? <TimelineNotificationPin notifications={notifications}/> : <div></div>}
    </Col>
  );
}

function WeekColTooltip({ currWeek, plantingData }) {
  // eslint-disable-next-line react/display-name
  const renderTooltip = React.forwardRef((props, ref) => (
    <Tooltip id="button-tooltip" ref={ref} {...props}>
      Simple tooltip
    </Tooltip>
  ));

  return (
    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
      <WeekCol currWeek={currWeek} plantingData={plantingData}/>
    </OverlayTrigger>
  );
}

WeekCol.propTypes = {
  currWeek: PropTypes.number,
  plantingData: PropTypes.any,
};

WeekColTooltip.propTypes = {
  currWeek: PropTypes.number,
  plantingData: PropTypes.any,
  forwardRef: PropTypes.any,
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
