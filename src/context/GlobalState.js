import React, { useReducer } from "react";
import Context from "./context";
import { businesses } from "./businesses";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = (props) => {
  const products = businesses;

  const location = "Santa Cruz";

  const startTime = [8, 0];

  const endTime = [24, 0];

  const budget = 1000;

  const capacity = 1000;

  const day = "Sun";

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <Context.Provider
      value={{
        location: location,
        budget: budget,
        day: day,
        endTime: endTime,
        startTime: startTime,
        capacity: capacity,
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
