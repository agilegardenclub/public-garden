import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

/**
 * Display the "NavBar" at the top of the page.
 */
function Top() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://agilegardenclub.com/img/peony.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Agile Garden Club
          </Navbar.Brand>
          <Nav>
            <Nav.Item><Nav.Link href="#overview">Overview</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#plan">Plan</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#seeds">Seeds</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Top;
