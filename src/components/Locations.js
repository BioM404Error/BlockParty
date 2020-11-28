import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Context from "../context/context";
import Cart from "./Cart";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import RemainingBudget from "./RemainingBudget";
import ConsumerNavbar from "./ConsumerNav";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import "./Pages.css";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`

const Buttons = styled.div`
    width: max(250px, 40%);
    max-width: 700px;
    margin: 0 auto 20vh auto;
    font-size: clamp(0.5rem, 1.5vw, 1.5rem);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

const Locations = (props) => {
  const context = useContext(Context);
  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => {
    setShowCart(false);
  };

  const getHours = (option) => {
    let start = `${option.startTime[0]}:`;
    if (option.startTime[1] > 9) {
      start += `${option.startTime[1]}`
    } else if (option.startTime > 0) {
      start += `0${option.startTime[1]}`
    } else {
      start += `${option.startTime[1]}0`
    }
    let end = `${option.endTime[0]}:`;
    if (option.endTime[1] > 9) {
      end += `${option.endTime[1]}`
    } else if (option.endTime > 0) {
      end += `0${option.endTime[1]}`
    } else {
      end += `${option.endTime[1]}0`
    }
    let hours = `${start} - ${end}`;
    return hours;
  }
  const getDays = (option) => {
    let open = [];
    let string = "";
    for (let day in option.daysOpen) {
      if (option.daysOpen[day]) {
        open.push(day);
      }
    }
    for (let i = 0; i < open.length; i++) {
      if (i < open.length - 1) {
        string += `${open[i]}, `
      } else if (open.length === 1) {
        string = open[i];
      } else {
        string += `and ${open[i]}`
      }
    }
    return string
  }

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
      <Content style={{overflow:"hidden"}}>
        <ConsumerNavbar />
       <div
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
        >
        <h1
          style={{
            fontFamily: "Impact",
            color: "black",
            fontSize: "100px",
          }}
        >
          Locations
        </h1>
        <Button
          style={{ borderRadius: "50%", height: "103px" }}
          variant="primary"
          onClick={handleCartShow}
        >
          View <FontAwesomeIcon icon={faShoppingCart} /> ({context.cart.length})
        </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <RemainingBudget />
        </div >
        <div style={{
          justifyContent: "center",
          display: "flex"
          }}>
          <CardDeck style={{
            overflow: "auto",
            width: "80vw",
            height: "700px",
          justifyContent: "center"
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
                <Card style={{
                  margin: "2rem",
                  height: "80%",
                  width: "2vw",
                  overflow: "hidden",
                }} key={option.id}>
                  <Card.Img variant="top" src={option.photo} style={{height:"60%"}} />
                  <Card.Body style={{overflow: "visible",}}>
                    <Card.Title>{option.name}: ${option.price} </Card.Title>
                    <Card.Text>
                      Located in {option.city}, {option.name} has the capacity to hold {option.capacity} people. It's hours are between {getHours(option)}.
                      It is open on {getDays(option)}.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="success" id={option.id} onClick={context.addProductToCart.bind(this, option)}>
                      Add Location <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          </div>

          <Buttons>
            <Button variant="secondary" as={Link} to="/permit">
              Back
            </Button>
            <Button variant="primary" as={Link} to="/selections">
              Next
            </Button>
          </Buttons>

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