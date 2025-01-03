import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="container mt-5">
      <h3>Your Orders</h3>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="card p-3 mb-3">
            <h5>Order #{index + 1}</h5>
            <p>Full Name: {order.fullName}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Delivery Method: {order.deliveryMethod}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default TrackOrder;
