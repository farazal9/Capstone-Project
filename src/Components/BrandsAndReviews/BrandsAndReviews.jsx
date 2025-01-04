import React, {useState } from "react";
import { Avatar, Box, Button, Card, CardContent, Modal, Typography } from '@mui/material';
import Samsung from "../../assests/samsung.svg"
import Infinix from "../../assests/infinix.svg"
import OPPO from "../../assests/oppo.svg"
import Xiaomi from "../../assests/xiaomi.svg"
import Vivo from "../../assests/vivo.svg"
import Tecno from "../../assests/tecno.svg"
import Realme from "../../assests/realme.svg"
import itel from "../../assests/itel.svg"
import Apple from "../../assests/apple.svg"
import Nokia from "../../assests/nokia.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import GradeIcon from '@mui/icons-material/Grade';
import { Pagination } from "swiper/modules";
const reviews = [
  {
    initials: "RI",
    name: "Rao Irshad",
    date: "15 November 2024",
    rating: 5,
    feedback: "Very nice mobile",
    productImages: [
      "https://images.priceoye.pk/review/9683/1570352-6ib75-270x270.jpg",
      "https://images.priceoye.pk/review/9683/1570352-1v3lt-270x270.jpg",
    ],
  },
  {
    initials: "HS",
    name: "Hasnain Sumra",
    date: "28 December 2024",
    rating: 5,
    feedback: "Best products recommended 👍❤️",
    verified: true,
    productImages: [
      "https://images.priceoye.pk/review/7400/1559954-tjaok-270x270.jpg",
      "https://images.priceoye.pk/review/7400/1559954-tjaok-270x270.jpg",

    ],
  },
  {
    initials: "MH",
    name: "Muhammad Anas",
    date: "04 January 2025",
    rating: 5,
    feedback: "Good packing and good response.",
    productImages: [
      "https://images.priceoye.pk/review/7908/1571930-wi4od-270x270.jpg",
      "https://images.priceoye.pk/review/7908/1571930-mgoft-270x270.jpg",
    ],
  },
  {
    initials: "AH",
    name: "Abdul Hanan",
    date: "10 October 2024",
    rating: 5,
    feedback: "Amazing product quality!",
    productImages: [
      "https://images.priceoye.pk/review/8513/1568535-oglfh-270x270.jpg",
      "https://images.priceoye.pk/review/8513/1568535-oglfh-270x270.jpg",
    ],
  },
  {
    initials: "SN",
    name: "Shahzad Nawab Ali",
    date: "20 September 2024",
    rating: 4,
    feedback: "The mobile phone was delivered on time. The quality of the packaging was great and the package was secure. The phone is exactly how we ordered and working perfectly. Thank you Priceoye",
    productImages: [
      "https://images.priceoye.pk/review/9595/1564307-nly5z-270x270.jpg",
      "https://images.priceoye.pk/review/9595/1564307-2y8qu-270x270.jpg",
      "https://images.priceoye.pk/review/9595/1564307-jpl1u-270x270.jpg",
    ],
  },
  {
    initials: "AY",
    name: "Ammar Yunus",
    date: "30 August 2024",
    rating: 5,
    feedback: "Forgot to write a review have this phone for a month, cameras are amazing. Single hand use is easy. Phone is compact but with a lot of power and updated to hyper os 2.0 overall good experience with priceoye will order in future too :)",
    productImages: [
      "https://images.priceoye.pk/review/6495/1467692-t5z31-270x270.jpg",
    ],
  },
  {
    initials: "BA",
    name: "Bilal Ahmad",
    date: "12 July 2024",
    rating: 5,
    feedback: "Great service overall.",
    productImages: [
      "https://images.priceoye.pk/review/7400/1570217-ia4sv-270x270.jpg",

    ],
  },
  {
    initials: "MS",
    name: "Muhammad Sakeb",
    date: "05 June 2024",
    rating: 5,
    feedback: "Stop thinking and buy from them. It's PTA approved and price oye is totally reliable",
    productImages: [
      "https://images.priceoye.pk/review/5876/1522919-tmiay-270x270.jpg",

    ],
  },
];



const images = [
  { id: 1, src: 'https://images.priceoye.pk/review/9735/1550978-oa6g7-270x270.jpeg', alt: 'Image 1' },
  { id: 2, src: 'https://images.priceoye.pk/review/7519/1548431-f7d2z-270x270.jpg', alt: 'Image 2' },
  { id: 3, src: 'https://images.priceoye.pk/review/6035/1544097-l38rf-270x270.jpg', alt: 'Image 3' },
  { id: 4, src: 'https://images.priceoye.pk/review/9534/1447769-ifo7a-270x270.jpg', alt: 'Image 4' },
  { id: 5, src: 'https://images.priceoye.pk/review/7515/1529390-koc38-270x270.jpg', alt: 'Image 5' },
  { id: 6, src: 'https://images.priceoye.pk/review/6725/1482458-6fnlj-270x270.jpg', alt: 'Image 6' },
  { id: 7, src: 'https://images.priceoye.pk/review/9420/1551708-swvie-270x270.jpeg', alt: 'Image 7' },
  { id: 8, src: 'https://images.priceoye.pk/review/7802/1549116-89aui-270x270.jpeg', alt: 'Image 8' },
  { id: 9, src: 'https://images.priceoye.pk/review/7710/1547639-8hir5-270x270.jpg', alt: 'Image 9' },
  { id: 10, src: 'https://images.priceoye.pk/review/7493/1537427-ffox5-270x270.jpg', alt: 'Image 10' },
];

const BrandsAndReviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (review) => {
    setSelectedReview(review);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedReview(null);
    setOpen(false);
  };


  return (
    <Box className="container mt-5">
      {/* Shop by Price Section */}
      <Box className="d-flex justify-content-between align-items-center mb-4">
        <Typography variant="h6" className="fw-bold">
          Shop by Price
        </Typography>
        <Button variant="outlined" className="text-primary">
          View All
        </Button>
      </Box>



      {/* Price Range Section */}
      <Box className="price-ranges mt-4">
        <Box className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {[
            'Below Rs. 15,000',
            'Rs. 15,000 - Rs. 25,000',
            'Rs. 25,000 - Rs. 40,000',
            'Rs. 40,000 - Rs. 60,000',
            'Rs. 60,000 - Rs. 80,000',
            'Rs. 80,000 - Rs. 100,000',
            'Rs. 100,000 - Rs. 150,000',
            'Above 150,000',
          ].map((priceRange, index) => (
            <div className="col" key={index}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFF348',
                  color: '#404040',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '16px',
                  borderRadius: '5px', // Rounded corners
                  width: '100%', // Full width for responsiveness
                  height: '49px',
                  '&:hover': {
                    color: '#fff',
                    background: `rgb(5, 146, 255) `, // Hover effect

                  },
                  cursor: 'pointer',
                }}
              >
                {priceRange}
              </Button>
            </div>
          ))}
        </Box>
      </Box>

      {/* Shop by Brand Section */}
      <Box className="d-flex justify-content-between align-items-center mt-5">
        <Typography variant="h6" className="fw-bold">
          Shop by Brand
        </Typography>
        <Button variant="outlined" className="text-primary">
          View All
        </Button>
      </Box>


      {/* Brand Swiper Section */}
      <Box className="mt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={2} // Default for small screens
          breakpoints={{
            576: { slidesPerView: 3 }, // Small devices
            768: { slidesPerView: 4 }, // Tablets
            992: { slidesPerView: 5 }, // Desktops
            1200: { slidesPerView: 10 }, // Show all cards on large screens
          }}

          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {[
            { src: Samsung, name: "Samsung" },
            { src: Infinix, name: "Infinix" },
            { src: OPPO, name: "OPPO" },
            { src: Xiaomi, name: "Xiaomi" },
            { src: Vivo, name: "Vivo" },
            { src: Tecno, name: "Tecno" },
            { src: Realme, name: "Realme" },
            { src: itel, name: "itel" },
            { src: Apple, name: "Apple" },
            { src: Nokia, name: "Nokia" },
          ].map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ width: "70px", height: "70px" }} // Fixed size for the image
                />
                <div className="mt-2" style={{ fontSize: "12px" }}>
                  <b>{brand.name}</b>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>


      <Box className="my-5">

        <Typography className='text-center' variant='h5'>Customer Reviews</Typography>
        <Typography className='text-center' variant='body1'>What our Customers say about Priceoye.pk</Typography>
      </Box>

      <Swiper
        spaceBetween={15} // Matches the provided code spacing
        loop={true} // Enables continuous looping
        pagination={{ clickable: true }} // Enables pagination
        breakpoints={{
          320: {
            slidesPerView: 2, // 2 slides for small screens
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3, // 3 slides for slightly larger screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4, // 4 slides for tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6, // 6 slides for laptops
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 8, // 8 slides for larger screens
            spaceBetween: 15,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box
              className="swiper-content"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: "132px",
                  height: "137px",
                  objectFit: "contain",
                  cursor: "pointer",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>


      <Box className="mt-5" sx={{ width: "100%", padding: "20px" }}>
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      600: { slidesPerView: 1.5 },
      900: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }}
  >
    {reviews.map((review, index) => (
      <SwiperSlide key={index}>
        <Card
          onClick={() => handleOpen(review)}
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "10px",
            height: "190px", // Fixed height
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" marginBottom="10px">
              <Avatar sx={{ bgcolor: "#ccc", marginRight: "10px" }}>
                {review.initials}
              </Avatar>
              <Box flexGrow={1}>
                <Typography variant="body1" sx={{ color: "#48AFFF" }}>
                  {review.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", color: "#FFC107" }}>
                  {[...Array(review.rating)].map((_, idx) => (
                    <GradeIcon key={idx} sx={{ fontSize: "16px", marginRight: "2px" }} />
                  ))}
                </Box>
                <Typography variant="caption" sx={{ color: "#888" }}>
                  {review.date}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "20px", marginRight: "5px" }} />
                <Typography variant="caption" sx={{ color: "#4caf50", fontWeight: "bold" }}>
                  Verified
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#555",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {review.feedback}
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>

  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "500px",
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: "10px",
        p: 4,
      }}
    >
      {selectedReview && (
        <>
          {/* Swiper for Images */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ marginBottom: "20px" }}
            modules={[Pagination]}
          >
            {selectedReview.productImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Card Content in Modal */}
          <Box display="flex" alignItems="center" marginBottom="10px">
            <Avatar sx={{ bgcolor: "#ccc", marginRight: "10px" }}>
              {selectedReview.initials}
            </Avatar>
            <Box flexGrow={1}>
              <Typography variant="body1" sx={{ color: "#48AFFF" }}>
                {selectedReview.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", color: "#FFC107" }}>
                {[...Array(selectedReview.rating)].map((_, idx) => (
                  <GradeIcon key={idx} sx={{ fontSize: "16px", marginRight: "2px" }} />
                ))}
              </Box>
              <Typography variant="caption" sx={{ color: "#888" }}>
                {selectedReview.date}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "20px", marginRight: "5px" }} />
              <Typography variant="caption" sx={{ color: "#4caf50", fontWeight: "bold" }}>
                Verified
              </Typography>
            </Box>
          </Box>

          {/* Full Review Text */}
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            {selectedReview.feedback}
          </Typography>

          {/* Close Button */}
          <Button sx={{ bgcolor: "#48AFFF" }} variant="contained" fullWidth onClick={handleClose}>
            Close
          </Button>
        </>
      )}
    </Box>
  </Modal>
</Box>


    </Box>


  );
};

export default BrandsAndReviews;
