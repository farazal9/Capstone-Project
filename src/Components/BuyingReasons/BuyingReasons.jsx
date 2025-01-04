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
                {/* Card 1 */}
                <Box className="col-12 col-md-6 col-lg-6">
                    <Box
                        className="d-flex align-items-center justify-content-center p-4 shadow-sm rounded"
                        style={{
                            backgroundColor: "#0078D5",
                            color: "#000000",
                            border: "1px solid #ccc",
                        }}
                    >
                        <img
                            src={buyImg1}
                            alt="Extended Warranty"
                            style={{
                                width: "160px",
                                height: "160px",
                            }}
                        />
                        <Box
                            className="text-center"
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                className="mt-3 fw-fw-semibold text-white"
                                style={{ fontSize: "18px" }}
                            >
                                Priceoye <br />
                                Extended Warranty
                            </Typography>
                            <Button
                                size="small"
                                style={{
                                    backgroundColor: "#F47708",
                                    color: "#FFFFFF",
                                    marginTop: "10px",
                                    padding: "6px 12px",
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Card 2 */}
                <Box className="col-12 col-md-6 col-lg-6">
                    <Box
                        className="d-flex align-items-center justify-content-center p-4 shadow-sm rounded"
                        style={{
                            backgroundColor: "#0078D5",
                            color: "#000000",
                            border: "1px solid #ccc",
                        }}
                    >
                        <img
                            src={buyImg2}
                            alt="Order Packaging"
                            style={{
                                width: "160px",
                                height: "160px",
                            }}
                        />
                        <Box
                            className="text-center"
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                className="mt-3 fw-fw-semibold text-white"
                                style={{ fontSize: "18px" }}
                            >
                                Packaging <br />
                                Video
                            </Typography>
                            <Button
                                size="small"
                                style={{
                                    backgroundColor: "#F47708",
                                    color: "#FFFFFF",
                                    marginTop: "10px",
                                    padding: "6px 12px",
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Card 3 */}
                <Box className="col-12 col-md-6 col-lg-6">
                    <Box
                        className="d-flex align-items-center justify-content-center p-4 shadow-sm rounded"
                        style={{
                            backgroundColor: "#0078D5",
                            color: "#000000",
                            border: "1px solid #ccc",
                        }}
                    >
                        <img
                            src={buyImg3}
                            alt="Feature Shipping"
                            style={{
                                width: "160px",
                                height: "160px",
                            }}
                        />
                        <Box
                            className="text-center"
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                className="mt-3 fw-fw-semibold text-white"
                                style={{ fontSize: "18px" }}
                            >
                                Open Parcel <br />
                                (ISB - LHR - KHI)
                            </Typography>
                            <Button
                                size="small"
                                style={{
                                    backgroundColor: "#F47708",
                                    color: "#FFFFFF",
                                    marginTop: "10px",
                                    padding: "6px 12px",
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Card 4 */}
                <Box className="col-12 col-md-6 col-lg-6">
                    <Box
                        className="d-flex align-items-center justify-content-center p-4 shadow-sm rounded"
                        style={{
                            backgroundColor: "#0078D5",
                            color: "#000000",
                            border: "1px solid #ccc",
                        }}
                    >
                        <img
                            src={buyImg4}
                            alt="Easy Installments"
                            style={{
                                width: "160px",
                                height: "160px",
                            }}
                        />
                        <Box
                            className="text-center"
                            style={{
                                marginLeft: "20px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                className="mt-3 fw-fw-semibold text-white"
                                style={{ fontSize: "18px" }}
                            >
                                Easy <br />
                                Installments
                            </Typography>
                            <Button
                                size="small"
                                style={{
                                    backgroundColor: "#F47708",
                                    color: "#FFFFFF",
                                    marginTop: "10px",
                                    padding: "6px 12px",
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BuyingReasons;
