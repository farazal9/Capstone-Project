import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assests/logo.svg';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';






// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));





export function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };




  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#48AFFF" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
            px: 2,
          }}
        >
          {/* Left Section: Menu Icon and Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",  // Ensures center alignment
                gap: 1,  // Adds space between the logo and the mic icon
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src={logo} alt="Logo" style={{ height: "25px" }} />
              </Typography>
            </Box>
          </Box>

          {/* Center Section: Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 1,
              px: 2,
              width: { xs: "100%", sm: "400px", md: "400px" }, // Responsive width
              height: "40px", // Increased height
              justifyContent: { xs: "space-between", sm: "center" }, // Space management
              margin: { sm: "0 auto" }, // Center the bar on larger screens
              gap: 1,
              boxShadow: { sm: "0 4px 10px rgba(0, 0, 0, 0.1)" }, // Optional shadow for better design
            }}
          >
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                flex: 1,
                color: "gray",
                ml: { xs: 0, sm: 1 }, // Small margin for spacing on larger screens
              }}
            />
            <MicIcon sx={{ color: "#48AFFF" }} />
          </Box>


          {/* Right Section: Buttons (Visible only on md and larger) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#48AFFF",
                "&:hover": {
                  backgroundColor: "#48AFFF",
                  color: "white",
                },
              }}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#48AFFF",
                color: "white",
                "&:hover": {
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
