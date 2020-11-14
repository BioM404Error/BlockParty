import React from "react";
import { businesses } from "./businesses";

export default React.createContext({
  location: "Choose...",
  budget: 0,
  endTime: undefined,
  startTime: undefined,
  capacity: 0,
  products: businesses,
  cart: [],
  date: undefined,
  weekday: undefined,
  changeDate: (date) => {},
  changeWeekday: (weekday) => {},
  changeCapacity: (capacity) => {},
  changeBudget: (budget) => {},
  changeStartTime: (startTime) => {},
  changeEndTime: (endTime) => {},
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
  changeCity: (city) => {},
  clearCart: (cart) => {},
});
