export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_START_TIME = "CHANGE_START_TIME";
export const CHANGE_END_TIME = "CHANGE_END_TIME";
export const CHANGE_BUDGET = "CHANGE_BUDGET";
export const CHANGE_CAPACITY = "CHANGE_CAPACITY";
export const CHANGE_DATE = "CHANGE_DATE";
export const CHANGE_WEEKDAY = "CHANGE_WEEKDAY";

const changeCity = (city, state) => {
  return { ...state, location: city };
};

const changeDate = (date, state) => {
  return { ...state, date: date };
};

const changeWeekday = (weekday, state) => {
  return { ...state, weekday: weekday };
};

const changeCapacity = (capacity, state) => {
  return { ...state, capacity: capacity };
};

const changeBudget = (budget, state) => {
  return { ...state, budget: budget };
};

const changeStartTime = (startTime, state) => {
  return { ...state, startTime: startTime };
};

const changeEndTime = (endTime, state) => {
  return { ...state, endTime: endTime };
};

const clearCart = (cart, state) => {
  return { ...state, cart: cart };
};

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
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
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case CLEAR_CART:
      return clearCart(action.cart, state);
    case CHANGE_CITY:
      return changeCity(action.city, state);
    case CHANGE_START_TIME:
      return changeStartTime(action.startTime, state);
    case CHANGE_END_TIME:
      return changeEndTime(action.endTime, state);
    case CHANGE_BUDGET:
      return changeBudget(action.budget, state);
    case CHANGE_CAPACITY:
      return changeCapacity(action.capacity, state);
    case CHANGE_DATE:
      return changeDate(action.date, state);
    case CHANGE_WEEKDAY:
      return changeWeekday(action.weekday, state);
    default:
      return state;
  }
};
