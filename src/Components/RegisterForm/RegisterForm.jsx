import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import RegisterIMG from "../../assests/Register-header-img.svg";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (data) => {
    localStorage.setItem("user", JSON.stringify(data));  // Save user data
    toast.success("Registration successful!");
    setTimeout(() => {
      navigate("/login"); 
    }, 2000);  
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "50px auto",
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: "white",
        overflow: "hidden", // Ensure no content spills out of the box
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={RegisterIMG}
        alt="Register Illustration"
        sx={{
          width: "100%",
          height: "auto",
          display: "block", // Ensures no extra spaces
          objectFit: "cover",
        }}
      />

      {/* Form Section */}
      <Box sx={{ padding: 4 }}>
        <form onSubmit={handleSubmit(handleRegister)}>
          <TextField
            fullWidth
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#48AFFF",
              padding: "10px 0",
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#007acc",
              },
            }}
          >
            Register
          </Button>
        </form>
      </Box>

      {/* Toast Notifications */}
      <ToastContainer />
    </Box>
  );
};

export default RegisterForm;