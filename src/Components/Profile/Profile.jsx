import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import {Person2Rounded} from "@mui/icons-material";
import {ReactComponent  as Address } from "../../assests/address-book.svg"
import {ReactComponent  as Pencil } from "../../assests/pencil.svg"
import {ReactComponent  as Support } from "../../assests/support-icon.svg"
import {ReactComponent  as Warranty } from "../../assests/e-warranty-icon.svg"
import {ReactComponent  as Bnpl } from "../../assests/bnpl-icon.svg"
import {ReactComponent  as Pay } from "../../assests/Prof1.svg"
import {ReactComponent  as Recieve } from "../../assests/Prof2.svg"
import {ReactComponent  as Review } from "../../assests/Prof3.svg"
import {ReactComponent  as Refund } from "../../assests/prof4.svg"
import {ReactComponent  as Complaints } from "../../assests/Prof5.svg"
import {ReactComponent  as Faqs } from "../../assests/faqs-icon.svg"
import {ReactComponent  as Parcel } from "../../assests/open-parcel-icon.svg"
import {ReactComponent  as Contact } from "../../assests/contact-icon.svg"
import {ReactComponent  as Location } from "../../assests/location-icon.svg"
import {ReactComponent  as Emi } from "../../assests/emi-icon.svg"
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
      <Paper elevation={2} sx={{ backgroundColor: "#48AFFF", padding: 3, color: "white", marginTop: "30px"}}>
      <Box className="d-flex gap-5 align-items-center">
      <Avatar
          sx={{
            backgroundColor: "#FFFFFF",
            width: 100,
            height: 100,
            color: "#48AFFF",
          }}
        >
          <Person2Rounded sx={{ fontSize: 50 }} />
        </Avatar>
     

     <Box>
     <Typography variant="h5">{user.name}</Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#ffeb3b",
            padding: "4px 8px",
            display: "inline-block",
            color: "black",
            borderRadius: 4,
          }}
        >
          Priceoye Club Member
        </Typography>
     </Box>
      </Box>
      </Paper>

      {/* My Orders and Help Sections */}
      <Grid container spacing={3} className="mt-3">
      {/* My Orders Section */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} className="p-3" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <Typography variant="h6" className="mb-3 text-center">
            My Orders
          </Typography>
          <Grid container spacing={2}>
            {[
              { label: "Pay", icon: <Pay /> },
              { label: "Receive", icon: <Recieve /> },
              { label: "Review", icon: <Review /> },
              { label: "Refund", icon: <Refund /> },
              { label: "Complaints", icon: <Complaints /> },
              { label: "Addons", icon: <Warranty /> },
            ].map((item, index) => (
              <Grid
                item
                xs={6} sm={4} md={4} lg={2} // Each item will take 2 columns in a 12-column grid (6 items per row) only on large screens
                key={index}
                className="text-center"
                sx={{
                  ...sectionStyles,
                  cursor: 'pointer',
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  className="pt-1"
                  sx={{
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

      {/* Help Section */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} className="p-3" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <Typography variant="h6" className="mb-3 text-center">
            Help
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              { label: "FAQs", icon: <Faqs /> },
              { label: "Open Parcel", icon: <Parcel /> },
              { label: "Contact", icon: <Contact /> },
              { label: "Locations", icon: <Location /> },
              { label: "EMI", icon: <Emi /> },
            ].map((item, index) => (
              <Grid
                item
                xs={6} sm={4} md={4} lg={2} // Each item will take 2 columns in a 12-column grid (5 items per row) only on large screens
                key={index}
                className="text-center"
                sx={{
                  ...sectionStyles,
                  cursor: 'pointer',
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  className="pt-1"
                  sx={{
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
        <Typography  className="fw-bold fs-5 text-center pb-3"
          variant="h6"
         
        >
          Services
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: "Support", icon: <Support style={{ width: '35px', height: '35px' }} /> },
            { label: "Warranty", icon: <Warranty style={{ width: '35px', height: '35px' }} /> },
            { label: "BNPL", icon: <Bnpl  style={{ width: '35px', height: '35px' }} /> },
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
      <Paper elevation={2} className="p-3">
      <Typography variant="h6" className="mb-3 text-center fw-bold fs-5">
        Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          className="text-center"
          sx={{
            ...sectionStyles,
            cursor: 'pointer',
          }}
        >
          <Address style={{ width: '35px', height: '35px' }} />
          <Typography
            variant="body2"
            className="pt-1"
            sx={{
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Address Book
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          className="text-center"
          sx={{
            ...sectionStyles,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/edit-profile')}
        >
          <Pencil style={{ width: '35px', height: '35px' }} />
          <Typography
            variant="body2"
            className="pt-1"
            sx={{
              fontSize: 14,
              fontWeight: 700,
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