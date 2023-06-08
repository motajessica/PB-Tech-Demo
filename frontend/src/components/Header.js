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
import { faSearch, faUser, faHeart, faCartShopping, faStore } from "@fortawesome/free-solid-svg-icons";

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
            className="mr-sm-2 me-2 ms-5 search-bar"
            
          />
          <Button className="me-2 nav-bar-btn-search">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </Button>
        </Form>
      </div>    
      <div className="d-flex">
      <Nav.Link
          className="fw-bold me-1 text-white me-5"
          href="#"
        >
          <FontAwesomeIcon icon={faUser} className="me-1" />
          Sign In or Create Account
        </Nav.Link>

        <Nav.Link
          className="fw-bold me-1 text-white me-5"
          href="#"
        >
          <FontAwesomeIcon icon={faHeart} className="me-1" />
          Wish list
        </Nav.Link>

        <Nav.Link
          className="fw-bold me-1 text-white"
          href="#"
        >
          <FontAwesomeIcon icon={faCartShopping} className="me-1" />
        </Nav.Link>
      </div>
      </Navbar>

      <div>
      <Navbar className="px-4 nav-bar-bg nav-bar_links light justify-content-between" expand="lg">   
      <div>
        <Nav>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto fw-bold">
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
            <Nav.Link className="text-white fw-bold" as={Link} to="/brands">
              Brands
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/promos">
              Promos
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/deals">
              Deals
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/deals">
              New
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/deals">
              Tax Free
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/custom_search/step1">
              Find your perfect laptop
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Nav>
      </div>
      <div className="d-flex">
        <Nav.Link className="text-white me-4 fw-bold" as={Link} to="/deals">
            Orders
        </Nav.Link>
        <Nav.Link className="text-white me-4 fw-bold" as={Link} to="/deals">
            Returns
        </Nav.Link>
        <Nav.Link className="text-white me-4 fw-bold" as={Link} to="/deals">
            Help
        </Nav.Link>
        <Nav.Link
          className="me-1 text-white fw-bold"
          href="#"
          >
          <FontAwesomeIcon icon={faStore} className="me-1"/>
          Stores
        </Nav.Link>

      </div>

       </Navbar>
    </div>
</div>

  );
}

export default Header;
