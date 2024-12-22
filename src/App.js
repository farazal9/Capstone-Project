
import './App.css';
import Header from "./Components/Header/Header.jsx"
import Items from './Components/Items/Items.jsx';
import slider1 from "./assests/slider-one.jpg"
import slider2 from "./assests/slider-two.jpg"
import slider3 from "./assests/slider-3.jpg"
import slider4 from "./assests/slider-four.jpg"
import slider5 from "./assests/slider-5.jpg"
import slider6 from "./assests/pakistan-priceoye-slider-wuoul.jpg"
import salebanner from "./assests/sale-campaign-banner-p8vzf.gif"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <Items />
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
              alt="Slide 1"
              className="img-fluid d-block"

            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src={slider3}
              alt="Slide 1"
              className="img-fluid d-block"

            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src={slider4}
              alt="Slide 1"
              className="img-fluid d-block"

            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src={slider5}
              alt="Slide 1"
              className="img-fluid d-block"

            />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img
              src={slider6}
              alt="Slide 1"
              className="img-fluid d-block"

            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Box className="container mt-4">
      <img className='img-fluid bg-transparent' src={salebanner} alt="Logo" />
      </Box>

    </div>
  );
}

export default App;
