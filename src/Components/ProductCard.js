import React from "react";
import { Container, Card } from "react-bootstrap";

function ProductCard(props) {
  return (
    <>
      <Container>
        {/* <Col > */}
            <Card
              className="mb-3"
              style={{ height: "300px", justifyContent: "center" ,width: "100%",overflow:"hidden" }}
            >
              <img
                src={props.productObj.src}
                alt={props.productObj.src}
              ></img>
            </Card>
        {/* </Col> */}
      </Container>
    </>
  );
};

export default ProductCard;
