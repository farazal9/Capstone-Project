import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../Slices/orderSlice";
import { useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { CheckCircle, Edit, LocationOn } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const Delivery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    mobileNumber: "03173328926",
    otp: "",
    fullName: "",
    email: "farazxwave@gmail.com",
    address: "",
    deliveryMethod: "",
    paymentMethod: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems = [] } = useSelector((state) => state.cart);

  useEffect(() => {
    validateForm();
  }, [formData, activeStep]);

  const validateForm = () => {
    let isValid = true;
    switch (activeStep) {
      case 0:
        isValid = !!formData.otp;
        break;
      case 1:
        isValid = !!formData.fullName && !!formData.email;
        break;
      case 2:
        isValid = !!formData.address && !!formData.deliveryMethod;
        break;
      case 3:
        isValid = !!formData.paymentMethod;
        break;
      default:
        isValid = false;
    }
    setIsFormValid(isValid);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    dispatch(addOrder({ ...formData, cartItems }));
    toast.success("Order placed successfully!");
    setTimeout(() => navigate("/track-order"), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 800, margin: "0 auto" }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  "&.Mui-active": { color: "#48AFFF" },
                  "&.Mui-completed": { color: "#48AFFF" },
                },
              }}
              sx={{ "& .MuiStepLabel-label": { fontWeight: 600 } }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          {activeStep === 0 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Mobile Number Verification
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Chip label={formData.mobileNumber} color="success" />
                <CheckCircle color="success" sx={{ ml: 1 }} />
              </Box>
              <TextField
                fullWidth
                label="Enter OTP"
                variant="outlined"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: formData.otp && <CheckCircle color="success" />,
                }}
              />
            </Box>
          )}

          {activeStep === 1 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                sx={{ mb: 2 }}
                value={formData.fullName}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: <Edit color="action" />,
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: <Edit color="action" />,
                }}
              />
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Delivery Details
              </Typography>
              <TextField
                fullWidth
                label="Delivery Address"
                name="address"
                multiline
                rows={3}
                sx={{ mb: 3 }}
                value={formData.address}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: <LocationOn color="action" />,
                }}
              />
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Select Delivery Type
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Card
                  onClick={() =>
                    setFormData({ ...formData, deliveryMethod: "standard_shipping" })
                  }
                  sx={{
                    p: 2,
                    border:
                      formData.deliveryMethod === "standard_shipping"
                        ? "2px solid #48AFFF"
                        : "1px solid #ddd",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  <Typography fontWeight={600}>Standard Shipping</Typography>
                  <Typography variant="body2" color="textSecondary">
                    01 Feb - 04 Feb
                  </Typography>
                </Card>
                <Card
                  onClick={() =>
                    setFormData({ ...formData, deliveryMethod: "open_parcel" })
                  }
                  sx={{
                    p: 2,
                    border:
                      formData.deliveryMethod === "open_parcel"
                        ? "2px solid #48AFFF"
                        : "1px solid #ddd",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  <Typography fontWeight={600}>Check Karo, Pay Karo</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Open Parcel
                  </Typography>
                </Card>
              </Box>
            </Box>
          )}

          {activeStep === 3 && (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Payment Method
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Card
                  onClick={() =>
                    setFormData({ ...formData, paymentMethod: "cod" })
                  }
                  sx={{
                    p: 2,
                    border:
                      formData.paymentMethod === "cod"
                        ? "2px solid #48AFFF"
                        : "1px solid #ddd",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  <Typography fontWeight={600}>Cash on Delivery</Typography>
                </Card>
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                bgcolor: "#ddd",
                color: "#000",
                "&:hover": { bgcolor: "#bbb" },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!isFormValid}
              sx={{
                bgcolor: "#48AFFF",
                "&:hover": { bgcolor: "#3A8ECC" },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              {activeStep === steps.length - 1 ? "Confirm Order" : "Continue"}
            </Button>
          </Box>
        </CardContent>
      </Card>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default Delivery;