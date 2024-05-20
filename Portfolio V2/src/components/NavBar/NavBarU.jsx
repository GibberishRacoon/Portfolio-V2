import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../assets/vector1.svg";
import Filler from "../../assets/vector2.svg";

function NavBarU() {
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
              <NavDropdown.Item href="#action/3.1">Akcja</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Inna akcja</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Coś jeszcze
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Odseparowana link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* Dodatkowe warstwy SVG jako oddzielne divy */}
        <div
          className="navbar-svg-layer"
          style={{ backgroundImage: `url(${Filler})` }}
        />
        {/* <div
          className="navbar-svg-layer"
          style={{
            backgroundImage: `url(${Filler})`,
            top: "-10%",
            left: "55%",
          }}
        /> */}
      </Container>
    </Navbar>
  );
}

export default NavBarU;
