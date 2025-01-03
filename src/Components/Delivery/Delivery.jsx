import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../Slices/orderSlice"; // Update with your path
import { useNavigate } from "react-router-dom"; // Import for navigation
import { Stepper, Step, StepLabel, Button, TextField, Radio, FormControlLabel } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles


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

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      // Save order details on Finish
      dispatch(addOrder(formData));
      toast.success("Order placed successfully!", { position: "top-right" });
    setTimeout(() => {
      navigate("/track-order"); // Navigate to track order page
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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField label="Enter OTP" variant="outlined" fullWidth name="otp" className="mb-3" />
        );
      case 1:
        return (
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
        );
      case 2:
        return (
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
        );
      case 3:
        return <h4 className="text-success">Please proceed to payment to complete your order.</h4>;
      default:
        return <h4>Unknown step</h4>;
    }
  };

  return (
    <div className="container mt-5">
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
            {renderStepContent(activeStep)}
            <div className="d-flex justify-content-between">
              <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                className="btn-primary"
              >
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
