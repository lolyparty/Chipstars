import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Button, Link} from '@mui/material'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './moreInfocarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import cashback from '../Imgs/cashback-mob.svg'
import jetx3 from '../Imgs/jetx3-mob.svg'
import bettingSunday from '../Imgs/jetx3-mob1.svg'
import {theme} from '../muiTheme'



const MoreInfoCarousel = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Swiper slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper carousel"
        style={{
          width: '80%',
          padding:'65px 15px',
          marginTop:'20px',
        }}
      >
        <SwiperSlide className='carousel-slide'
            >
            <img src={bettingSunday} alt="slider" />
            
        </SwiperSlide>

        <SwiperSlide className='carousel-slide'>
            <img src={jetx3} alt="slider" />
            <p>
                There is no better feeling than waking up on Saturday morning, and you know that there are plenty of games to watch and bet on. What if we say that we can make it even better?
                </p>
                <div>
                  <Button color='primary' sx={{border:'1.5px solid #AD0F0A', borderRadius:'7px', fontSize: '13px'}} variant='outlined'>More Details</Button>
                  <Link underline='none' href='#'>Terms & Conditions</Link>
                </div>
        </SwiperSlide>

        <SwiperSlide className='carousel-slide'>
            <img src={cashback} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </ThemeProvider>
  );
}

export {MoreInfoCarousel}