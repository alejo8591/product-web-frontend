"use client";

import { Container, Row } from "react-bootstrap";

import NavbarHome from "productWeb/components/shared/navbar-home/page";

export default function Layout({ children }) {
  return (
    <Container>
      <Row>
        <NavbarHome />
      </Row>
      {children}
    </Container>
  )
}