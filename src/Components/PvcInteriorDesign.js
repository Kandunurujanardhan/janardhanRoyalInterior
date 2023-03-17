import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { jp } from "../image/images";

function Header() {
  return (
    <Navbar bg="#66ff66" expand="lg" variant="black">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/PvcInteriorDesign">
              Modular Kitchen Design
            </Nav.Link>
            <Nav.Link href="/woodcarvingdesign">Master Bedroom Design</Nav.Link>
            <Nav.Link href="/contactdetails">Living Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">Pooja Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">TV Unit Design</Nav.Link>
            <Nav.Link href="/contactdetails">False Ceiling Design</Nav.Link>
            <Nav.Link href="/contactdetails">Balcony Design</Nav.Link>
            <Nav.Link href="/contactdetails">Dining Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">Home Office Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
