import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {   
  return (

  <Navbar className="px-4 py-3 nav-bar-bg nav-bar_links" expand="lg">
      <Navbar.Brand className="fw-bolder" href="/">
        <img className="nav-logo" src="https://www.pbtech.co.nz/imglib/dd/pb-logo-alt.svg" alt="..." />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" />

      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">

          <Link to="/page0">Page 0</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>

          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Form className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 me-2" />
            <Button className="me-2 nav-bar-btn-search">
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </Button>
          </Form>
          <Nav.Link className="fw-bold btn btn-outline-primary btn-sm me-1 text-white" href="/login">
            <FontAwesomeIcon icon={faUser} className="me-1" />
            Sign In or Create Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Nav className="ml-auto">
        <NavDropdown title="Departments" id="departments-dropdown">
          <NavDropdown.Item as={Link} to="/departments/computers-tablets">Computers & Tablets</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/departments/gaming">Gaming</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/departments/printers">Printers</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/promos">Promos</Nav.Link>
        <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
      </Nav>
    </Navbar>
  
  ) 
}
 

export default Header;