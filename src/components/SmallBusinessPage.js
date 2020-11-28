import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "@emotion/styled";
import { Link, useHistory } from "react-router-dom";
import BasicNavbar from "./BasicNav";

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
  };

  const Buttons = styled.div`
    width: max(250px, 40%);
    max-width: 700px;
    font-size: clamp(0.5rem, 1.5vw, 1.5rem);
    display: block;
    margin: 0 auto;
    margin-bottom: 25px;
  `;

  return (
    <body
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1562077790-5fab0c2e49eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2503&q=80)",
      }}
    >
      <div style={{ background: "white" }}>
        <BasicNavbar/>
        <h1
          className="main-title"
          style={{
            fontSize: "100px",
            textAlign: "center",
            paddingBottom: "10px",
            paddingTop: "20px",
          }}
        >
          Benefits of Joining Us
        </h1>
        <div
          style={{
            paddingBottom: "50px",
          }}
        >
          <p
            style={{
              margin: "4vh auto 0 auto",
              borderColor: "black",
              textAlign: "justify",
              width: "500px",
              fontSize: "18px",
            }}
          >
            Small Business's are the heart of every community. They go the extra
            mile, and have always been there for their communities.{" "}
            <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
              On The Block
            </span>
            wants to return the favor, and be there for them. When you join us,
            your small business will be filtered by what type of business you
            have: Cosmetics, Entertinment, Food, or Clothing. When a user enters
            our site, they will be able to view your business, and decide if
            they want you at their Block Party. If your business is selected and
            purchased, you will recieve payment for your services. When you are
            at the users Block Party, you will have the chance to be seen by
            many different people and spread your business magic to a larger
            audience.
          </p>
        </div>

        <Card
          style={{
            borderColor: "transparent",
          }}
        >
          <Card.Body>
            <Buttons>
              <Button
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "200px",
                  background: "linear-gradient(150deg, green, blue)",
                  fontSize: "30px",
                }}
                variant="primary"
                onClick={handleShow}
              >
                Join Us!
              </Button>
            </Buttons>
            <Button
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "150px",
                marginBottom: "20px",
              }}
              variant="secondary"
              as={Link}
              to="/"
            >
              No Thanks
            </Button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>We Are Happy To Connect! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form  noValidate validated={validated} onSubmit={handleSubmit} >
              <Form.Group as={Row}>
                <Form.Label style={{ display: "flex" }} column sm="2">
                  Name <p style={{ color: "red" }}>*</p>
                </Form.Label>
                <Col sm="10">
                  <Form.Control required placeholder="Ex: Jane Doe" />
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
                  <Form.Control
                    required
                    type="email"
                    placeholder="Ex: jane.doe@organization.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email. Ex: jane.doe@organization.com
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
                    placeholder="Ex: 012-345-6789"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid phone number. Ex: 012-345-6789
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Link to Socials
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="url" placeholder="Ex: https://www.instagram.com/JanesDoenuts" />
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
    </body>
  );
}
