import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Container
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(storedUser.name);
  const navigate = useNavigate();

  const handleSave = () => {
    const updatedUser = { ...storedUser, name };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate('/');
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f0f4f8", // Light background  
        minHeight: "90vh", // Full height  
        padding: { xs: "20px 0", md: "50px 0" }, // Responsive padding  
      }}
    >
      {/* Header Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "58px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            marginBottom: 2,
          }}
        >
          <Box className="d-flex gap-3 align-content-center">
            <ArrowBackIcon style={{ color: "black" }} />
            <Typography variant="body1">Edit Profile</Typography>
          </Box>
        </Box>
      </Container>


      <Paper
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "1050px" },
          maxWidth: "900px",
          height: { xs: "auto", lg: "320px" }, // Responsive height  
          bgcolor: "#fff",
          p: { xs: 2, md: 4 }, // Responsive padding  
          marginTop: 2,
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            marginBottom: 3,  // Adjusted margin for better spacing
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#48AFFF" },
              "&:hover fieldset": { borderColor: "#357dad" },
              "&.Mui-focused fieldset": { borderColor: "#48AFFF" },
            },
            "& input": { height: 18 } // Set input height  
          }}
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Email"
          value={storedUser.email}
          sx={{
            marginBottom: 3,  // Adjusted margin for better spacing
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#48AFFF" },
              "&:hover fieldset": { borderColor: "#357dad" },
              "&.Mui-focused fieldset": { borderColor: "#48AFFF" },
            },
            "& input": { height: 18 } // Set input height  
          }}
          variant="outlined"
          disabled
        />

        <TextField
          fullWidth
          label="Mobile No *"
          value={storedUser.mobile}
          sx={{
            marginBottom: 3,  // Adjusted margin for better spacing
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#48AFFF" },
              "&:hover fieldset": { borderColor: "#357dad" },
              "&.Mui-focused fieldset": { borderColor: "#48AFFF" },
            },
            "& input": { height: 18 } // Set input height  
          }}
          variant="outlined"
          disabled
        />

        <Box sx={{ display: "flex", }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: "#48AFFF",
              width: "90px",
              height: "38px",
              "&:hover": { backgroundColor: "#357dad" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditProfile;