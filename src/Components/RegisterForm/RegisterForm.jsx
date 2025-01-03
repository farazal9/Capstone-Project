import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import RegisterIMG from "../../assests/Register-header-img.svg"

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    localStorage.setItem("user", JSON.stringify(data));  // User data save karna
    toast.success("Registration successful!");
    setTimeout(() => {
      navigate("/login"); 
    }, 2000);  
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
        type="password"
        {...register("password", { required: "Password is required" })}
        error={!!errors.password}
        helperText={errors.password?.message}
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
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
