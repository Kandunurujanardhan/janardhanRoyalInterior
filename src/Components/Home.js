import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
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
} from "../image/images";

function Home(props) {
  return (
    <>
    {!props.hide ?
      <Carousel fade>
        <Carousel.Item>
          <img
            className="Symbol"
            src={GodRoom}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={GodRoom1}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Homeinterior}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Homeinterior1}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Kitchen}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Kitchen1}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Kitchen2}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={TvSet}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Officeinterior}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Officeinterior1}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Symbol"
            src={Officeinterior2}
            width="100%"
            height="100%"
            alt="GodRoom"
          ></img>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      :"hided"}
    </>
  );
}
export default Home;
