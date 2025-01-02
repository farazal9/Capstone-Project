import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, TextField, Radio, FormControlLabel } from "@mui/material";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const Delivery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    deliveryMethod: "standard_shipping",
  });


  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            label="Enter OTP"
            variant="outlined"
            fullWidth
            className="mb-3"
            name="otp"
          />
        );
      case 1:
        return (
          <>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              className="mb-3"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className="mb-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              className="mb-3"
              name="address"
              value={formData.address}
              onChange={handleChange}
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
        return (
          <h4 className="text-success">
            Please proceed to payment to complete your order.
          </h4>
        );
      default:
        return <h4>Unknown step</h4>;
    }
  };

  return (
    <div className="container mt-5">
      {/* Stepper */}
      <Stepper activeStep={activeStep} alternativeLabel className="mb-5">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <span
                className={`p5 ${activeStep >= index ? "text-primary" : "text-muted"}`}
              >
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}
      <div className="card p-4">
        {activeStep < steps.length ? (
          <>
            <h4 className="mb-4">{steps[activeStep]}</h4>
            {renderStepContent(activeStep)}
            <div className="d-flex justify-content-between">
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
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

   
    </div>
  );
};

export default Delivery;
