"use client";

import {Col, Container, ListGroup, Row} from "react-bootstrap";
import NavbarHome from "productWeb/components/shared/navbar-home/page";
import {useEffect, useState} from "react";

export default function ProductPage(props) {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <NavbarHome/>
      </Row>
      <row>
        <Col>
          <ListGroup>
            {products.map((product) =>
              (<ListGroup.Item key={product.id}>{product.name}</ListGroup.Item>))}
          </ListGroup>
        </Col>
      </row>
    </Container>
  );
}