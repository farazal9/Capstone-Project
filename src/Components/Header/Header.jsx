import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import logo from '../../assests/logo.svg';
import bar from "../../assests/bar.svg";
import { useNavigate } from "react-router-dom";



export function PrimarySearchAppBar() {
  const [loggedIn, setLoggedIn] = useState(false); // Replace this with actual auth state
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [userName, setUserName] = useState(""); // User name state

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedIn(true);
      setUserName(storedUser.name);  // User ka naam localStorage se set karna
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#48AFFF" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          {/* Left Section: Logo and Menu Icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src={bar} alt="Menu" style={{ height: "18px" }} />
            <img src={logo} alt="Logo" style={{ height: "25px" }} />
          </Box>

          {/* Center Section: Search Bar */}
          <div className="d-none d-md-flex align-items-center shadow p-2 rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
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
        <Avatar sx={{ bgcolor: "#ffffff", color: "#48AFFF" }}>
          {userName ? userName.charAt(0) : "?"}
        </Avatar>
        <span className='text-white fs-6 ms-1'>{userName || "Guest"}</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { handleMenuClose(); navigate("/profile"); }}>
          Profile
        </MenuItem>
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
