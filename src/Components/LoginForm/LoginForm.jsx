import React, { useState } from "react";
import { Box, TextField, Button, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RegisterIMG from "../../assests/Register-header-img.svg"

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
      boxShadow: 4,
      borderRadius: 3,
      backgroundColor: "white",
      overflow: "hidden", // Ensure content stays within the box
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
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          required
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
          Log in
        </Button>
      </form>
    </Box>
  
    {/* Toast Notifications */}
    <ToastContainer />
  </Box>
  
  );
};

export default LoginForm;
