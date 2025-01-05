import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null, // Ensure initial value is defined
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload; // Update selectedProduct
    },
  },
});

export const { setSelectedProduct } = cartSlice.actions;
export default cartSlice.reducer;
