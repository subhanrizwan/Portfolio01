import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Services from "./components/Services.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import PortfolioSection from "./components/PortfolioSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation />
      <HeroSection />
      <Services />
      <SkillsSection />
      <PortfolioSection />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

export default App;
