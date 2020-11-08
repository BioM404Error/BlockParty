import React, { useContext } from "react";
import Context from "../context/context";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const context = useContext(Context);

  return (
    <React.Fragment>
      <div>
        {context.cart.length <= 0 && <p> The cart is empty :( </p>}
        <ListGroup>
          {context.cart.map((cartItem) => (
            <ListGroup.Item key={cartItem.id}>
              <div>
                <strong>{cartItem.name}</strong> - ${cartItem.price}
              </div>
              <div>
                <Button
                  variant="warning"
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  <FontAwesomeIcon icon={faMinus} /> Remove from Cart
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </React.Fragment>
  );
}
