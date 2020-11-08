import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function PaymentPage(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        setShow(false);
    };
  
  return (
      <div >
          <Row >
              <Col style={{ justifyContent: "center" }}>
              <Row style={{display: "flex", justifyContent: "center", marginTop: "30px" }}>
                  <Button variant="secondary" onClick={handleShow}> PayPal</Button>
              </Row>

              <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Button variant="secondary" onClick={handleShow}> PayPal Credit</Button>
              </Row>
              <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Button variant="secondary" onClick={handleShow}> Venmo</Button>
              </Row>
              <Row style={{display: "flex", justifyContent: "center", marginTop: "30px" }}>
              <Button variant="primary" as={Link} to="/reciept"> Submit</Button>
              </Row>
          </Col>
          <Col>
              <h1> Cart Total</h1>
                  <Card style={{ justifyContent: "center", marginRight: "30px" } }>
                <Card.Body>
                    <Row>
                    <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Name Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Service Fee Goes Here
                        </Col>
                        <Col>
                            Price Goes Here
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Total Cost:
                        </Col>
                        <Col>
                            Price Goes Here
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
                  <h3>As this is a school project, do not attempt to send money through this site. It is not functional
                </h3>
                  <h3>Thank You!</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>     
    </div>
  );
}
