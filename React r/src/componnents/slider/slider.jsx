import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { SliderProducts } from "../../data/products";
const slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="MySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={40}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div>Shop Now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default slider;
