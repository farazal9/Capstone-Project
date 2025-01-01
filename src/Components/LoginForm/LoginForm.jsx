import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast.success("Login successful!");
      window.location.replace("/");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Invalid email or password!");
    }
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
        Log in
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ backgroundColor: "#48AFFF" }}
        >
          Log in
        </Button>
      </form>
      <ToastContainer />

    </Box>
  );
};

export default LoginForm;
