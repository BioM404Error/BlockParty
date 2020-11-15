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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import OptionInformationModal from "./OptionInformationModal";
import RemainingBudget from "./RemainingBudget";

export default function Category(props) {
  const context = useContext(Context);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const handleCartShow = () => setShowCart(true);

  const [showCart, setShowCart] = useState(false);
  const handleCartClose = () => {
    setShowCart(false);
  };

  const [showOption, setShowOption] = useState(false);
  const handleOptionClose = () => {
    setShowOption(false);
  };
  const handleOptionShow = (option) => {
    setSelectedOption(option);
    setShowOption(true);
  };

  //users cant access this page without setting a time first but
  //for the sake of testing and styling this page it will default to 24 hours
  const partyStartTime = context.startTime
    ? context.startTime.split(":").map((item) => parseInt(item))
    : [0, 0];
  const partyEndTime = context.endTime
    ? context.endTime.split(":").map((item) => parseInt(item))
    : [24, 0];

  return (
    <React.Fragment>
      <div
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>{props.type}</h1>
        <Button variant="primary" onClick={handleCartShow}>
          View <FontAwesomeIcon icon={faShoppingCart} /> ({context.cart.length})
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RemainingBudget />
      </div>
      <Card style={{ margin: "2rem" }}>
        <ListGroup style={{ overflow: "auto", height: "10rem" }}>
          {context.products
            .filter(
              (option) =>
                option.type === props.type &&
                option.daysOpen[context.weekday] &&
                option.location === context.location &&
                !(
                  option.startTime[0] <= partyStartTime[0] &&
                  option.endTime[0] <= partyStartTime[0]
                ) &&
                !(
                  option.startTime[0] >= partyEndTime[0] &&
                  option.endTime[0] >= partyEndTime[0]
                )
            )
            .map((option) => (
              <ListGroup.Item key={option.id}>
                <Option
                  name={option.name}
                  price={option.price}
                  subtype={option.subtype}
                  description={option.description}
                  photo={option.photo}
                  startTime={option.startTime}
                  endTime={option.endTime}
                  daysOpen={option.daysOpen}
                  handleOptionShow={() => handleOptionShow(option)}
                  addProduct={context.addProductToCart.bind(this, option)}
                />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
      <Button variant="light" as={Link} to="/selections">
        Return to Selection
      </Button>

      <Modal show={showCart} onHide={handleCartClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>

      <OptionInformationModal
        show={showOption}
        selectedOption={selectedOption}
        onHide={handleOptionClose}
      />
    </React.Fragment>
  );
}
