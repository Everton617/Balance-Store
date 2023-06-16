import '../styles/carousel.sass'
import photo1 from '../img/img1.jpg'
import photo2 from '../img/img2.jpg'
import photo3 from '../img/img3.jpg'

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='container-fluid content-carousel '>
        <img className='img-fluid '  src={photo1} alt="" />
        <div className='slide-header container-fluid col-12'>
            <div className='row'>
                <div className="col-12">
                    <h1>New Collection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero consequatur qui dolores nihil doloremque! Earum voluptatem quod nesciunt facilis, a optio enim quidem aperiam.</p>
                    <div  className='link' ><a href="" className='target'>BUY THEME</a></div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='container-fluid'>
        <img className='img-fluid' src={photo2} alt="" />
        <div className='slide-header container-fluid col-12'>
            <div className='row'>
                <div className="col-12">
                    <h1>New Collection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero consequatur qui dolores nihil doloremque! Earum voluptatem quod nesciunt facilis, a optio enim quidem aperiam.</p>
                    <div  className='link' ><a href="" className='target'>SHOP NOW</a></div>
                </div>
            </div>
        </div>
        </SwiperSlide>
      <SwiperSlide className='container-fluid'>
        <img className='img-fluid' src={photo3} alt="" />
        <div className='slide-header container-fluid col-12'>
            <div className='row'>
                <div className="col-12 ">
                    <h1>New Collection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero consequatur qui dolores nihil doloremque! Earum voluptatem quod nesciunt facilis, a optio enim quidem aperiam.</p>
                    <div  className='link' ><a href="" className='target'>BUY THEME</a></div>
                </div>
            </div>
        </div>
        </SwiperSlide>
    </Swiper>
  );
};