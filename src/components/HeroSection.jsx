"use client";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import Image from "../assets/images/Subhan.png";
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
};
export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex px-6 md:px-12 md:py-20 lg:px-24 lg:py-24"
    >

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-300 text-md">👋</span>
              <span className="text-gray-300">{Details.welcome}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {Details.name}
            </h1>
            <h2 className="text-3xl md:text-3xl font-bold mb-8">
              {Details.ima}{" "}
              <span className="text-yellow-300">{Details.position}</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-300 w-5 h-5" />
                <span className="text-gray-300">{Details.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Email className="text-yellow-300 w-5 h-5" />
                <span className="text-gray-300">{Details.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOn className="text-yellow-300 w-5 h-5" />
                <span className="text-gray-300">{Details.address}</span>
              </div>
            </div>

            {/* <div className="flex gap-4 mb-8">
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Hi</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">I'm</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">DM</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Call</span>
            </div> */}

            <p className="text-gray-400 leading-relaxed">
              {Details.description}
            </p>
          </div>
        
          {/* Right Image - Cyberpunk Style */}
          <div className="relative order-1 lg:order-2 lg:py-16 py-32 md:py-0 flex items-start justify-center">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glitch effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-emerald-400/20 rounded-lg transform rotate-3 animate-pulse"></div>
              <div
                className="absolute inset-0 bg-gradient-to-l from-yellow-300/10 to-emerald-400/10 rounded-lg transform -rotate-3 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-yellow-300/50 shadow-2xl shadow-yellow-300/20">
                <img
                  src={Image}
                  alt="Subhan Ahmed"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-300/10 to-transparent h-8 animate-pulse"></div>
              </div>

              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-300"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-300"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-300"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-300"></div>

              {/* Status indicators */}
              <div className="absolute -top-8 left-0 flex gap-2">
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 