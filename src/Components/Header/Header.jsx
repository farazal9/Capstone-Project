import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import logo from '../../assests/logo.svg';
import bar from "../../assests/bar.svg";

// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff',
  padding: '0 16px',
  width: '100%',
  maxWidth: '400px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

export function PrimarySearchAppBar() {
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
          <Search>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ flex: 1, ml: 1 }}
            />
            <MicIcon sx={{ color: "#48AFFF" }} />
          </Search>

          {/* Right Section: Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#48AFFF",
                border: "1px solid white",
                '&:hover': {
                  backgroundColor: "#48AFFF",
                  color: "white",
                },
              }}
            >
              Log in
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#48AFFF",
                color: "white",
                border: "1px solid white",
                '&:hover': {
                  backgroundColor: "white",
                  color: "#48AFFF",
                },
              }}
            >
              Register
            </Button>
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
