// import React from "react";

// function WoodCarvingDesign () {
//     return(
//         <div>
//             <h1>Hellow sathvik</h1>
//         </div>

//     )
// };

// export default WoodCarvingDesign ;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { jp } from "../image/images";

function WoodCarvingDesign() {
  return (
    <Navbar bg="#66ff66" expand="lg" variant="black ">
      <Container fluid>
        {/* <img
          className="Symbol"
          src={jp}
          width="50"
          height="50"
          alt="jp-img"
        ></img> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/PvcInteriorDesign">Main Door Panels</Nav.Link>
            <Nav.Link href="/woodcarvingdesign">Pooja Room</Nav.Link>
            <Nav.Link href="/contactdetails">Wall Mount</Nav.Link>
            <Nav.Link href="/contactdetails">Statue</Nav.Link>
            <Nav.Link href="/contactdetails">Corner Brackets</Nav.Link>
            <Nav.Link href="/contactdetails">Mandir Gopuram Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WoodCarvingDesign;
