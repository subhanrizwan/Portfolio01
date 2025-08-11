"use client"

import Navigation from "./components/Navigation.jsx"
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import PortfolioSection from "./components/PortfolioSection.jsx"
import TestimonialsSection from "./components/TestimonialsSection.jsx"
import ResumeSection from "./components/ResumeSection.jsx"
import ContactSection from "./components/ContactSection.jsx"

function App() {
  return (
      <div className="bg-black text-white min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
      {/* <h1>Subhan</h1> */}
    </div>
  )
}

export default App