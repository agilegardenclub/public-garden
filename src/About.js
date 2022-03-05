import React from 'react';
import { Container, Alert } from 'react-bootstrap';

/**
 * Overview of the gardener and the chapter.
 */
function About() {

  return (
    <div style={{ paddingTop: '1em' }}>
      <Container>
        <Alert variant="success">
          <Alert.Heading>About the public garden view</Alert.Heading>
          <p>Welcome to the Agile Garden Club (AGC) public garden view.</p>
          <p>The owner of a garden representation in AGC has the option to make the garden &quot;public&quot;, which results in the system generating a publicly accessable web page with read-only information about the garden.</p>
        </Alert>
      </Container>
    </div>
  );
}

export default About;
