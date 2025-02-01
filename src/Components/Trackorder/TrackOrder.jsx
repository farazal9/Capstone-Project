import React from "react";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography } from "@mui/material";

const TrackOrder = () => {
  const selectedProducts = useSelector((state) => state.cart.selectedProducts); // Fetch all products

  return (
    <Box sx={{ bgcolor: "#F1F3F6" }}>
      <div className="container py-5" style={{ minHeight: "100vh", padding: "20px 0" }}>
        <Box
          sx={{
            height: "58px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            marginBottom: 2,
            width: {
              xs: "90%", // 90% width on extra small screens
              sm: "80%", // 80% width on small screens
              md: "70%", // 70% width on medium screens
              lg: "800px", // 800px width on large screens and above
            },
            margin: "0 auto" // Center the Box horizontally
          }}
        >
          <Box className="d-flex align-items-center gap-3 align-content-center">
            <ArrowBackIosIcon style={{ color: "black" }} />
            <Typography variant="body1">Orders</Typography>
          </Box>
        </Box>

        {/* Selected Products Section */}
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ddd",
                width: {
                  xs: "90%", // 100% width on extra small screens
                  sm: "90%", // 90% width on small screens
                  md: "80%", // 80% width on medium screens
                  lg: "760px", // 760px width on large screens and above
                },
                height: {
                  xs: "100%", 
                  sm: "90%", 
                  md: "80%", 
                  lg: "193px", 
                },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                margin: "20px auto 2rem auto",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Box className="row align-items-center" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                <Box className="col-auto" sx={{ mb: { xs: 2, md: 0 }, display: "flex", justifyContent: "center" }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="rounded"
                    style={{
                      width: "87px",
                      height: "76px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box className="col" sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <p style={{ fontSize: "15px", fontWeight: "bold", color: "black", fontFamily: "Open Sans" }}>
                    Placed On: 02 Jan 2025
                  </p>
                  <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "bold", color: "black", fontFamily: "Open Sans" }}>
                    {product.name}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "black", fontFamily: "Open Sans" }}>
                    <strong>Price:</strong> PKR {product.price.toLocaleString()}
                  </Typography>
                  <Typography sx={{ fontSize: "15px", color: "black", fontFamily: "Open Sans" }}>
                    <strong>Status:</strong>
                    <span style={{ color: "#28a745", fontWeight: "600" }}> In Progress</span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: "1.25rem", color: "#888", textAlign: "center" }}>
            No products selected.
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default TrackOrder;