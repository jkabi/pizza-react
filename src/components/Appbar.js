import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Appbar() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="h2 text-primary">
              <span>
                <i class="bi bi-yelp"></i>
                Pizza Shop
              </span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#menu" className="fw-bold">
                Menu
              </Nav.Link>
              <Nav.Link href="#mustTry" className="fw-bold">
                Must Try
              </Nav.Link>
              <Nav.Link href="#contactUs" className="fw-bold">
                contact us
              </Nav.Link>
              <Nav.Link href="#cart" className="fa-5x ">
                <span>
                  <i class="bi bi-cart-check-fill"></i>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;
