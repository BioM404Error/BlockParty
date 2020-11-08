import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Option from "./Option";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Context from "../context/context";
import Cart from "./Cart";

export default function Category(props) {
  const context = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>{props.type}</h1>
        <p>
          {context.startTime} - {context.endTime}
        </p>
        <Button variant="primary" onClick={handleShow}>
          Cart
        </Button>
      </div>
      <Card style={{ margin: "2rem" }}>
        <ListGroup style={{ overflow: "auto", height: "10rem" }}>
          {context.products
            .filter(
              (option) =>
                option.type === props.type &&
                option.daysOpen[context.day] &&
                option.location === context.location &&
                !(
                  option.startTime[0] <= context.startTime[0] &&
                  option.endTime[0] <= context.startTime[0]
                ) &&
                !(
                  option.startTime[0] >= context.endTime[0] &&
                  option.endTime[0] >= context.endTime[0]
                )
            )
            .map((option) => (
              <ListGroup.Item>
                <p>{option.location}</p>
                <Option
                  name={option.name}
                  price={option.price}
                  subtype={option.subtype}
                  description={option.description}
                  photo={option.photo}
                  startTime={option.startTime}
                  endTime={option.endTime}
                  onClick={context.addProductToCart.bind(this, option)}
                />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
      <Button variant="light" as={Link} to="/selections">
        Selections
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
