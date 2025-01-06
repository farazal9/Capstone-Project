import { Box, Button, Typography } from "@mui/material";
import React from "react";

// Import images
import buyImg1 from "../../assests/extended-warranty.svg";
import buyImg2 from "../../assests/order-packaging.svg";
import buyImg3 from "../../assests/feature-shipping.svg";
import buyImg4 from "../../assests/easy_instalment.svg";

const BuyingReasons = () => {
    return (
        <Box className="container my-5">
            {/* Header Section */}
            <Box className="d-flex justify-content-between align-items-center mb-4">
                <Typography
                    variant="h6"
                    className="fw-bold"
                    style={{ fontWeight: "500" }}
                >
                    Reasons to Buy
                </Typography>
            </Box>

            {/* Cards Section */}
            <Box className="row gy-4">
                {[buyImg1, buyImg2, buyImg3, buyImg4].map((img, index) => (
                    <Box key={index} className="col-12 col-md-6 col-lg-6">
                        <Box
                            className="d-flex align-items-center p-4 shadow-sm rounded"
                            sx={{
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "space-evenly", // Ensures space between content
                                backgroundColor: "#0078D5",
                                color: "#000000",
                                border: "1px solid #ccc",
                                textAlign: { xs: "center", md: "left" },
                                height: "100%", // Ensures proper height in columns
                            }}
                        >
                            <img
                                src={img}
                                alt={`Reason ${index + 1}`}
                                style={{
                                    width: "160px",
                                    height: "160px",
                                }}
                            />
                            <Box
                                sx={{
                                    marginLeft: { xs: "0", md: "20px" },
                                    marginTop: { xs: "20px", md: "0" },
                                    textAlign: "center", // Ensures text and button are centered
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    className="fw-semibold"
                                    sx={{
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                        marginBottom: "10px", // Adds space between text and button
                                    }}
                                >
                                    {index === 0 && (
                                        <>
                                            Priceoye <br />
                                            Extended Warranty
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            Packaging <br />
                                            Video
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            Open Parcel <br />
                                            (ISB - LHR - KHI)
                                        </>
                                    )}
                                    {index === 3 && (
                                        <>
                                            Easy <br />
                                            Installments
                                        </>
                                    )}
                                </Typography>
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: "#F47708",
                                        color: "#FFFFFF",
                                        marginTop: "10px",
                                        padding: "6px 12px",
                                        "&:hover": {
                                            backgroundColor: "#FF8800",
                                        },
                                    }}
                                >
                                    Know More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BuyingReasons;
