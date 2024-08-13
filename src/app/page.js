"use client";

import {Col, Container, Row} from "react-bootstrap";
import Footer from "productWeb/components/shared/footer/page";
import Header from "productWeb/components/shared/header/page";
import NavbarHome from "productWeb/components/shared/navbar-home/page";

export default function Home() {
  return (
    <Container>
      <Row>
        <Header as="h1" className="text-center"/>
      </Row>
      <Row>
        <NavbarHome/>
      </Row>
      <Row>
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam at, dolore explicabo illo ipsum labore nobis non praesentium quibusdam, sit vel vero voluptas. Culpa debitis dolor impedit totam voluptatem!</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut deserunt ea eaque eos et, eveniet fugiat ipsum libero magni necessitatibus nulla pariatur quasi, quis recusandae tempore temporibus voluptatem voluptatibus?</p>
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
}
