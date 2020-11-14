import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Context from "../context/context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Payment(props) {
  const context = useContext(Context);
  const serviceFee =
    context.cart.reduce((acc, cur) => acc + cur.price, 0) * 0.05;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Row>
        <Col style={{ justifyContent: "center" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button variant="secondary" onClick={handleShow}>
              {" "}
              PayPal
            </Button>
          </Row>

          <Row style={{ justifyContent: "center", marginTop: "30px" }}>
            <Button variant="secondary" onClick={handleShow}>
              {" "}
              PayPal Credit
            </Button>
          </Row>
          <Row style={{ justifyContent: "center", marginTop: "30px" }}>
            <Button variant="secondary" onClick={handleShow}>
              {" "}
              Venmo
            </Button>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button variant="primary" as={Link} to="/reciept">
              {" "}
              Submit
            </Button>
          </Row>
        </Col>
        <Col>
          <h1> Cart Total</h1>
          <Card style={{ justifyContent: "center", marginRight: "30px" }}>
            <Card.Body>
              {context.cart.map((item) => (
                <Row>
                  <Col>{item.name}</Col>
                  <Col>${item.price}</Col>
                </Row>
              ))}

              <Row>
                <Col>Service Fee</Col>
                <Col>${serviceFee}</Col>
              </Row>
              <Row>
                <Col>Total Cost</Col>
                <Col>
                  $
                  {context.cart.reduce((acc, cur) => acc + cur.price, 0) +
                    serviceFee}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do Not Send Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            As this is a school project, do not attempt to send money through
            this site. It is not functional
          </h3>
          <h3>Thank You!</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}