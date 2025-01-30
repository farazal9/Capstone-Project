import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(storedUser.name);
  const [email, setEmail] = useState(storedUser.email);
  const [mobile, setMobile] = useState(storedUser.mobile);
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
        marginTop: 4,  
        display: "flex",  
        flexDirection: "column",  
        alignItems: "center",  
        justifyContent: "center",  
        bgcolor: "#f0f4f8", // Light background  
        minHeight: "100vh", // Full height  
        padding: 3,  
      }}  
    >  
      <Paper  
        sx={{  
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },  
          maxWidth: "400px",  
          bgcolor: "#fff",  
          p: 4, // Increased padding  
          borderRadius: 3, // Slightly rounded corners  
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)", // More pronounced shadow  
        }}  
      >  
        <Box  
          sx={{  
            display: "flex",  
            justifyContent: "space-between",  
            alignItems: "center",  
            marginBottom: 3,  
          }}  
        >  
          <Typography variant="h5">Edit Profile</Typography>  
          <IconButton onClick={() => navigate('/')}>  
            <ArrowBackIcon />  
          </IconButton>  
        </Box>  
        
        <TextField  
          fullWidth  
          label="Name *"  
          value={name}  
          onChange={(e) => setName(e.target.value)}  
          sx={{ marginBottom: 2 }}  
          variant="outlined" // Outline variant for consistency  
        />  
        
        <TextField  
          fullWidth  
          label="Email"  
          value={email}  
          sx={{ marginBottom: 2 }}  
          variant="outlined"  
          disabled // Assuming this is static, otherwise it should be dynamic  
        />  

        <TextField  
          fullWidth  
          label="Mobile No *"  
          value={mobile}  
          sx={{ marginBottom: 2 }}  
          variant="outlined"  
          disabled // Assuming this is static, otherwise it should be dynamic  
        />  

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>  
          <Button  
            variant="contained"  
            onClick={handleSave}  
            sx={{  
              backgroundColor: "#48AFFF",  
              flex: 1,  
              marginRight: 1,  
              "&:hover": { backgroundColor: "#357dad" },  
            }}  
          >  
            Submit  
          </Button>  
          <Button  
            variant="outlined"  
            onClick={() => navigate('/')}  
            sx={{  
              color: "#48AFFF",  
              borderColor: "#48AFFF",  
              flex: 1,  
              "&:hover": {  
                backgroundColor: "#f0f8ff",  
                borderColor: "#48AFFF",  
              },  
            }}  
          >  
            Cancel  
          </Button>  
        </Box>  
      </Paper>  
    </Box>
  );
};

export default EditProfile;