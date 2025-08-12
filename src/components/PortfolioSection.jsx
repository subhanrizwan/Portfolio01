"use client"

import { useState } from "react"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Works")

  const portfolioItems = [
    { id: 1, image: "../assets/images/Subhan.png", category: "Photography" },
    { id: 2, image: "../assets/images/Subhan.png", category: "Branding" },
    { id: 3, image: "../assets/images/Subhan.png", category: "Other" },
    { id: 4, image: "../assets/images/Subhan.png", category: "Other" },
    { id: 5, image: "../assets/images/Subhan.png", category: "Other" },
    { id: 6, image: "/images/portfolio-6.png", category: "Other" },
    { id: 7, image: "/images/portfolio-7.png", category: "Other" },
    { id: 8, image: "/images/portfolio-8.png", category: "Branding" },
    { id: 9, image: "/images/portfolio-9.png", category: "Photography" },
  ]

  const filteredPortfolio =
    activeFilter === "All Works" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <div className="w-16 h-1 bg-yellow-300 mb-12"></div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["All Works", "Photography", "Branding", "Other"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded transition-colors ${
                activeFilter === filter ? "text-yellow-300 border-b-2 border-yellow-300" : "text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-yellow-300 text-black px-4 py-2 rounded-full font-medium">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
