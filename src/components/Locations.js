import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Context from "../context/context";
import ListGroup from "react-bootstrap/ListGroup";
import Option from "./Option";
import Cart from "./Cart";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`

const Header = styled.div`
  width: 100%;
  height: 20%;
  font-size: 3rem;
  border-bottom: 2px solid black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Locations = () => {
  const context = useContext(Context);
  const [showCart, setShowCart] = useState(true);
  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => {
    setShowCart(false);
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
    <>
      <Content>
        <Button variant="primary" onClick={handleCartShow}>
          View <FontAwesomeIcon icon={faShoppingCart} /> ({context.cart.length})
        </Button>
        <Header>
          Available Locations
        </Header>
        <Card style={{
          margin: "2rem",
          height: "60%"
        }}>
          <ListGroup style={{
            overflow: "auto",
            height: "100%"
          }}>
            {context.products
              .filter(
                (option) =>
                  option.city === context.location &&
                  option.daysOpen[context.weekday] &&
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
                    // handleOptionShow={() => handleOptionShow(option)}
                    addProduct={context.addProductToCart.bind(this, option)}
                  />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card>
        <Modal show={showCart} onHide={handleCartClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Cart />
          </Modal.Body>
        </Modal>
      </Content>
    </>
  )
}

export default Locations