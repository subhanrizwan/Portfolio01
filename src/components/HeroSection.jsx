"use client"

import { Phone, Email, LocationOn } from "@mui/icons-material"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 md:py-24 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lime-400 text-lg">👋</span>
              <span className="text-gray-300">Hello Everyone</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm David Fincher</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              I am a <span className="text-lime-400">manager.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">+1 917-555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Email className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">example@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationOn className="text-lime-400 w-5 h-5" />
                <span className="text-gray-300">New York, United States</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Hi</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">I'm</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">DM</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Call</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm a Creative Developer for interactive projects that usually are apps, VR and Creative websites. I spend
              most of time coding outstanding projects or studying new technologies. To improve my development stack, I
              develop compelling designs that spring to life using translation and animations that are my clients, using
              the most sophisticated technologies available today for fully interactive and responsive web and apps.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* <img
                src="/professional-man-glasses-beard.png"
                alt="David Fincher"
                className="w-80 h-96 object-cover rounded-lg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
