"use client";

import {useEffect, useState} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import NavbarHome from "productWeb/components/shared/navbar-home/page";
import LoginModal from "productWeb/components/modals/login-modal/page";
import {useInputHook} from "productWeb/hooks/use-input-hook";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const {value: passwordValue, bind: passwordBind} = useInputHook();
  const {value: emailValue, bind: emailBind} = useInputHook();
  const {value: loginValue, setValue: setLogin} = useInputHook();

  const login = () => setShow(!show);

  useEffect(() => {
    loginValue && login();
  }, [loginValue]);

  const getFormData = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      setValidated(true);
    } else {
      setValidated(false);
      setLogin({
        email: emailValue,
        password: passwordValue
      })
    }
  };

  return (
    <Container>
      <Row>
        <NavbarHome/>
      </Row>
      <Form noValidate validated={validated} onSubmit={getFormData}>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  isInvalid={
                    validated &&
                    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)
                  }
                  {...emailBind}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un correo en formato correcto
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  minLength={6}
                  isInvalid={
                    validated && passwordValue && passwordValue.length < 6
                  }
                  {...passwordBind} />
                <Form.Control.Feedback type="invalid">
                  Longitud de password incorrecta
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">Ingresar</Button>
          </Col>
        </Row>
      </Form>
      <LoginModal show={show}/>
    </Container>);
}