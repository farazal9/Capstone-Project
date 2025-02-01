import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addProductToCart } from '../../Slices/cartSlice';
import { Container, Grid, Typography, Button, Rating, Box, CardContent, Card, CardMedia } from "@mui/material";
import service1 from "../../assests/approved-feature.svg";
import service2 from "../../assests/warranty-feature.svg";
import service3 from "../../assests/video-shooting-camera.svg";
import service4 from "../../assests/shipping-feature.svg";
import Pd from "../../assests/Pd-img.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Fetch products from Redux state
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
    navigate("/delivery"); // Navigate to delivery page
  };

  const services = [
    {
      img: service2,
      title: "1 Year",
      description: "Brand Warranty",
    },
    {
      img: service1,
      title: "Easy Returns",
      description: "Free of Charge",
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

  return (
    <Container className="mt-5">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} className="text-center">
          <Card>
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.name}
              className="img-fluid rounded"
              sx={{ maxWidth: "100%", height: "auto", border: "1px solid #ddd" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" className="fw-bold">{product.name}</Typography>
              <Typography variant="h6" color="textSecondary" className="text-muted">Brand: {product.brand}</Typography>
              <Rating
                name="product-rating"
                value={product.rating}
                precision={0.1}
                readOnly
                sx={{ mt: 2 }}
              />
              <Typography variant="body2" color="textSecondary">{product.reviews} reviews</Typography>
              <Typography variant="body1" className="mt-3">{product.description}</Typography>
              <div className="mt-4">
                <Typography variant="h5" className="text-success fw-bold mb-1">
                  PKR {product.price.toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  <span className="text-muted text-decoration-line-through">
                    PKR {product.retailPrice.toLocaleString()}
                  </span>
                  <span className="ms-3 text-danger fw-bold">{product.discount}</span>
                </Typography>
              </div>
              <Grid container spacing={2} className="mt-4">
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{ padding: "10px 30px", fontSize: "1rem", transition: "transform 0.3s, box-shadow 0.3s" }}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="info"
                    fullWidth
                    sx={{ padding: "10px 30px", fontSize: "1rem" }}
                  >
                    Compare
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className="container my-5">
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
                      fontSize: "12px",
                      fontFamily: "Open Sans, sans-serif",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="services-text1"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Open Sans, sans-serif",
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
        <Box>
          <Typography className="my-5" variant="h5"> Highlights</Typography>
          <img className="img-fluid" src={Pd} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;