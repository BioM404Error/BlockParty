import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Option from "./Option";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ShopContext from "../context/shop-context";
import Cart from "./Cart";

export default function Category(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>{props.type}</h1>
            <Button variant="primary" onClick={handleShow}>
              Cart
            </Button>
          </div>
          <Card style={{ margin: "2rem" }}>
            <ListGroup style={{ overflow: "auto", height: "10rem" }}>
              {context.products.map((option) => (
                <ListGroup.Item>
                  <Option
                    name={option.name}
                    price={option.price}
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
      )}
    </ShopContext.Consumer>
  );
}
