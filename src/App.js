import './App.css';
import Header from "./Components/Header/Header.jsx";
import Items from './Components/Items/Items.jsx';
import slider1 from "./assests/slider-one.jpg";
import slider2 from "./assests/slider-two.jpg";
import slider3 from "./assests/slider-3.jpg";
import slider4 from "./assests/slider-four.jpg";
import slider5 from "./assests/slider-5.jpg";
import slider6 from "./assests/pakistan-priceoye-slider-wuoul.jpg";
import salebanner from "./assests/sale-campaign-banner-p8vzf.gif";
import Products from "./Components/ProductsOne/Products.jsx";
import ProductDetails from './Components/ProductsOne/ProductDetail.jsx';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import InfluencersVideos from './Components/InfluencersVideos/InfluencersVideos.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import SellingProducts from './Components/SellingProducts/SellingProducts.jsx';

function App() {
  return (
  <div style={{backgroundColor:"#F1F3F6"}}>
      <Router >
      <div>
        {/* Header Component */}
        <Header  />

        {/* Items Component */}
        <Items  />

        {/* Swiper Component */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              src={slider1}
              alt="Slide 1"
              className="img-fluid d-block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={slider2}
                alt="Slide 2"
                className="img-fluid d-block"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={slider3}
                alt="Slide 3"
                className="img-fluid d-block"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={slider4}
                alt="Slide 4"
                className="img-fluid d-block"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={slider5}
                alt="Slide 5"
                className="img-fluid d-block"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={slider6}
                alt="Slide 6"
                className="img-fluid d-block"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Sale Banner */}
        <Box className="container mt-4">
          <img className="img-fluid bg-transparent" src={salebanner} alt="Sale Banner" />
        </Box>

        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<Products />} /> {/* Main Products Page */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Product Details Page */}
        </Routes>
      </div>


      <InfluencersVideos/>
      {/* <SellingProducts/> */}
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
