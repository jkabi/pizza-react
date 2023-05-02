import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require("../assets/one.jpeg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>margherita</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpeg")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>cheese pizza</h3>
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpeg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>pepperoni</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Pizza for every Occassion</h2>
        <p className="lead text-muted">
          {" "}
          Lorem Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
    </Container>
  );
};

export default Banner;
