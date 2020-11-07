import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function SmallBusinessPage(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <div>
      <Card>
        <Card.Body>
          <h1>Benefits of Joining Us</h1>
          <p>
            Description of what we offer to help small businesses and why we
            want to help...
          </p>
          <Button variant="primary" onClick={handleShow}>
            Join Us!
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>We Are Happy To Connect </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label style={{ display: "flex" }} column sm="2">
                Name <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Col sm="10">
                <Form.Control required placeholder="Enter Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2" style={{ display: "flex" }}>
                Email
                <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="email" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Enter Phone Number ###-###-###"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Link to Socials
              </Form.Label>
              <Col sm="10">
                <Form.Control type="url" placeholder="Enter link" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Tell us a little bit more about your business!
              </Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Button variant="primary" as={Link} to="/smallbusiness/thankyou">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}