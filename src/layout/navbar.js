import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <>
      <Navbar className="navbar-component" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><h2>GiftExpertApp</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="../GifExpertApp" >Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

/* import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <>
    <Navbar className="navBg" variant="dark" sticky="top" expand="lg">
      {<Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>}
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
  </>
  )
} */
