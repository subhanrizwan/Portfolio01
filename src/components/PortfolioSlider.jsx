import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import PortfolioCard from './PortfolioCard';
export default function Slider() {
  // Yaha cards aap dynamic bana sakte ho (API ya manually add karke)
  const [slides, setSlides] = useState([
    <PortfolioCard title="Card 1" />,
    <PortfolioCard title="Card 2" />,
    <PortfolioCard title="Card 3" />,
    <PortfolioCard title="Card 4" />,
    <PortfolioCard title="Card 5" />,
  ]);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}  // ek bar me 3 slides show hongi
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
