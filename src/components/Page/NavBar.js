// import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
  return (
    <Navbar className="navBarContainer">
      <Container>
        <Navbar.Brand id="brand" href="/">Sports Medicine Eval Hub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* <NavLink
            className={({ isActive }) => (isActive ? "LinkActive" : "Link")}
            href="/"
          >
            Home
          </NavLink> */}
          {/* <NavLink
            className={({ isActive }) => (isActive ? "LinkActive" : "Link")}
            href="/ankle"
          >
            Ankle
          </NavLink> */}
          <NavDropdown title="Body part" id="basic-nav-dropdown">
            <NavDropdown.Item href="/ankle">Ankle</NavDropdown.Item>
            <NavDropdown.Item href="/knee">Knee</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
