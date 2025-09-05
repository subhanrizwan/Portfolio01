import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import proj3 from "../assets/images/proj3.png";
import PortfolioCard from "./PortfolioCard";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

export default function PortfolioSlider() {
  // Customize your portfolio projects
  const portfolioData = [
    {
      id: 1,
      title: "Project 1",
      image: proj3,
      demo: "https://demo1.com",
      git: "https://github.com/demo1",
      githubIcon: <FaCode fontSize={"medium"} />,
      demoIcon: <IoMdEye fontSize={"medium"} />,
    },
    {
      id: 2,
      title: "Project 2",
      image: proj3,
      demo: "https://demo2.com",
      git: "https://github.com/demo2",
      githubIcon: <FaCode fontSize={"medium"} />,
      demoIcon: <IoMdEye fontSize={"medium"} />,
    },
    {
      id: 3,
      title: "Project 3",
      image: proj3,
      demo: "https://demo3.com",
      git: "https://github.com/demo3",
      githubIcon: <FaCode fontSize={"medium"} />,
      demoIcon: <IoMdEye fontSize={"medium"} />,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3} // ek bar me 3 slides show hongi
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
    >
      {portfolioData.map((item) => (
        <SwiperSlide key={item.id}>
          <PortfolioCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
