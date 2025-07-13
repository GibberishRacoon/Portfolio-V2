import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../assets/vector1.svg";
import Filler from "../../assets/vector2.svg";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img src={Logo} alt="Logo" height="40" />
          <span className="span-name">Filip Augustynek</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav-link">
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#portfolio">PORTFOLIO</NavLink>
            <NavDropdown title="CONTACT" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:augustynekfilip@gmail.com">
                📧 Email
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/filip-augustynek"
                target="_blank"
              >
                💼 LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/GibberishRacoon"
                target="_blank"
              >
                💻 GitHub
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="tel:+48535813201">
                📞 Phone: +48 535 813 201
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* Dodatkowe warstwy SVG jako oddzielne divy */}
        <div
          className="navbar-svg-layer"
          style={{ backgroundImage: `url(${Filler})` }}
        />
      </Container>
    </Navbar>
  );
}

export default NavBar;
