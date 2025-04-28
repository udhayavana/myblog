import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">WeatherApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          
          <Nav>
            <NavDropdown title="Settings" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/preferences">Preferences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
