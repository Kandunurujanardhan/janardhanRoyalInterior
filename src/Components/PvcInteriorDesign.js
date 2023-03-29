import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProductCard from "./ProductCard";
import {
  GodRoom,
  GodRoom1,
  Homeinterior,
  Homeinterior1,
  Kitchen,
  Kitchen1,
  Kitchen2,
  Officeinterior,
  Officeinterior1,
  Officeinterior2,
  TvSet,
  jp,
} from "../image/images";

function PvcInteriorDesign() {
  const [productGrid, setProductGrid] = useState([]);

  const MasterBedroomDesign = [
    {
      id: "kitchen",
      name: "Kitchen",
      src: Kitchen,
      content: "",
    },
  ];
  // const GodRoomDesign =[
  //   {id:"1", name:"poojadoor1"}
  // ]
  useEffect(() => {
    setProductGrid(MasterBedroomDesign);
  }, []);

  const productClicked = (produts) => {
    setProductGrid(produts);
  };

  return (
    <Container>
      <Navbar bg="#66ff66" expand="lg" variant="black">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="/PvcInteriorDesign">
              Modular Kitchen Design
            </Nav.Link> */}
            <Nav.Link onClick={() => productClicked(MasterBedroomDesign)}>
              Master Bedroom Design{" "}
            </Nav.Link>
            {/* <Nav.Link href="/woodcarvingdesign">Master Bedroom Design</Nav.Link> */}
            <Nav.Link href="/contactdetails">Living Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">Pooja Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">TV Unit Design</Nav.Link>
            <Nav.Link href="/contactdetails">False Ceiling Design</Nav.Link>
            <Nav.Link href="/contactdetails">Balcony Design</Nav.Link>
            <Nav.Link href="/contactdetails">Dining Room Design</Nav.Link>
            <Nav.Link href="/contactdetails">Home Office Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        {" "}
        {productGrid.map((item) => (
          <Col sm={12} md={3} lg={{ span: 4 }}>
            <ProductCard productObj={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PvcInteriorDesign;
