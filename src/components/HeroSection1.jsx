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
    <section className="min-h-screen bg-gradient-to-b from-black via-yellow-500/10 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full opacity-60 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-bounce delay-1000"
        style={{ animationDuration: "3s" }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
           <div className="order-2 lg:order-1 lg:ml-20">
                      <div className="flex items-center gap-2 mb-4 ">
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

                      <p className="text-gray-400 leading-relaxed">
                        {Details.description}
                      </p>
                    </div>

          {/* Right Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-96 h-96 mx-auto">
              {/* Artistic frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-cyan-200 rounded-3xl transform -rotate-3"></div>

              {/* Main image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black/ p-4">
                <img
                  src={Image}
                  alt="Subhan Ahmed"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
