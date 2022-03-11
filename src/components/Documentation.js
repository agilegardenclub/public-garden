import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function Documentation({ heading, children }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div style={{ paddingTop: '1em' }}>
        <Container>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            {heading && <Alert.Heading>{heading}</Alert.Heading>}
            {children}
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
