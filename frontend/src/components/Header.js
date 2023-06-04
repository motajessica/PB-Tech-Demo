import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Header() {   
  return (
    <Navbar  className="px-4 py-3 nav-bar-bg">
    <Navbar.Brand className="fw-bolder" href="/">
      <img className="nav-logo" src="https://www.pbtech.co.nz/imglib/dd/pb-logo-alt.svg" alt="..." />
    </Navbar.Brand>

    <Nav className="ms-auto">

      
    <Form inline>
      <div className=''>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </div>
        </Form>

        <Link to="/page0">Page 0</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>

      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link className="fw-bold btn btn-outline-primary btn-sm me-1" href="/login">
        Login
      </Nav.Link>
      <Nav.Link className="fw-bold btn btn-primary btn-sm text-white" href="/register">
        Register
      </Nav.Link>
      
    </Nav>
  </Navbar>
  
  ) 
}
 

export default Header;