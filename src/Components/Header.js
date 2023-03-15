import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { jp } from "../image/images";

function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg" variant="Black">
        <Container fluid>
          <img
            className="Symbol"
            src={jp}
            width="50"
            height="50"
            alt="jp-img"
          ></img>
          <Navbar.Brand>
            <span>Janardhan Royal Interior</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/PvcInteriorDesign">
                PVC Interior Designs
              </Nav.Link>
              <Nav.Link href="/woodcarvingdesign">
                Wood Carving Designs
              </Nav.Link>
              <Nav.Link href="/contactdetails">Contact Details</Nav.Link>
              {/* <NavDropdown title="Photo Gallary" id="navbarScrollingDropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Modular Kitchen Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Master Bedroom Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Living Room Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pooja Room Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                TV Unit Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                False Ceiling Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Kids Bedroom Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Balcony Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Dining Room Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Window Dessign
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Home Office Design
              </NavDropdown.Item>
            </NavDropdown> */}
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <MainPage /> */}
    </>
  );
}

export default Header;
