import { Box, Typography } from '@mui/material';
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const products5 = [
  {
    id: 25,
    name: "Examine Redmi S3X",
    brand: "Xiaomi",
    price: 16299,
    retailPrice: 20999,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 138,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-a3x-pakistan-priceoye-g7ueo-270x270.webp",
    description: "Affordable mobile with excellent features and sleek design.",
  },
  {
    id: 26,
    name: "Tecno Spark Charity",
    brand: "Tecno",
    price: 36999,
    retailPrice: 39999,
    discount: "8% OFF",
    rating: 5.0,
    reviews: 101,
    imageUrl: "https://images.priceoye.pk/tecno-spark-30-pakistan-priceoye-rcs5e-270x270.webp",
    description: "Budget-friendly smartphone with great performance.",
  },
  {
    id: 27,
    name: "Vivo V40e",
    brand: "Vivo",
    price: 89999,
    retailPrice: 99999,
    discount: "10% OFF",
    rating: 5.0,
    reviews: 50,
    imageUrl: "https://images.priceoye.pk/vivo-v40e-pakistan-priceoye-gylye-270x270.webp",
    description: "High-quality camera and performance, perfect for daily use.",
  },
  {
    id: 28,
    name: "Idle S24",
    brand: "Itel",
    price: 25299,
    retailPrice: 33999,
    discount: "26% OFF",
    rating: 4.8,
    reviews: 110,
    imageUrl: "https://images.priceoye.pk/itel-s24-pakistan-priceoye-sabyj-270x270.webp",
    description: "Stylish design and reliable performance at a great price.",
  },
  {
    id: 29,
    name: "Examine Redmi S3",
    brand: "Xiaomi",
    price: 19299,
    retailPrice: 23999,
    discount: "20% OFF",
    rating: 4.8,
    reviews: 295,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-a3-pakistan-priceoye-z5m8c-270x270.webp",
    description: "Durable and powerful mobile for everyday tasks.",
  },
  {
    id: 30,
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    price: 425500,
    retailPrice: 446000,
    discount: "5% OFF",
    rating: 4.8,
    reviews: 500,
    imageUrl: "https://images.priceoye.pk/apple-iphone-16-pro-pakistan-priceoye-u4pw9-270x270.webp",
    description: "Premium smartphone with cutting-edge features and luxury feel.",
  },
];

const products6 = [
  {
    id: 31,
    name: "XAML POCO C75",
    brand: "Xiaomi",
    price: 31999,
    retailPrice: 36999,
    discount: "14% OFF",
    rating: 5.0,
    reviews: 11,
    imageUrl: "https://images.priceoye.pk/xiaomi-poco-c75-pakistan-priceoye-aowis-270x270.webp",
    description: "A powerful smartphone with a sleek design and excellent performance for everyday use."
  },
  {
    id: 32,
    name: "Samsung Galaxy",
    brand: "Samsung",
    price: 22999,
    retailPrice: 26999,
    discount: "15% OFF",
    rating: 4.9,
    reviews: 46,
    imageUrl: "https://images.priceoye.pk/samsung-galaxy-a06-pakistan-priceoye-lagde-270x270.webp",
    description: "A budget-friendly smartphone with a vibrant display and reliable performance."
  },
  {
    id: 33,
    name: "Realme C75",
    brand: "Realme",
    price: 42899,
    retailPrice: 49999,
    discount: "14% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/realme-c75-pakistan-priceoye-spltg-270x270.webp",
    description: "A feature-packed smartphone offering excellent value for money."
  },
  {
    id: 34,
    name: "Samsung Galaxy A16",
    brand: "Samsung",
    price: 51699,
    retailPrice: 54999,
    discount: "6% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/samsung-galaxy-a16-pakistan-priceoye-qqcnx-270x270.webp",
    description: "A reliable smartphone with long battery life and a modern design."
  },
  {
    id: 35,
    name: "Realme C6",
    brand: "Realme",
    price: 19400,
    retailPrice: 32999,
    discount: "11% OFF",
    rating: 4.9,
    reviews: 25,
    imageUrl: "https://images.priceoye.pk/realme-c61-pakistan-priceoye-v5h3g-270x270.webp",
    description: "An affordable smartphone with a sleek design and efficient performance."
  },
  {
    id: 36,
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    price: 499999,
    retailPrice: 526999,
    discount: "5% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl: "https://images.priceoye.pk/apple-iphone-16-pro-max-pakistan-priceoye-v0q3c-270x270.webp",
    description: "A premium smartphone with cutting-edge technology and unmatched performance."
  }
];




const Products3 = () => {
  const navigate = useNavigate();

  const renderProductCard = (product) => (
    <SwiperSlide key={product.id}>
      <Box
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/product-details/${product.id}`)}
        className="shadow-sm rounded p-3 bg-white position-relative"
      >
        {/* Sale Badge */}
        <Box
          component="img"
          src="https://images.priceoye.pk/badges/priceoye-sale-20241212-w3sbv.png"
          alt="Sale Badge"
          className="position-absolute"
          style={{
            top: "10px",
            right: "10px",
            width: "90px",
            height: "70px",
          }}
        />

        {/* Product Image */}
        <Box className="text-center mb-3 d-flex justify-content-center w-100">
          <Box
            component="img"
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
            style={{
              maxWidth: "120px",
              maxHeight: "120px",
            }}
          />
        </Box>

        {/* Rating */}
        <Box
          className="mb-2 d-flex align-items-center bg-light p-2 rounded"
          style={{ backgroundColor: "#FBF7EB" }}
        >
          <Box
            component="img"
            src="https://static.priceoye.pk/images/stars.svg"
            alt="Rating Star"
            className="me-1"
            style={{
              width: "10px",
              height: "10px",
            }}
          />
          <Typography variant="body2" className="mx-1">
            {product.rating}
          </Typography>
          <Typography variant="caption" className="text-muted">
            {product.reviews} Reviews
          </Typography>
        </Box>

        {/* Product Details */}
        <Box className="w-100">
          <Typography variant="body1" className="fw-bold mb-1">
            {product.name}
          </Typography>
          <Typography variant="h6" className="text-success fw-bold">
            Rs {product.price}
          </Typography>
          <Box className="d-flex justify-content-between w-100 mt-1">
            <Typography
              variant="body2"
              className="text-danger text-decoration-line-through"
            >
              Rs {product.retailPrice}
            </Typography>
            <Typography variant="body2" className="text-success">
              {product.discount}
            </Typography>
          </Box>
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <div>
      <div className="w-100 mt-5" style={{ backgroundColor: "#FCE55E" }}>
        <div className="container">
          <div className="latest-product-box p-4 rounded">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center pl-heading mb-4">
              <h1 className="h4 text-white">Latest Wireless Earbuds</h1>
              <span className="btn btn-light">View All</span>
            </div>

            {/* Swiper Section */}
            <Swiper
              className="pt-5"
              slidesPerView={4} // Default for lg screens
              spaceBetween={15}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                336: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {products5.map(renderProductCard)}
            </Swiper>

            <Swiper
              className="pt-5"
              slidesPerView={4} // Default for lg screens
              spaceBetween={15}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                336: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {products6.map(renderProductCard)}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Products3;