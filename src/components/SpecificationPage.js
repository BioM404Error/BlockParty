import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Context from "../context/context";
import styled from "@emotion/styled";
import "./Pages.css";

const CardBody = styled.div`
  font-family: Helvetica;
`;

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

  return (
    <body className="specIm">
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            paddingLeft: "20px",
          }}
        >
          {" "}
          On The Block{" "}
        </h1>
        <h2 className="main-title">WHAT KIND OF BLOCK PARTY?</h2>
        <Form>
          <CardBody>
            <Card
              style={{
                backgroundColor: "transparent",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                marginLeft: "5rem",
                marginRight: "5rem",
                marginTop: "3rem",
                borderColor: "white",
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
          </CardBody>

          <Button
            className="buttonB"
            style={{
              fontSize: "25px",
              marginRight: "25px",
              background: "white",
              color: "black",
              borderColor: "black",
            }}
          >
            Back
          </Button>
          <Button
            className="buttonN"
            style={{
              fontSize: "25px",
            }}
            onClick={() => handleNext()}
          >
            Next
          </Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{warning}</Modal.Body>
        </Modal>
      </div>
    </body>
  );
}
