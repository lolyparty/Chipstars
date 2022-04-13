import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {theme} from './muiTheme'
import carouselSlider from '../components/Imgs/sliderImage.svg'
import mobileBg from './Imgs/mobileHerobg.svg'

const Slider = ()=> {
  const matches510 = useMediaQuery('(max-width:510px)')
  return (
    <>
      <ThemeProvider theme={theme}>
              {matches510 ? <Box sx={{backgroundImage:`url(${mobileBg})`, backgroundRepeat:'no-repeat', backgroundSize:'100%', width:'100%', height:'370px'}}>
              <Button  variant='contained' color='secondary' sx={{top:'70%', left:'10%'}}>Get Started</Button>
            </Box> : 
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
          </Swiper>}
      </ThemeProvider>
    </>
  );
}

export {Slider}