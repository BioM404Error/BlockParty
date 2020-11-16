import React, { useReducer } from "react";
import Context from "./context";
import { businesses } from "./businesses";
import { permits } from "./permits";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_CITY,
  CHANGE_START_TIME,
  CHANGE_END_TIME,
  CHANGE_CAPACITY,
  CHANGE_BUDGET,
  CHANGE_DATE,
  CHANGE_WEEKDAY,
  CLEAR_CART,
} from "./reducers";

const GlobalState = (props) => {
  const products = businesses;
  const permitUrls = permits;

  const [partyState, dispatch] = useReducer(shopReducer, {
    cart: [],
    location: "Choose...",
    startTime: undefined,
    endTime: undefined,
    budget: 0,
    capacity: 0,
    date: undefined,
    weekday: undefined,
  });

  const changeCity = (city) => {
    dispatch({ type: CHANGE_CITY, city: city });
  };

  const clearCart = (cart1) => {
    dispatch({ type: CLEAR_CART, cart: cart1 });
  };

  const changeDate = (date) => {
    dispatch({ type: CHANGE_DATE, date: date });
  };

  const changeWeekday = (weekday) => {
    dispatch({ type: CHANGE_WEEKDAY, weekday: weekday });
  };

  const changeCapacity = (capacity) => {
    dispatch({ type: CHANGE_CAPACITY, capacity: capacity });
  };

  const changeBudget = (budget) => {
    dispatch({ type: CHANGE_BUDGET, budget: budget });
  };

  const changeStartTime = (startTime) => {
    dispatch({ type: CHANGE_START_TIME, startTime: startTime });
  };

  const changeEndTime = (endTime) => {
    dispatch({ type: CHANGE_END_TIME, endTime: endTime });
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
        budget: partyState.budget,
        weekday: partyState.weekday,
        date: partyState.date,
        endTime: partyState.endTime,
        startTime: partyState.startTime,
        capacity: partyState.budget,
        products: products,
        permitUrls: permitUrls,
        cart: partyState.cart,
        clearCart: clearCart,
        changeDate: changeDate,
        changeWeekday: changeWeekday,
        changeCity: changeCity,
        changeCapacity: changeCapacity,
        changeBudget: changeBudget,
        changeStartTime: changeStartTime,
        changeEndTime: changeEndTime,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
