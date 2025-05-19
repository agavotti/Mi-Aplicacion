import React, { useContext } from 'react';
import { Link, useNavigate  } from "react-router-dom"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import AuthContext from '../Context/AuthContext';
import PropTypes from 'prop-types';

function Menu({ statusLogin }) {
  const styles = {
    colorNegro: {
      color: "black"
    }
  }
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    context.logoutUser();       
    navigate("/login");        
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Cerebro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {
            !context.userLogin &&
            <>
              <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }
          {
            context.userLogin &&
            <>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/AltaGen">AltaGen</Nav.Link>
              <Nav.Link as={Link} to="/AltaGen2">AltaGen2</Nav.Link>
              <Nav.Link as={Link} to="/stats">Stats</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/productos/Lista">Listar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleLogout}>Salir</Nav.Link>
            </>
          }
        </Nav>
      </Navbar.Collapse>
      {
        context.userLogin &&
        <div  style={styles.colorNegro}  >Hola {context.userInfo.name}</div>
      }
    </Navbar>
  );
}

Menu.propTypes = {
  statusLogin: PropTypes.any
};

export default Menu;
