import React from 'react';
import { Link } from 'react-router-dom';

// Dummy product data
const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Navigate to the ProductDetail page for the selected product */}
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
