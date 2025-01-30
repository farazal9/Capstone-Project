import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/orderSlice";
import productReducer from "./Slices/ProductSlice"; // Ensure the correct casing
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
    products: productReducer, // Integrating the product slice
    cart: cartReducer,
  },
});

export default store;