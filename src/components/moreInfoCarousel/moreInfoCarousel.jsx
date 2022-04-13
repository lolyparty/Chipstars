import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Button, Link} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import './moreInfocarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import cashback from '../Imgs/cashback.svg'
import jetx3 from '../Imgs/jetx3-mob.svg'
import bettingSunday from '../Imgs/fly-high.svg'
import {theme} from '../muiTheme'




const MoreInfoCarousel = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Swiper slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
        clickable: true
        }}
        navigation={
          {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable:true
          }
        }
        modules={[Pagination, Navigation]}
        className="mySwiper carousel"
        style={{
          width: '80%',
          padding:'65px 15px',
          marginTop:'20px',
        //   keyboardControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        }}
      >
        <SwiperSlide className='carousel-slide'
            >
              <div className='imageDiv'>
                <img src={cashback} alt="slider" />
              </div>            
        </SwiperSlide>

        <SwiperSlide className='carousel-slide'>
            <div className='imageDiv'>
              <img src={jetx3} alt="slider" />
            </div>
            <p>
                There is no better feeling than waking up on Saturday morning, and you know that there are plenty of games to watch and bet on. What if we say that we can make it even better?
                </p>
                <div className='termsDiv'>
                  <Button color='primary' sx={{border:'1.5px solid #AD0F0A', borderRadius:'7px', fontSize: '13px', paddingX:'25px'}} variant='outlined'>More Details</Button>
                  <Link underline='none' href='#'>Terms & Conditions</Link>
                </div>
        </SwiperSlide>

        <SwiperSlide className='carousel-slide'>
          <div className='imageDiv'>
            <img src={bettingSunday} alt="slider" />
          </div>
        </SwiperSlide>
        <div className="overlayleft"></div>
        <div className="overlayright"></div>
        <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
      </Swiper>
    </ThemeProvider>
  );
}

export {MoreInfoCarousel}