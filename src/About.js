import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';

function DismissibleAbout() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div style={{ paddingTop: '1em' }}>
        <Container>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>About Agile Garden Club and the Public Garden View</Alert.Heading>
            <p>Welcome to this example of an Agile Garden Club public garden view.</p>
            <p><b>Agile Garden Club</b> is an organization providing technology for collaborative planning and management of home gardens. We are developing mobile-first applications to support not just garden planning, but also to support efficient
              and effective sharing of data and insights amongst gardeners in the same geographic region. Our support for collaboration, for historical insights over multiple seasons, and for &quot;local communities of practice&quot; sets AGC apart from other garden planning systems.</p>
            <p>The <b>Public Garden View</b> is an option available to owners of a garden represented in AGC. Enabling this view tells the system to generate a web page like this one. The gardeners can share its unique URL with others to provide details about a garden without requiring others to download the AGC app. The Public Garden View does not reveal the identity of gardeners or the specific location of the garden. </p>
          </Alert>
        </Container>
      </div>
    );
  }
  return (<div></div>);
}

/**
 * Overview of AGC and the Public Garden View.
 */
function About() {

  return (
    <DismissibleAbout/>
  );
}

export default About;
