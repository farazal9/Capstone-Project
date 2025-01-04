import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import logo from "../../assests/logo.svg";
import f1 from "../../assests/footer1.svg";
import playstore from "../../assests/google-play-store.png";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#48AFFF",
                color: "white",
                padding: "40px 20px",
            }}
        >
            {/* Footer Content */}
            <Box className="container-lg">
                <Grid container spacing={3}>
                    {/* Column 1 */}
                    <Grid item xs={12} sm={4}>
                        <img
                            alt="Logo"
                            src={logo}
                            style={{ width: "150px", marginBottom: "16px" }}
                        />
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>About Us</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>FAQs</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>Contact Us</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>Careers</Typography>
                        <Typography variant="body2">Blog</Typography>
                    </Grid>

                    {/* Column 2 */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                            Customer Service
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>Help Center</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>Privacy Policy</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>Installments Plan</Typography>
                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>E-Warranty Activation</Typography>
                        <Typography variant="body2">Sell</Typography>
                    </Grid>

                    {/* Column 3 */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                            Secure Payment Methods
                        </Typography>
                        <img
                            src={f1}
                            alt="Secure Payments"
                            style={{ width: "100%", maxWidth: "200px", marginBottom: "16px" }}
                        />
                        <br />
                        <img
                            src={playstore}
                            alt="Google Play Store"
                            style={{ width: "100px" }}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Footer Bottom */}
            <Box
                sx={{
                    marginTop: "40px",
                    textAlign: "center",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                    paddingTop: "20px",
                }}
            >
                <Typography variant="body2">
                    Copyright © 2024 Priceoye.pk
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
