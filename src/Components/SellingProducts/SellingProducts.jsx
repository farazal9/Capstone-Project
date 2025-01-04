import { Typography } from "@mui/material";
import React from "react";

// mui icons
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    title: "Zeblaze Btalk 2 Calling Watch",
    img: "https://images.priceoye.pk/zeblaze-btalk-2-calling-watch-pakistan-priceoye-8kbwa-500x500.webp",
    rating: 4.2,
    reviews: 4,
    price: 7999,
    main: true,
  },
  {
    title: "Xiaomi Poco Pad",
    img: "https://images.priceoye.pk/poco-pad-8gb-256gb-pakistan-priceoye-jc5de.jpg",
    rating: 4.2,
    reviews: 2,
    price: 7499,
    originalPrice: 110000,
    discount: "32% OFF",
  },
  {
    title: "Samsung Galaxy Buds 2 Pro",
    img: "https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-tp64b-270x270.webp",
    rating: 4.9,
    reviews: 112,
    price: 26599,
    originalPrice: 39999,
    discount: "34% OFF",
  },
  {
    title: "Huawei Brand 9",
    img: "https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0-270x270.webp",
    rating: 5.0,
    reviews: 13,
    price: 9899,
    originalPrice: 20000,
    discount: "51% OFF",
  },
  {
    title: "Anker Soundcore Liberty 4 Pro Wireless Earbuds",
    img: "https://images.priceoye.pk/anker-soundcore-liberty-4-pro-wireless-earbuds-pakistan-priceoye-pdtt1-270x270.webp",
    price: 26499,
    originalPrice: 35999,
    discount: "26% OFF",
  },
];

const SellingProducts = () => {
  return (
    <div className="container my-4">
      {/* Section Header */}
      <div className="text-center mb-4">
        <Typography variant="h5" className="mb-2">
          Best Sellers
        </Typography>
        <Typography variant="subtitle2" className="text-muted">
          Get the best prices in town
        </Typography>
      </div>

      {/* Main Content */}
      <div className="row g-4">
        {products.map((product, index) =>
          product.main ? (
            <div className="col-lg-5" key={index}>
              <div className="bg-white p-4 rounded shadow h-100">
                <Typography variant="body" className="mb-3 fw-semibold">
                  {product.title}
                </Typography>
                <div className="text-center mt-3 mb-2">
                  <img
                    className="img-fluid mb-3"
                    style={{ maxHeight: "400px" }}
                    src={product.img}
                    alt={product.title}
                  />
                  <div
                    className="d-flex align-items-center rounded-3 py-1 px-2"
                    style={{
                      backgroundColor: "#FBF7EB",
                      width: "fit-content",
                      margin: "0 auto",
                    }}
                  >
                    <Typography
                      className="d-flex align-items-center me-2"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      <StarIcon
                        className="fs-6 text-warning"
                        style={{ fontSize: "18px" }}
                      />{" "}
                      {product.rating}
                    </Typography>
                    <Typography
                      className="text-muted"
                      style={{ fontSize: "13px" }}
                    >
                      {product.reviews} Reviews
                    </Typography>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <Typography
                      className="fw-semibold"
                      style={{ fontSize: "16px" }}
                    >
                      <sup>Rs</sup> {product.price.toLocaleString()}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Secondary Products */}
        <div className="col-lg-7">
          <div className="row g-3">
            {products
              .filter((product) => !product.main)
              .map((product, index) => (
                <div className="col-md-6" key={index}>
                  <div className="bg-white p-3 rounded shadow h-100">
                    <Typography
                      variant="body"
                      className="fw-semibold mb-2"
                      style={{ fontSize: "15px", fontWeight: "500" }}
                    >
                      {product.title}
                    </Typography>
                    <div className="text-center">
                      <img
                        className="img-fluid mb-2"
                        style={{ maxHeight: "150px" }}
                        src={product.img}
                        alt={product.title}
                      />
                    </div>
                    {product.title !==
                      "Anker Soundcore Liberty 4 Pro Wireless Earbuds" && (
                      <div
                        className="d-flex align-items-center py-1 rounded-3 px-2"
                        style={{
                          backgroundColor: "#FBF7EB",
                          width: "fit-content",
                          margin: "0 auto",
                        }}
                      >
                        <Typography
                          className="d-flex me-2"
                          style={{ fontSize: "12px", fontWeight: "500" }}
                        >
                          <StarIcon
                            className="fs-6 text-warning"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          {product.rating}
                        </Typography>
                        <Typography
                          className="text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {product.reviews} Reviews
                        </Typography>
                      </div>
                    )}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <Typography
                          className="fw-semibold"
                          style={{ fontSize: "16px" }}
                        >
                          <sup>Rs</sup> {product.price.toLocaleString()}
                        </Typography>
                        <Typography
                          className="text-decoration-line-through text-secondary"
                          style={{ fontSize: "13px" }}
                        >
                          <sup>Rs</sup> {product.originalPrice.toLocaleString()}
                        </Typography>
                      </div>
                      <div className="badge bg-info-subtle text-info">
                        {product.discount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProducts;
