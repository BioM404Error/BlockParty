import React, { useReducer } from "react";
import Context from "./context";
import { businesses } from "./businesses";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_CITY,
} from "./reducers";

const GlobalState = (props) => {
  const products = businesses;

  // const location = "Santa Cruz";

  const startTime = [8, 0];

  const endTime = [24, 0];

  const budget = 1000;

  const capacity = 1000;

  const day = "Sun";

  const [partyState, dispatch] = useReducer(shopReducer, {
    cart: [],
    location: "",
  });

  const changeCity = (city) => {
    dispatch({ type: CHANGE_CITY, city: city });
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <Context.Provider
      value={{
        location: partyState.location,
        budget: budget,
        day: day,
        endTime: endTime,
        startTime: startTime,
        capacity: capacity,
        products: products,
        cart: partyState.cart,
        changeCity: changeCity,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
