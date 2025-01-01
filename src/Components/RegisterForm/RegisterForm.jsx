import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit(handleRegister)}>
        <TextField
          fullWidth
          label="Name"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ backgroundColor: "#48AFFF" }}
        >
          Register
        </Button>
      </form>
      <ToastContainer/>
    </Box>
  );
};

export default RegisterForm;
