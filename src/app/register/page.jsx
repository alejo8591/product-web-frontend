"use client";

import {useEffect} from "react";
import {Button, Col, Container, Dropdown, DropdownButton, FloatingLabel, Form, Row} from "react-bootstrap";
import {useInputHook} from "productWeb/hooks/use-input-hook";
import NavbarHome from "productWeb/components/shared/navbar-home/page";
import {createUserService} from "productWeb/services/users";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function RegisterPage() {
  let {value: firstNameValue, bind: firstNameBind} = useInputHook();
  let {value: lastNameValue, bind: lastNameBind} = useInputHook();
  let {value: documentIdValue, bind: documentIdValueBind} = useInputHook();
  let {value: emailValue, bind: emailBind} = useInputHook();
  let {value: phoneValue, bind: phoneBind} = useInputHook();
  let {value: passwordValue, bind: passwordBind} = useInputHook();
  let {value: documentTypeValue, setValue: setDocumentType} = useInputHook(null);
  let {value: addressValue, bind: addressValueBind} = useInputHook();
  let {value: user, setValue: setUser} = useInputHook(null);
  
  useEffect(() => {
    user && register();
  }, [user]);
  
  const register = () => {
    createUserService(user)
      .then(response => {
        if (response) {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      })
      .catch(err => console.log(err));
  };
  
  /**
   * @method
   * @description this method use for get data from the HTML inputs,
   * also through convert to JSON object for next time send to any server
   */
  const getFormData = () => {
    setUser({
      email: emailValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      phone: phoneValue,
      document_id: documentIdValue,
      document_type: documentTypeValue,
      address: addressValue,
      password: passwordValue
    });
  };
  
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <FloatingLabel
              controlId="email"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" {...emailBind} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="firstName"
              label="Nombre(s)">
              <Form.Control type="text" placeholder="Nombre(s)" {...firstNameBind} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="lastName"
              label="Apellido(s)"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Apellido(s)" {...lastNameBind} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="phone"
              label="Telefono">
              <Form.Control type="text" placeholder="Telefono" {...phoneBind} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Dropdown>
              <DropdownButton
                onSelect={event => setDocumentType(event)}
                title="Tipo de documento">
                <Dropdown.Item eventKey="CC">Cédula de Ciudadanía</Dropdown.Item>
                <Dropdown.Item eventKey="TI">Tarjeta de Identidad</Dropdown.Item>
                <Dropdown.Item eventKey="RC">Registro Civil</Dropdown.Item>
                <Dropdown.Item eventKey="CE">Cédula de Extranjería</Dropdown.Item>
                <Dropdown.Item eventKey="CI">Carné de Identidad</Dropdown.Item>
                <Dropdown.Item eventKey="DNI">Documento Nacional de Identidad</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </Col>
          <Col>
            <FloatingLabel
              controlId="documentId"
              label="Documento de identidad">
              <Form.Control type="text" placeholder="Documento de identidad" {...documentIdValueBind} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="address"
              label="Dirección"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Dirección" {...addressValueBind} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="password"
              label="Password">
              <Form.Control type="password" placeholder="" {...passwordBind} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={getFormData}>Registrarme</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}