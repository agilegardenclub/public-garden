import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { greenColorCode } from './Constants';

/**
 * Display the footer.
 * Uses the preval macro so that the "deployed" version of the site has a Last update timestamp.
 */
function Bottom() {
  const bottomStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' };
  return (
    <div style={bottomStyle}>
      <Container>
        <Row className="justify-content-center">
          <p>
            Agile Garden Club<br/>
            For more information, go to agilegardenclub.com<br/>
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Bottom;
