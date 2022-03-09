import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Documentation(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div style={{ paddingTop: '1em' }}>
        <Container>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            {props.heading && <Alert.Heading>{props.heading}</Alert.Heading>}
            {props.children}
          </Alert>
        </Container>
      </div>
    );
  }
  return (<div></div>);
}

Documentation.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.any,
};

export default Documentation;
