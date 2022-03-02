import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { greenColorCode } from './Constants';

/**
 * Display the "NavBar" at the top of the page.
 */
function Overview() {
  const navbarStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container>Agile Garden Club: Public Garden View</Container>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#overview" style={navbarStyle}>Overview</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#plan" style={navbarStyle}>Plan</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#seeds" style={navbarStyle}>Seeds</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Overview;
