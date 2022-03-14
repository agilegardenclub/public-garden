import React from 'react';
import { Container, Navbar, Nav, Popover, OverlayTrigger, Button, Image } from 'react-bootstrap';

/**
 * Display the footer.
 * Uses the preval macro so that the "deployed" version of the site has a Last update timestamp.
 */

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Coming Soon!</Popover.Header>
    <Popover.Body>
      We expect the Agile Garden Club Member App to be available by the end of 2022.
    </Popover.Body>
  </Popover>
);

const AppStoreLink = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="success"><Image height='50px' src={`${process.env.PUBLIC_URL}/img/download-from-app-store.png`} /></Button>
  </OverlayTrigger>
);

const PlayStoreLink = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="success"><Image height='50px' src={`${process.env.PUBLIC_URL}/img/download-from-google-play.png`} /></Button>
  </OverlayTrigger>
);

function Bottom() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>&copy; 2022 Agile Garden Club</Navbar.Brand>
        <Nav>
          <Nav.Item><AppStoreLink/></Nav.Item>
          <Nav.Item><PlayStoreLink/></Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Bottom;
