import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider1 from "../../assests/slider-one.jpg";
import slider2 from "../../assests/slider-two.jpg";
import slider3 from "../../assests/slider-3.jpg";
import slider4 from "../../assests/slider-four.jpg";
import slider5 from "../../assests/slider-5.jpg";
import slider6 from "../../assests/pakistan-priceoye-slider-wuoul.jpg";

const Slider = () => {
  return (
    <div>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src={slider1} alt="Slide 1" className="img-fluid d-block" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={slider2} alt="Slide 2" className="img-fluid d-block" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={slider3} alt="Slide 3" className="img-fluid d-block" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={slider4} alt="Slide 4" className="img-fluid d-block" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={slider5} alt="Slide 5" className="img-fluid d-block" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={slider6} alt="Slide 6" className="img-fluid d-block" />
              </div>
            </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default Slider