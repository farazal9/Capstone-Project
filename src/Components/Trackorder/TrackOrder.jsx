import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const orders = useSelector((state) => state.orders.orders); // Orders fetch karna
  const selectedProduct = useSelector((state) => state.cart.selectedProduct); // Selected product fetch karna

  return (
    <div className="container mt-5">
      <h3>Your Orders</h3>

      {/* Selected Product Section */}
      {selectedProduct ? (
        <div className="card p-3 mb-4">
          <h4>Selected Product</h4>
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            className="img-fluid rounded"
            style={{ maxWidth: "150px", height: "auto", marginBottom: "10px" }}
          />
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> PKR {selectedProduct.price.toLocaleString()}</p>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
        </div>
      ) : (
        <p>No product selected.</p>
      )}

      {/* Orders Section */}
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="card p-3 mb-3">
            <h5>Order #{index + 1}</h5>
            <p><strong>Full Name:</strong> {order.fullName}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Delivery Method:</strong> {order.deliveryMethod}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default TrackOrder;
