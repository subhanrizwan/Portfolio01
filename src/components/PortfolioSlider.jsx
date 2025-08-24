import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import PortfolioCard from './PortfolioCard';

import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";

export default function PortfolioSlider() {
  const portfolioData = [
    {
      id: 1,
      title: 'Project 1',
      image: proj1,
      demo: "https://demo1.com",
      git: "https://github.com/demo1",
    },
    {
      id: 2,
      title: 'Project 2',
      image: proj2,
      demo: "https://demo2.com",
      git: "https://github.com/demo2",
    },
    {
      id: 3,
      title: 'Project 3',
      image: proj3,
      demo: "https://demo3.com",
      git: "https://github.com/demo3",
    },
    {
      id: 4,
      title: 'Project 4',
      image: proj4,
      demo: "https://demo4.com",
      git: "https://github.com/demo4",
    },
    {
      id: 5,
      title: 'Project 5',
      image: proj5,
      demo: "https://demo5.com",
      git: "https://github.com/demo5",
    },
    {
      id: 6,
      
      image: proj6,
      demo: "https://demo6.com",
      git: "https://github.com/demo6",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}  // ek bar me 3 slides show hongi
      spaceBetween={30}
      navigation={true}
       breakpoints={{
    // jab screen width 1024px ya usse zyada ho
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // tablet size (768px se upar aur 1023px tak)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // mobile size (0px se 767px tak)
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }}
      // pagination={{ clickable: true }}
    >
      {portfolioData.map((item) => (
        <SwiperSlide key={item.id}>
          <PortfolioCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
