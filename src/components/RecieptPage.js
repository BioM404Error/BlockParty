import React, { useState, useContext } from "react";
import Context from "../context/context";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

export default function Reciept(props) {
  const context = useContext(Context);
  const serviceFee =
    context.cart.reduce((acc, cur) => acc + cur.price, 0) * 0.05;
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.push("/thankyou");
    }
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleTextEmail = () => {
    handleShow();
  };

  const Buttons = styled.div`
    height: 50px;
    width: 150px;
    margin: 10vh auto 0 auto;
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      <h1 className="main-title" style={{ paddingBottom: "50px" }}>
        {" "}
        PURCHASE COMPLETED!
      </h1>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card
          className="scroll"
          style={{ height: "300px", boxShadow: "10px 10px 8px #888888" }}
        >
          <Card.Body>
            {context.cart.map((item) => (
              <Row>
                <Col>{item.subtype}</Col>
                <Col style={{ fontWeight: "bold" }}>{item.name}</Col>
                <Col>{item.type}</Col>
                <Col style={{ fontWeight: "bold" }}>${item.price}</Col>
              </Row>
            ))}
            <Row style={{ paddingTop: "30px", fontWeight: "bold" }}>
              Service Fee
              <Col> ${serviceFee}</Col>
            </Row>
            <Row style={{ fontWeight: "900" }}>
              Total
              <Col>
                {" "}
                $
                {context.cart.reduce((acc, cur) => acc + cur.price, 0) +
                  serviceFee}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Col>
        <Buttons>
          <Button
            style={{
              color: "white",
              background: "linear-gradient(150deg, yellow, red)",
            }}
            variant="light"
            onClick={handleTextEmail}
          >
            Send Reciept
          </Button>
        </Buttons>
      </Col>
      <div style={{}}>
        <p
          style={{
            color: "black",
            textAlign: "center",
            justifyContent: "center",
            paddingTop: "50px",
            fontSize: "20px",
          }}
        >
          Thank you for Throwing a Block Party and Supporting Small Businesses!
        </p>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ display: "flex" }}>
                Email address <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ex: jane.doe@organization.com"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email. Ex: jane.doe@organization.com
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Ex: 012-345-6789"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number. Ex: 012-345-6789
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form.Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
