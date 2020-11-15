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

  return (
    <div>
      <h1> Reciept</h1>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <Card.Body>
            {context.cart.map((item) => (
              <Row>
                <Col>{item.subtype}</Col>
                <Col>{item.name}</Col>
                <Col>{item.type}</Col>
                <Col>${item.price}</Col>
              </Row>
            ))}
            <Row>
              <Col>Service Fee</Col>
              <Col>{serviceFee}</Col>
            </Row>
            <Row>
              $
              {context.cart.reduce((acc, cur) => acc + cur.price, 0) +
                serviceFee}
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <h2>
            Thank you for Throwing a Block Party and Supporting Small
            Businesses!
          </h2>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleTextEmail}>
            Send Reciept
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup>
              <Form.Control
                required
                type="email"
                placeholder="jane.doe@organization.com" />
              <Form.Control.Feedback type="invalid">
                  Please choose a valid email.
              </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Enter Phone Number ###-###-###"
              />
              <Form.Control.Feedback type="invalid">
               Please insert a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
            <Button variant="primary" type="submit" >
              Send
          </Button>
            </Form.Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

