export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_BUDGET = "CHANGE_BUDGET";

const changeCity = (city, state) => {
  console.log("ran reducer");
  return { ...state, location: city };
};

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  }
  // } else {
  //   const updatedItem = {
  //     ...updatedCart[updatedItemIndex],
  //   };
  //   updatedItem.quantity++;
  //   updatedCart[updatedItemIndex] = updatedItem;
  // }

  // if (updatedItemIndex < 0) {
  //   updatedCart.push({ ...product, quantity: 1 });
  // } else {
  //   const updatedItem = {
  //     ...updatedCart[updatedItemIndex],
  //   };
  //   updatedItem.quantity++;
  //   updatedCart[updatedItemIndex] = updatedItem;
  // }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  }
  // } else {
  //   updatedCart[updatedItemIndex] = updatedItem;
  // }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case CHANGE_CITY:
      return changeCity(action.city, state);
    default:
      return state;
  }
};
