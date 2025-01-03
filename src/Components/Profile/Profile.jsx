import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import {
  Person,
  Payment,
  Receipt,
  Comment,
  Replay,
  SupportAgent,
  Edit,
  LocationOn,
  Phone,
  MailOutline,
  Lock,
} from "@mui/icons-material";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleSave = () => {
    const updatedUser = { ...user, name: newName };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    window.location.reload();
  };

  const sectionStyles = {
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      borderRadius: "8px",
    },
    padding: "8px 0",
  };

  return (
    <Box className="pb-5" sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#48AFFF",
          padding: 3,
          color: "white",
          textAlign: "center",
          marginTop:"30px"
        }}
      >
        <Avatar
          sx={{
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            width: 100,
            height: 100,
            marginBottom: 1,
            color: "#48AFFF",
          }}
        >
          <Person sx={{ fontSize: 50 }} />
        </Avatar>
        <Typography variant="h5">{user.name}</Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#ffeb3b",
            padding: "4px 8px",
            borderRadius: 4,
            display: "inline-block",
            marginTop: 1,
            color:"black"
          }}
        >
          Priceoye Club Member
        </Typography>
      </Box>

      {/* My Orders and Help Sections */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            My Orders
          </Typography>
          <Grid container spacing={2}>
            {[
              { label: "Pay", icon: <Payment /> },
              { label: "Receive", icon: <Receipt /> },
              { label: "Review", icon: <Comment /> },
              { label: "Refund", icon: <Replay /> },
              { label: "Complaints", icon: <SupportAgent /> },
              { label: "Addons", icon: <Edit /> },
            ].map((item, index) => (
              <Grid
                item
                xs={4}
                key={index}
                sx={{
                  ...sectionStyles,
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  sx={{
                    paddingTop: 1,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            Help
          </Typography>
          <Grid container spacing={2}>
            {[
              { label: "FAQs", icon: <MailOutline /> },
              { label: "Open Parcel", icon: <Lock /> },
              { label: "Contact", icon: <Phone /> },
              { label: "Locations", icon: <LocationOn /> },
              { label: "EMI", icon: <Payment /> },
            ].map((item, index) => (
              <Grid
                item
                xs={4}
                key={index}
                sx={{
                  ...sectionStyles,
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  sx={{
                    paddingTop: 1,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 3 }} />

      {/* Services Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{ marginBottom: 2, textAlign: "center" }}
        >
          Services
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: "Support", icon: <SupportAgent /> },
            { label: "Warranty", icon: <Lock /> },
            { label: "BNPL", icon: <Payment /> },
          ].map((item, index) => (
            <Grid
              item
              xs={4}
              key={index}
              sx={{
                ...sectionStyles,
                cursor: "pointer",
              }}
            >
              {item.icon}
              <Typography
                variant="body2"
                sx={{
                  paddingTop: 1,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Profile Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{ marginBottom: 2, textAlign: "center" }}
        >
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              ...sectionStyles,
              cursor: "pointer",
            }}
          >
            <MailOutline />
            <Typography
              variant="body2"
              sx={{
                paddingTop: 1,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Address Book
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              ...sectionStyles,
              cursor: "pointer",
            }}
            onClick={() => setIsEditing(true)}
          >
            <Edit />
            <Typography
              variant="body2"
              sx={{
                paddingTop: 1,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Edit Profile
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {isEditing && (
  <Box
    sx={{
      marginTop: 4, // Space above the form
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center horizontally
      justifyContent: "center", // Center vertically
    }}
  >
    <Box
      sx={{
        width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Responsive width
        maxWidth: "400px", // Prevent it from being too wide
        bgcolor: "#fff",
        p: 3, // Padding inside the form
        borderRadius: 2, // Rounded corners
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <TextField
        fullWidth
        label="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            backgroundColor: "#48AFFF",
            marginRight: 1,
            "&:hover": { backgroundColor: "#357dad" },
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={() => setIsEditing(false)}
          sx={{
            color: "#48AFFF",
            borderColor: "#48AFFF",
            "&:hover": {
              backgroundColor: "#f0f8ff",
              borderColor: "#48AFFF",
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Box>
)}

    </Box>
  );
};

export default Profile;
