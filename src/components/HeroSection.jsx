"use client"
import { Phone, Email, LocationOn } from "@mui/icons-material"
import Image from '../assets/images/Subhan.png';
const Details = {
   welcome:'Hellow Everyone',
   name:'I am Subhan Ahmed', 
   ima:'I am a ',
   position:'Web Developer',
    phone:'+92 334 3760625',
    email:'developersubhanahmed@gmail.com',
    address :'Karachi, Pakistan',  
    description:'I am a dedicated Front-End Web Developer with over 1 year of experience specializing in React.js and Tailwind CSS to build modern, responsive, and high-performance websites. My focus is on creating clean, user-friendly interfaces with smooth interactions and optimized code. Alongside my frontend expertise, I also work as a freelancer on WordPress and Shopify, delivering custom websites, e-commerce stores, and tailored solutions to meet client needs. With a blend of creativity and technical skills, I strive to bring ideas to life and provide digital experiences that stand out.',
}
export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex px-6 md:px-12 md:py-32 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lime-400 text-lg">👋</span>
              <span className="text-gray-300">{Details.welcome}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{Details.name}</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {Details.ima} <span className="text-lime-400">{Details.position}</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">{Details.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Email className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">{Details.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOn className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">{Details.address}</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Hi</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">I'm</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">DM</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Call</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
             {Details.description}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex items-start justify-center ">
            <div className="relative -top-6 ">
              
              <img
                src={Image}
                alt="Subhan Ahmed"
                className="w-[450px] h-[500px] object-cover rounded-lg"
                 style={{
    filter: 'drop-shadow(0 0 80px rgba(255, 223, 0, 0.8))'
  }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
