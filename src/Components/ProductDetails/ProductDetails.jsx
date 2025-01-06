import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addProductToCart } from '../../Slices/cartSlice';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products from Redux state
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
    // Save selected product in Redux
    navigate("/delivery"); // Navigate to delivery page
  };

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-5 text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ddd" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="fw-bold">{product.name}</h1>
          <h5 className="text-muted">Brand: {product.brand}</h5>
          <p className="mt-3">{product.description}</p>
          <div className="mt-4">
            <h4 className="text-success fw-bold mb-1">
              PKR {product.price.toLocaleString()}
            </h4>
            <p>
              <span className="text-muted text-decoration-line-through">
                PKR {product.retailPrice.toLocaleString()}
              </span>
              <span className="ms-3 text-danger fw-bold">{product.discount}</span>
            </p>
          </div>
          <div className="mt-4">
            <button
              style={{
                background: "linear-gradient(90deg, #6A0572, #FF5733)",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
