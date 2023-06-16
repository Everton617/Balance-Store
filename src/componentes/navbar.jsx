import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.sass'


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className='navbar-container'>
      <Navbar.Brand className='container-logo'  href="#home" ><a href="">BALANCE</a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-links">
          <Nav.Link className='link' href="#home" >HOME</Nav.Link>
          <NavDropdown className='link' title="SHOP"  id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Opção 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Opção 2</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Opção 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Opção Separada</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='link' href="#about" >ABOUT</Nav.Link>
          <NavDropdown className='link' title="BLOG"  id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Opção 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Opção 2</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Opção 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Opção Separada</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='link' href="#services" >CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};



export default NavBar;
