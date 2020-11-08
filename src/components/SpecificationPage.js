import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function SpecificationPage(props) {
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);
  const [show, setShow] = useState(false);
  const [budget, setBudget] = useState(0);
  const [warning, setWarning] = useState("");
  const [date, setDate] = useState(undefined);
  const [people, setPeople] = useState(0);
  const [city, setCity] = useState("Choose...");

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
    } else if (people <= 0) {
      setWarning("Please input an estimated number of attendees");
      handleShow();
    } else if (budget <= 0) {
      setWarning("Please input a budget");
      handleShow();
    } else {
      let today = new Date();
      console.log(today);
      let todayDd = parseInt(today.getDate());
      let todayMm = parseInt(today.getMonth() + 1);
      let todayYyyy = parseInt(today.getFullYear());

      const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      let userDate = new Date(date);
      console.log(userDate);
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
      } else {
        history.push("/permit");
      }
    }
  };

  return (
    <div>
      <div>
        <h1>WHAT KIND OF BLOCK PARTY?</h1>
      </div>
      <Form>
        <Card>
          <Card.Body>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Estimated Attendees
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e) => setPeople(e.target.value)}
                  type="number"
                  defaultValue={0}
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
                >
                  <option>Choose...</option>
                  <option>Sacramento</option>
                  <option>Santa Cruz</option>
                  <option>Santa Clara</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Your Budget
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="number"
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Button variant="seconday">Back</Button>
        <Button variant="primary" onClick={() => handleNext()}>
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
  );
}
