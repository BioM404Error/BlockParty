import React, { useContext, useEffect } from "react";
import ShopContext from "../context/shop-context";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <div>
        {context.cart.length <= 0 && <p> The cart is empty :( </p>}
        <ListGroup>
          {context.cart.map((cartItem) => (
            <ListGroup.Item key={cartItem.id}>
              <div>
                <strong>{cartItem.name}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <Button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </React.Fragment>
  );
}
