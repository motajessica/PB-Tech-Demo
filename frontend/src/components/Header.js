import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <Navbar className="px-4 py-3 nav-bar-bg nav-bar_links justify-content-between" expand="lg">
      <div className="d-flex">
      <Navbar.Brand className="fw-bolder" href="/">
          <img
            className="nav-logo"
            src="https://www.pbtech.co.nz/imglib/dd/pb-logo-alt.svg"
            alt="..."
          />
        </Navbar.Brand>
        <Form className="d-flex align-items-center">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 me-2"
          />
          <Button className="me-2 nav-bar-btn-search">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </Button>
        </Form>
      </div>    
      <div className="d-flex">
      <Nav.Link
          className="fw-bold me-1 text-white"
          href="#"
        >
          <FontAwesomeIcon icon={faUser} className="me-1" />
          Sign In or Create Account
        </Nav.Link>
      </div>
        
      </Navbar>
      <Navbar className="px-4 nav-bar-bg nav-bar_links light" expand="lg">   
        <Nav>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <NavDropdown title="Departments" id="departments-dropdown">

              <NavDropdown.Item as={Link} to="/departments/computers-tablets">
                Computers & Tablets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/gaming">
                Gaming
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/departments/printers">
                Printers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white" as={Link} to="/brands">
              Brands
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/promos">
              Promos
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/deals">
              Deals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
</div>

  );
}

export default Header;
