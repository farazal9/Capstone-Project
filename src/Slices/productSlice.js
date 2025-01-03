// Redux slice for products
import { createSlice } from "@reduxjs/toolkit";

// Initial products data
const initialProducts = [
  {
    id: 1,
    name: "Audionic Airbud 550",
    description: "High-quality wireless earbuds with a comfortable fit.",
    price: 3811,
    // Other properties...
  },
  {
    id: 2,
    name: "Anker R50i Earbuds",
    description: "Premium audio quality with long battery life.",
    price: 4611,
    // Other properties...
  },
  // Add remaining products here
];

// Slice to manage products
const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

// Function to repeat products with unique properties
const generateProducts = () => {
  let allProducts = [];
  
  // Repeat the initial products 4 times to get 48 products
  for (let i = 0; i < 4; i++) {
    initialProducts.forEach((product, index) => {
      const uniqueProduct = {
        ...product,
        id: product.id + index + i * initialProducts.length, // Unique ID
        name: `${product.name} - Copy ${i + 1}`, // Unique name
        description: `${product.description} (Copy ${i + 1})`, // Unique description
        // Add any other unique property you need
      };
      allProducts.push(uniqueProduct);
    });
  }

  return allProducts;
};

// Dispatch products to Redux store
export const fetchProducts = () => (dispatch) => {
  const products = generateProducts();
  dispatch(setProducts(products)); // Dispatch updated products
};

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
