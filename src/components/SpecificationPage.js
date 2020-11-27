import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Context from "../context/context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "@emotion/styled";
import "./Pages.css";

export default function SpecificationPage(props) {
  const context = useContext(Context);

  const [startTime, setStartTime] = useState(context.startTime);
  const [endTime, setEndTime] = useState(context.endTime);
  const [show, setShow] = useState(false);
  const [budget, setBudget] = useState(context.budget);
  const [warning, setWarning] = useState("");
  const [date, setDate] = useState(context.date);
  const [capacity, setCapacity] = useState(context.capacity);
  const [city, setCity] = useState(context.location);

  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    setWarning("");
  };
  const handleShow = () => setShow(true);

  const handleNext = () => {
    if (
      startTime === undefined ||
      endTime === undefined ||
      date === undefined ||
      city === "Choose..."
    ) {
      setWarning("Please input a value in all fields");
      handleShow();
    } else if (capacity <= 0) {
      setWarning("Please input an estimated number of attendees");
      handleShow();
    } else if (budget <= 0) {
      setWarning("Please input a budget");
      handleShow();
    } else {
      let today = new Date();
      let todayDd = parseInt(today.getDate());
      let todayMm = parseInt(today.getMonth() + 1);
      let todayYyyy = parseInt(today.getFullYear());

      const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      let userDate = new Date(date);
      let userDd = parseInt(userDate.getDate());
      let userMm = parseInt(userDate.getMonth() + 1);
      let userYyyy = parseInt(userDate.getFullYear());
      let userDay = weekday[userDate.getDay()];

      const startArray = startTime.split(":").map((item) => parseInt(item));
      const endArray = endTime.split(":").map((item) => parseInt(item));

      if (startArray[0] > endArray[0]) {
        setWarning("Please set the start time before the end time");
        handleShow();
      } else if (endArray[0] - startArray[0] < 2) {
        setWarning("Block party should be at least one hour or more");
        handleShow();
      } else if (
        todayYyyy > userYyyy ||
        (todayYyyy === userYyyy && todayMm > userMm) ||
        (todayYyyy === userYyyy && todayMm === userMm && userDd <= todayDd)
      ) {
        setWarning("Please input a date in the future");
        handleShow();
      } else if (userYyyy - todayYyyy > 5) {
        setWarning(
          "Block party cannot be planned more than 5 year in advance..."
        );
        handleShow();
      } else {
        context.changeCity(city, context);
        context.changeDate(date.split("T")[0], context);
        context.changeWeekday(userDay, context);
        context.changeCapacity(capacity, context);
        context.changeBudget(budget, context);
        context.changeStartTime(startTime, context);
        context.changeEndTime(endTime, context);
        context.clearCart([], context);
        history.push("/permit");
      }
    }
  };

  const Buttons = styled.div`
    width: max(250px, 40%);
    max-width: 700px;
    height: 7%;
    margin: 7vh auto 0 auto;
    font-size: clamp(0.5rem, 1.5vw, 1.5rem);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <body className="specIm">
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/images/logo2-1.png"
                width="40"
                className="d-inline-block align-top"
              />{" "}
              On The Block
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="consumer-navbar-nav" />
            <Navbar.Collapse id="consumer-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/specification">Specifications</Nav.Link>
                <Nav.Link href="/permit" disabled>
                  Permit
                </Nav.Link>
                <Nav.Link href="/location" disabled>
                  Locations
                </Nav.Link>
                <NavDropdown
                  title="Selections"
                  id="consumer-nav-dropdown"
                  disabled
                >
                  <NavDropdown.Item href="/selections">
                    Selections
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/selections/Entertainment">
                    Entertainment
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/selections/Food">
                    Food
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/selections/Clothing">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/selections/Cosmetics">
                    Clothing
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <h2 className="main-title">GIVE US THE DEETS</h2>
      </div>
      <Form>
        <div className="cardBody">
          <Card
            style={{
              borderColor: "linear-gradient(150deg, yellow, red)",
              borderRadius: "15px 50px 30px",
            }}
          >
            <Card.Body>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Estimated Attendees
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    onChange={(e) => setCapacity(e.target.value)}
                    type="number"
                    defaultValue={capacity}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Desired Start Time
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    onChange={(e) => setStartTime(e.target.value)}
                    type="time"
                    name="startTime"
                    placeholder="Start Time"
                    defaultValue={startTime}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Desired End Time
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    onChange={(e) => setEndTime(e.target.value)}
                    type="time"
                    name="endTime"
                    placeholder="End Time"
                    defaultValue={endTime}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Select Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Party Date"
                    onChange={(e) => setDate(e.target.value + "T00:00:00")}
                    max="2050-12-31"
                    defaultValue={date}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Desired City
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    onChange={(e) => setCity(e.target.value)}
                    defaultValue={city}
                  >
                    <option>Choose...</option>
                    <option>Berkeley</option>
                    <option>Santa Cruz</option>
                    <option>Santa Clara</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Your Budget
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="number"
                    onChange={(e) => setBudget(e.target.value)}
                    defaultValue={budget}
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
        <Buttons>
          <Button
            style={{
              fontSize: "25px",
              marginRight: "25px",
              background: "white",
              color: "black",
              borderColor: "black",
            }}
            as={Link}
            to="/"
          >
            Back
          </Button>
          <Button
            style={{
              fontSize: "25px",
            }}
            onClick={() => handleNext()}
          >
            Next
          </Button>
        </Buttons>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{warning}</Modal.Body>
      </Modal>
    </body>
  );
}
