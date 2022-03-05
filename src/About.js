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
          <Alert.Heading>About Agile Garden Club and the Public Garden View</Alert.Heading>
          <p>Welcome to this example of an Agile Garden Club public garden view.</p>
          <p><b>Agile Garden Club</b> is an organization providing technology for collaborative planning and management of home gardens. We are developing mobile-first applications to support not just garden planning, but also to support efficient and effective sharing of data and insights amongst gardeners in the same geographic region. Our support for collaboration and &quot;local communities of practice&quot; sets AGC apart from other garden planning systems.</p>
          <p>The <b>Public Garden View</b> is an option available to owners of a garden represented in AGC. Enabling this view tells the system to generate a web page like this one. The gardeners can share its unique URL with others to provide details about their garden without them having to download our app.</p>
        </Alert>
      </Container>
    </div>
  );
}

export default About;
