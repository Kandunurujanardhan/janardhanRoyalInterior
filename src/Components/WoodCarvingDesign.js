import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";
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
import ProductCard from "./ProductCard";

function WoodCarvingDesign() {
  const [productGrid, setProductGrid] = useState([]);
  const mainDoorProducts = [
    {
      id: "kitchen",
      name: "Kitchen",
      src: Kitchen,
      content: "",
    },
    {
      id: "GodRoom",
      name: "GodRoom",
      src: GodRoom,
      content: "",
    },
    {
      id: "GodRoom1",
      name: "GodRoom1",
      src: GodRoom1,
      content: "",
    },
    {
      id: "Homeinterior",
      name: "Homeinterior",
      src: Homeinterior,
      content: "",
    },
    {
      id: "Homeinterior1",
      name: "Homeinterior1",
      src: Homeinterior1,
      content: "",
    },
    {
      id: "TvSet",
      name: "TvSet",
      src: TvSet,
      content: "",
    },
    {
      id: "Officeinterior",
      name: "Officeinterior",
      src: Officeinterior,
      content: "",
    },
    {
      id: "Officeinterior1",
      name: "Officeinterior1",
      src: Officeinterior1,
      content: "",
    },
    {
      id: " Officeinterior2",
      name: " Officeinterior2",
      src: Officeinterior2,
      content: "",
    },
    {
      id: " Kitchen1",
      name: " Kitchen1",
      src: Kitchen1,
      content: "",
    },
    {
      id: "Kitchen2",
      name: "Kitchen2",
      src: Kitchen2,
      content: "",
    },
  ];
  const poojaDoorProducts = [
    { id: "1", name: "poojadoor1" },
    { id: "2", name: "poojadoor2" },
  ];

  useEffect(() => {
    setProductGrid(mainDoorProducts);
  }, []);

  const productClicked = (produts) => {
    setProductGrid(produts);
  };
  return (
    <Container>
      <Navbar bg="#66ff66" expand="lg" variant="black ">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => productClicked(mainDoorProducts)}>
              Main Door Panels
            </Nav.Link>
            <Nav.Link onClick={() => productClicked(poojaDoorProducts)}>
              Pooja Room
            </Nav.Link>
            <Nav.Link href="/contactdetails">Wall Mount</Nav.Link>
            <Nav.Link href="/contactdetails">Statue</Nav.Link>
            <Nav.Link href="/contactdetails">Corner Brackets</Nav.Link>
            <Nav.Link href="/contactdetails">Mandir Gopuram Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        {" "}
        {productGrid.map((item) => (
          <Col sm={12} md={3} lg={{ span: 4}}>
            <ProductCard productObj={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WoodCarvingDesign;
