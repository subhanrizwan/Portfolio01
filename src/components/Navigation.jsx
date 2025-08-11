"use client"

import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex flex-col space-y-6 text-right">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-400 hover:text-lime-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center">
          <div className="text-center space-y-8">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block text-2xl text-white hover:text-lime-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
