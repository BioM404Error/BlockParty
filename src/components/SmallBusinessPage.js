import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";

export default function SmallBusinessPage(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.push("/smallbusiness/thankyou");
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h1>Benefits of Joining Us</h1>
          <p>
            Small Business's are the heart of every community. They go the extra
            mile, and have always been there for their communities. On The Block
            wants to return the favor, and be there for them. When you join us,
            your small business will be filtered by what type of business you
            have: Cosmetics, Entertinment, Food, or Clothing. When a user enters
            our site, they will be able to view your business, and decide if
            they want you at their Block Party. If your business is selected and
            purchased, your bussiness will recieve payment for your services.
            When you are at the users Block Party, you will have the chance to
            be seen by many different people and spread your business magic to a
            larger audience.
          </p>
          <Button variant="secondary" as={Link} to="/">
            Home
          </Button>
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Form.Label style={{ display: "flex" }} column sm="2">
                Name <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="text" placeholder="Enter Name" />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid name. Ex: Jane Doe
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2" style={{ display: "flex" }}>
                Email
                <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="email" placeholder="Enter Email" />
                <Form.Control.Feedback type="invalid">
                  Please choose a valid email. Ex: jane.doe@organization.com
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please insert a valid phone number. Ex: 012-345-6789
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Link to Socials
              </Form.Label>
              <Col sm="10">
                <Form.Control type="url" placeholder="Enter link" />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid social media url. Ex: https://www.instagram.com/JanesDoenuts
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Tell us a little bit more about your business!
              </Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
