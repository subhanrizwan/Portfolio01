"use client"
import { Phone, Email, LocationOn } from "@mui/icons-material"
import Image from "../assets/images/Subhan.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import Rectangle from "./Rectangle";
const Details = {
  welcome: "console.log('Hello Everyone!')",
  name: "I am Subhan Ahmed",
  ima: "Creative ",
  position: "Web Developer",
  phone: "+92 334 3760625",
  email: "developersubhanahmed@gmail.com",
  address: "Karachi, Pakistan",
  description:
    "I am a Front-End Web Developer with 1+ year of experience in React.js and Tailwind CSS, creating modern, responsive, and high-performance websites. I also freelance on WordPress and Shopify, building custom websites and e-commerce stores. With creativity and technical skills, I deliver clean, user-friendly, and impactful digital experiences",
}

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-black via-yellow-500/10 to-black relative overflow-hidden">
      {/* Decorative elements - Updated to yellow theme */}
      <div
        className="absolute top-10 left-4 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-yellow-400/30 rounded-full opacity-60 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-16 h-16 md:w-24 md:h-24 bg-yellow-300/40 rounded-full opacity-60 animate-bounce delay-1000"
        style={{ animationDuration: "3s" }}
      ></div>
      <div className="absolute top-1/2 left-2 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-yellow-500/20 rounded-full opacity-50 animate-bounce"
      style={{animationDuration:'4s'}}></div>
      <div className="absolute top-1/4 right-2 md:right-16 w-8 h-8 md:w-16 md:h-16 bg-yellow-400/25 rounded-full opacity-40 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Improved responsive spacing */}
          <div className="order-2 lg:order-1 text-start lg:text-left lg:ml-20 px-4">
            <div className="flex items-center justify-start lg:justify-start gap-2 mb-4">
              {/* <span className="text-yellow-300 text-md">👋</span>{" "} */}
              <Rectangle />
              <span className="text-gray-300 text-sm md:text-base">{Details.welcome}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{Details.name}</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">
              {Details.ima} <span className="text-yellow-300">{Details.position}</span>
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center  lg:justify-start gap-3">
                <IoLogoWhatsapp className="text-yellow-300 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-gray-300 text-sm md:text-base">{Details.phone}</span>
              </div>
              <div className="flex items-center  lg:justify-start gap-3">
                <Email className="text-yellow-300 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-gray-300 text-sm md:text-base break-all">{Details.email}</span>
              </div>
              <div className="flex items-center lg:justify-start gap-3">
                <LocationOn className="text-yellow-300 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-gray-300 text-sm md:text-base">{Details.address}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg mx-auto lg:mx-0">
              {Details.description}
            </p>
          </div>

          {/* Right Image - Improved responsive design */}
          <div className="relative order-1 lg:order-2 py-20">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Artistic frame - Updated to yellow theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/80 to-yellow-500/60 rounded-3xl transform -rotate-3"></div>

              {/* Main image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black/20 p-3 md:p-4">
                <img
                  src={Image}
                  alt="Subhan Ahmed"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg ">
                <span className="text-lg md:text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-full p-2 md:p-4 shadow-lg ">
                <span className="text-lg md:text-2xl">👨🏻‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
