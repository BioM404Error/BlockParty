import React from "react";

export default React.createContext({
  products: [
    { id: "1a", name: "Jazzy Beats", price: 450.0 },
    { id: "2a", name: "Julie + Ghosts", price: 500.0 },
    { id: "3a", name: "Loco", price: 200.0 },
    { id: "4a", name: "Zay Beats", price: 1000.0 },
  ],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
