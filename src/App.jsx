"use client"
import Navigation from "./components/Navigation.jsx"
import HeroSection from "./components/HeroSection.jsx"
import HeroSection1 from "./components/HeroSection1.jsx"
import AboutSection from "./components/AboutSection.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import PortfolioSection from "./components/PortfolioSection.jsx"
import EducationSection from "./components/EducationSection.jsx"
import ResumeSection from "./components/ResumeSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import Slider from "./components/PortfolioSlider.jsx"
function App() {
  return (
      <div className="bg-black text-white min-h-screen">
      <Navigation />
      {/* <HeroSection /> */}
      <HeroSection1 />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <Slider />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}

export default App