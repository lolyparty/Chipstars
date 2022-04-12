import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import carouselSlider from '../components/Imgs/sliderImage.svg'

const Slider = ()=> {
  return (
    <>
      <Swiper pagination={{
          dynamicBullets: true,
          clickable:true
        }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
        <SwiperSlide><img src={carouselSlider} alt="slider" style={{width:'100%'}}/> </SwiperSlide>
      </Swiper>
    </>
  );
}

export {Slider}