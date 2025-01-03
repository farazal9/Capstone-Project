import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/orderSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store;
