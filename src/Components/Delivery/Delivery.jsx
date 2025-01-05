import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../Slices/orderSlice"; // Update path as needed
import { useNavigate } from "react-router-dom";
import { Stepper, Step, StepLabel, Button, TextField, Radio, FormControlLabel } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const Delivery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    deliveryMethod: "standard_shipping",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch selected product from Redux
  const selectedProduct = useSelector((state) => state.cart.selectedProduct);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      dispatch(addOrder(formData));
      toast.success("Order placed successfully!", { position: "top-right" });
      setTimeout(() => {
        navigate("/track-order");
      }, 2000);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-5">
      {selectedProduct && (
        <div className="card mb-4">
          <h4 className="card-header">Selected Product</h4>
          <div className="card-body d-flex align-items-center">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{ width: "100px", marginRight: "20px" }}
            />
            <div>
              <h5>{selectedProduct.name}</h5>
              <p className="text-muted">PKR {selectedProduct.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      <Stepper activeStep={activeStep} alternativeLabel className="mb-5">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="card p-4">
        {activeStep < steps.length ? (
          <>
            {activeStep === 0 && (
              <TextField label="Enter OTP" variant="outlined" fullWidth name="otp" className="mb-3" />
            )}
            {activeStep === 1 && (
              <>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3"
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mb-3"
                />
                <div className="mb-3">
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.deliveryMethod === "standard_shipping"}
                        onChange={handleChange}
                        value="standard_shipping"
                        name="deliveryMethod"
                      />
                    }
                    label="Standard Shipping"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.deliveryMethod === "open_parcel"}
                        onChange={handleChange}
                        value="open_parcel"
                        name="deliveryMethod"
                      />
                    }
                    label="Open Parcel Delivery"
                  />
                </div>
              </>
            )}
            {activeStep === 3 && <h4 className="text-success">Please proceed to payment to complete your order.</h4>}
            <div className="d-flex justify-content-between">
              <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext} className="btn-primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </>
        ) : (
          <h3>All steps completed! Thank you for your order.</h3>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Delivery;
