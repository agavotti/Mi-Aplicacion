
import React from 'react';
import {Link} from "react-router-dom"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Menu() {
  
    return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Cerebro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/AltaGen">AltaGen</Nav.Link>
              <Nav.Link as={Link} to="/AltaGen2">AltaGen2</Nav.Link>
              <Nav.Link as={Link} to="/stats">Stats</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/productos/Lista">Listar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  
}

export default Menu;
