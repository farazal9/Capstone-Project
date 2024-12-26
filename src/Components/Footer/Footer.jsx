import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from "../../assests/logo.svg"
import f1 from "../../assests/footer1.svg"
import playstore from "../../assests/google-play-store.png"


const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{ backgroundColor: "#48AFFF", color: "white", padding: "20px 0" }}
            className="container-fluid"
        >
            {/* Secondary Footer */}
            <Box className="container-lg d-flex justify-content-between">
                {/* Column 1 */}
                <Box>
                    <img
                        className="d-block mb-3"
                        alt="Logo"
                        src={logo}
                       
                    />
                    <ul className="list-unstyled">
                        {["About Us", "FAQs", "Contact Us", "Careers", "Blog", "Terms & Conditions"].map(
                            (item, index) => (
                                <li key={index} className="mb-2">
                                    <Typography variant="body2">{item}</Typography>
                                </li>
                            )
                        )}
                    </ul>
                </Box>

                {/* Column 2 */}
                <Box>
                    <Typography variant="h6" className="mb-3">
                        Customer Service
                    </Typography>
                    <ul className="list-unstyled">
                        {["Help Center", "Privacy Policy", "Installments Plan", "E-Warranty Activation", "Sell"].map(
                            (item, index) => (
                                <li key={index} className="mb-2">
                                    <Typography variant="body2">{item}</Typography>
                                </li>
                            )
                        )}
                    </ul>
                </Box>

                {/* Column 3 */}
                <Box>
                    <Typography variant="h6" className="mb-3">
                    Secure Payments Methods
                    </Typography>
                    <img  className='img-fluid w-50'  src={f1} alt="" />
             <Box className="mt-4">
             <img className='img-fluid w-25' src={playstore} alt="" />
             </Box>
               
              
                </Box>
              
            </Box>

            {/* Primary Footer */}
            <Box className="container-lg d-flex justify-content-between align-items-center mt-4">
                <Typography variant="body2">Copyright © 2024 Priceoye.pk</Typography>
         
            </Box>
        </Box>
    );
};

export default Footer;
