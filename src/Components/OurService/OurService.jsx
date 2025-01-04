import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import service1 from "../../assests/approved-feature.svg";
import service2 from "../../assests/warranty-feature.svg";
import service3 from "../../assests/video-shooting-camera.svg";
import service4 from "../../assests/shipping-feature.svg";

const services = [
  {
    img: service1,
    title: "PTA Approved",
    description: "Mobile Phone",
  },
  {
    img: service2,
    title: "1 Year",
    description: "Brand Warranty",
  },
  {
    img: service3,
    title: "Packaging Video",
    description: "See Your Product",
  },
  {
    img: service4,
    title: "Fast Delivery",
    description: "All Over Pakistan",
  },
];

const OurService = () => {
  return (
    <Box className="container my-3">
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              className="services-info"
              textAlign="center"
              sx={{
                padding: "1rem",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                },
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />
              <Box className="services-detail" mt={2}>
                <Typography
                  variant="h6"
                  className="services-text"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="services-text1"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    color: "#555",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurService;
