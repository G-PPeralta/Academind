import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import toggleCartReducer from "./toggle-cart";


const store = configureStore({
  reducer: {
    toggleCart: toggleCartReducer,
    cart: cart
  },
});

export default store;