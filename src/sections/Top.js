import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { getGardenName } from '../components/GardenName';

/**
 * Display the "NavBar" at the top of the page.
 */
function Top() {
  const gardenName = getGardenName();
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://agilegardenclub.com/img/peony.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Geo Garden Club: Public Garden View ({gardenName})
        </Navbar.Brand>
        <Nav>
          <Nav.Item><Nav.Link href="#overview">Overview</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#garden-timelines">Timelines</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="#outcomes">Outcomes</Nav.Link></Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Top;
