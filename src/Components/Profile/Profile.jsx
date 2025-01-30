import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Divider,
  Paper,
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
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user] = useState(storedUser);
  const navigate = useNavigate();

  const sectionStyles = {
    textAlign: "center",
    padding: "8px 0",
  };

  return (
    <Box className="pb-5" sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <Paper elevation={2} sx={{ backgroundColor: "#48AFFF", padding: 3, color: "white", textAlign: "center", marginTop: "30px"}}>
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
            display: "inline-block",
            marginTop: 1,
            color: "black",
            borderRadius: 4,
          }}
        >
          Priceoye Club Member
        </Typography>
      </Paper>

      {/* My Orders and Help Sections */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12} lg={6}>
          <Paper elevation={2} sx={{ padding: 2 }}>
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
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper elevation={2} sx={{ padding: 2}}>
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
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 3 }} />

      {/* Services Section */}
      <Paper elevation={2} sx={{ padding: 2 }}>
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
      </Paper>

      <Divider sx={{ marginY: 3 }} />

      {/* Profile Section */}
      <Paper elevation={2} sx={{ padding: 2}}>
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
            onClick={() => navigate('/edit-profile')}
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
      </Paper>
    </Box>
  );
};

export default Profile;