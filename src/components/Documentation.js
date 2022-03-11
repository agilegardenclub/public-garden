import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function Documentation({ heading, variant = 'success', children }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div style={{ paddingTop: '1em' }}>
        <Container>
          <Alert variant={variant} onClose={() => setShow(false)} dismissible>
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
  variant: PropTypes.string,
  children: PropTypes.any,
};
