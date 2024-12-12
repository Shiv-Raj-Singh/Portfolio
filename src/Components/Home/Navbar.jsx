import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // For navigation between pages
import "./NavbarComponent.css"; // Import custom styles

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-dark navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" className="nav-link-custom">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
