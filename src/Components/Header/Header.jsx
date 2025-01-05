import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Avatar, Menu, MenuItem, Accordion, AccordionSummary, Typography, AccordionDetails, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import logo from '../../assests/logo.svg';
import bar from "../../assests/bar.svg";
import { useNavigate } from "react-router-dom";

// drawer imports

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookIcon from '@mui/icons-material/Book';
import { Close } from '@mui/icons-material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from '@mui/icons-material/Logout';
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AirIcon from "@mui/icons-material/Air";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import SpeakerIcon from "@mui/icons-material/Speaker";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TvIcon from "@mui/icons-material/Tv";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';




const categories = [
  {
    name: "Mobiles",
    icon: <MobileFriendlyIcon />,
    options: [
      "Samsung",
      "iPhone",
      "OnePlus",
      "Xiaomi",
      "Realme",
      "Oppo",
      "Vivo",
      "Nokia",
      "Motorola",
    ],
  },
  {
    name: "Smart Watches",
    icon: <WatchIcon />,
    options: [
      "Apple Watch",
      "Fitbit",
      "Samsung Galaxy Watch",
      "Garmin",
      "Huawei Watch",
      "Fossil",
      "Amazfit",
      "TicWatch",
      "Skagen",
    ],
  },
  {
    name: "Wireless Earbuds",
    icon: <HeadphonesIcon />,
    options: [
      "AirPods",
      "Sony WF-1000XM4",
      "Bose QuietComfort",
      "Jabra Elite",
      "Samsung Galaxy Buds",
      "Beats Studio Buds",
      "Anker Soundcore",
      "Sennheiser Momentum",
      "Google Pixel Buds",
    ],
  },
  {
    name: "Air Purifiers",
    icon: <AirIcon />,
    options: [
      "Dyson",
      "Philips",
      "Honeywell",
      "Blueair",
      "Sharp",
      "Coway",
      "Levoit",
      "Winix",
      "Xiaomi Mi Air",
    ],
  },
  {
    name: "Personal Cares",
    icon: <FaceRetouchingNaturalIcon />,
    options: [
      "Trimmers",
      "Hair Dryers",
      "Straighteners",
      "Electric Shavers",
      "Epilators",
      "Hair Clippers",
      "Face Steamers",
      "Oral Care",
      "Skin Massagers",
    ],
  },
  {
    name: "Bluetooth Speakers",
    icon: <SpeakerIcon />,
    options: [
      "JBL",
      "Bose",
      "Sony",
      "Marshall",
      "Anker",
      "UE Boom",
      "Sonos",
      "Bang & Olufsen",
      "LG XBoom",
    ],
  },
  {
    name: "Power Banks",
    icon: <BatteryChargingFullIcon />,
    options: [
      "Mi Power Bank",
      "Anker",
      "Samsung",
      "OnePlus",
      "Duracell",
      "Belkin",
      "RavPower",
      "Zendure",
      "Baseus",
    ],
  },
  {
    name: "Tablets",
    icon: <TabletMacIcon />,
    options: [
      "iPad",
      "Samsung Galaxy Tab",
      "Microsoft Surface",
      "Lenovo Tab",
      "Huawei MatePad",
      "Amazon Fire",
      "Asus ZenPad",
      "Google Pixel Tablet",
      "Xiaomi Pad",
    ],
  },
  {
    name: "Laptops",
    icon: <LaptopMacIcon />,
    options: [
      "MacBook",
      "Dell",
      "HP",
      "Lenovo",
      "Asus",
      "Acer",
      "Microsoft Surface",
      "Razer Blade",
      "MSI",
    ],
  },
  {
    name: "TV & Home Appliances",
    icon: <TvIcon />,
    options: [
      "Smart TVs",
      "Refrigerators",
      "Microwaves",
      "Washing Machines",
      "Air Conditioners",
      "Water Heaters",
      "Dishwashers",
      "Ovens",
      "Home Theaters",
    ],
  },
  {
    name: "Motorcycle",
    icon: <TwoWheelerIcon />,
    options: [
      "Helmets",
      "Tires",
      "Accessories",
      "Riding Gear",
      "Chain Lubricants",
      "Motor Oils",
      "Bike Covers",
      "Lights",
      "Brake Pads",
    ],
  },
];


export function PrimarySearchAppBar() {
  const [loggedIn, setLoggedIn] = useState(false); // Replace this with actual auth state
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [userName, setUserName] = useState(""); // User name state

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedIn(true);
      setUserName(storedUser.name);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
    localStorage.removeItem("user"); // User data ko localStorage se remove karna
    window.location.reload();  // Page ko refresh karna
  };

  // drawer code


  const handleTrackOrder = () => {
    navigate("/track-order"); // Replace with the actual route for Track my Order
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [open, setOpen] = useState(false);


  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" >
      <List
        sx={{
          bgcolor: "#48AFFF",
          px: 5,
          py: 5,
          p: 3,
        }}
      >
        <Box className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <img
            className='img-fluid'
            src={logo}
            alt="Logo"
            style={{ height: "25px", cursor: "pointer" }}
            onClick={() => navigate("/")} // Navigate to home page
          />

          <Close
            sx={{
              cursor: "pointer",
              color: "white",
              fontSize: "1.5rem",
              "&:hover": { color: "#ffeb3b" },
            }}
            onClick={toggleDrawer(false)}
          />
        </Box>
        {/* Login Button */}
        <Button
          className="d-none d-md-block"
          variant="contained"
          sx={{
            mt: 2, // Top margin
            backgroundColor: "white",
            color: "#48AFFF",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "#48AFFF",
              color: "white",
            },
          }}
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>

        {/* Track My Order */}
        <Box
          className="text-white"
          sx={{ display: "flex", alignItems: "center", pt: 2, cursor: "pointer" }}
          onClick={handleTrackOrder}
        >
          <LocationOnIcon sx={{ mr: 1 }} />
          Track my order
        </Box>

        {/* Launch a Complaint */}
        <Box
          className="text-white"
          sx={{ display: "flex", alignItems: "center", mt: 2 }}
        >
          <BookIcon sx={{ mr: 1 }} />
          Launch a Complaint
        </Box>

        <Box
          className="text-white"
          sx={{ display: "flex", alignItems: "center", mt: 2, cursor: "pointer" }}
          onClick={handleLogout}
        >
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </Box>


      </List>
      <Divider />

      {/* Categories Dropdown */}
      <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: "gray", mb: 2 }}>
        Categories
      </Typography>
      <List>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <Accordion
              sx={{
                my: 1,
                "&.Mui-expanded": {
                  bgcolor: "#f7f7f7",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                },
              }}
              disableGutters
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ padding: "0 16px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {category.icon}
                  <Typography
                    sx={{
                      ml: 1,
                      fontSize: "0.9rem",
                      color: "gray",
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ py: 1, pl: 3 }}>
                <List disablePadding>
                  {category.options.map((option, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 2,
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <ListItemText
                          primary={option}
                          primaryTypographyProps={{
                            fontSize: "0.85rem",
                            color: "gray",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
            {index < categories.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>

      <Box
      sx={{
        width: 300,
        bgcolor: "#fff",
        p: 3,
        height: "100vh",
   
      }}
    >
      {/* POPULAR LISTS */}
      <Typography
        variant="h6"
        className="heading"
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#666",
          mb: 1.5,
          textTransform: "uppercase",
        }}
      >
        POPULAR LISTS
      </Typography>
      <List
        sx={{
          padding: 0,
          listStyle: "none",
        }}
      >
        {[
          "Best Mobiles Under 10000",
          "Best Mobiles Under 15000",
          "Best Mobiles Under 20000",
          "Best Mobiles Under 30000",
          "Best Mobiles Under 40000",
          "Best Mobiles Under 50000",
          "Best Mobiles Under 60000",
          "Best Mobiles Under 80000",
          "Best Mobiles Under 100000",
          "Best 5G Phones",
          "Best Camera Phones",
          "Best Selfie Camera Phones",
          "Best PUBG Mobiles",
          "Most Expensive Phones",
          "Top 10 Fast Charging Mobiles",
          "Best Mobiles of 2023",
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: 0,
              marginBottom: "8px",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              className="btn-outline-grey"
              sx={{
                width: "80%",
                justifyContent: "flex-start",
                fontSize: "12px",
                fontWeight:"bold",
                color: "GrayText",
                borderColor: "#ccc",
                padding: "5px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#48AFFF",
                  color: "white",
                  borderColor: "#999",
                },
              }}
            >
              {item}
            </Button>
          </ListItem>
        ))}
      </List>

      {/* MAIN NAVIGATION */}
      <Box sx={{ mt: 3 }} className="sb-nav-box">
        <Typography
          variant="h6"
          className="heading"
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#666",
            mb: 1.5,
            textTransform: "uppercase",
          }}
        >
          MAIN NAVIGATION
        </Typography>
        <List
          sx={{
            padding: 0,
            listStyle: "none",
          }}
        >
          {[
            { text: "About", link: "https://priceoye.pk/about" },
            { text: "FAQs", link: "https://priceoye.pk/faqs" },
            { text: "Careers", link: "https://priceoye.pk/careers" },
            { text: "Contact", link: "https://priceoye.pk/contact" },
            { text: "Privacy Policy", link: "https://priceoye.pk/privacy" },
            { text: "Press & Blog", link: "https://priceoye.pk/blog" },
            { text: "Installments Plan", link: "https://priceoye.pk/bnpl" },
            { text: "Terms & Condition", link: "https://priceoye.pk/terms" },
            { text: "Warranty Center", link: "https://priceoye.pk/warranty-center" },
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                padding: 0,
                marginBottom: "8px",
              }}
            >
            
                {item.text}
            
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#48AFFF" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Section: Logo and Menu Icon */}
          <Box sx={{ display: "flex", alignItems: "center", }}>
            <Button onClick={toggleDrawer(true)}> <img className='img-fluid' src={bar} alt="Menu" style={{ height: "18px" }} /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>

            <img className='img-fluid' src={logo} alt="Logo" style={{ height: "25px" }} />

          </Box>

          {/* Center Section: Search Bar */}
          <div className="d-none d-md-flex align-items-center shadow p-2 rounded bg-white" style={{ maxWidth: '30vw', width: '100%' }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ flex: 1, ml: 1 }}
            />
            <MicIcon sx={{ color: "#48AFFF" }} />
          </div>

          {/* Right Section: Buttons or Profile */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {!loggedIn ? (
              <>
                <Button
                  className='d-none d-md-block'
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#48AFFF",
                    border: "1px solid white",
                    "&:hover": {
                      backgroundColor: "#48AFFF",
                      color: "white",
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#48AFFF",
                    color: "white",
                    border: "1px solid white",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#48AFFF",
                    },
                  }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <IconButton onClick={handleMenuOpen}>
                  <Avatar sx={{ bgcolor: "#ffffff", color: "#48AFFF", }}>
                    {userName.charAt(0)} {/* User ke naam ka pehla letter */}
                  </Avatar>
                  <span className='text-white fs-6 ms-1'>{userName}</span>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => { handleMenuClose(); navigate("/profile"); }}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleTrackOrder}>track order</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>

                </Menu>

              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const Header = () => {
  return <PrimarySearchAppBar />;
};

export default Header;
