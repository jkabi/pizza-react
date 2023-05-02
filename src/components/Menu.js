import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./all.css";
import MenuCard from "./MenuCard";
const Menu = () => {
  const [menu] = useState([1, 2, 4, 5, 6]);

  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="orange my-3 py-4">
            Treat yourself with our Everyday Menu
            <span className="text-dark">
              {" "}
              <i class="bi bi-tiktok"></i>
            </span>
          </h3>
        </div>
        <Row className="  justify-content-center ">
          {menu.map((items) => {
            return (
              <Col className="mt-0 mt-md-5 " lg={4} md={6} key={items}>
                <MenuCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
