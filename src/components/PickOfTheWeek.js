import React from "react";
import { Row, Col, Image, Button, ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

const PickOfTheWeek = () => {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  return (
    <section id="mustTry">
      <div className="orange text-center my-5 ">
        <h2 className="display-5 ">
          <span>
            <i class="bi bi-search-heart"> </i>
          </span>
          Pick of the week !
        </h2>
      </div>
      <Row className="  align-items-center justify-content-end ">
        <Col md={7}>
          <Image src={require("../assets/center.jpeg")} fluid alt="pizza" />
        </Col>
        <Col md={5}>
          <div className="p-2 text-center">
            <h3 className="text-primary display-5">Double Cheese Fajita</h3>
            <p className="lead text-muted">
              pick of the day must try with family
            </p>
            <button onClick={toggleShowA} className="btn btn-outline-dark">
              <span>
                <i class="bi bi-basket-fill"></i>
              </span>{" "}
              Buy Now
            </button>
            {
              <ToastContainer
                className="p-3"
                position={"top-end"}
                style={{ zIndex: 1 }}
              >
                <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            }
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default PickOfTheWeek;
