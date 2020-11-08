import React from "react";
import { businesses } from "./businesses";

export default React.createContext({
  location: "",
  budget: 0,
  endTime: "24:00",
  startTime: "0:00",
  capacity: 0,
  products: businesses,
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
