"use client";
import Heading from "./Heading";
import PortfolioCard from "./PortfolioCard";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";
import PortfolioSlider from "./PortfolioSlider";
export default function PortfolioSection() {
  // ✅ Portfolio data array
  const portfolioData = [
    {
      id: 1,
      title: 'Project 1',
      image: proj1,
      demo: "https://demo1.com",
      git: "https://github.com/demo1",
    },
    {
      id: 2,
      title: 'Project 2',
      image: proj2,
      demo: "https://demo2.com",
      git: "https://github.com/demo2",
    },
    {
      id: 3,
      title: 'Project 3',
      image: proj3,
      demo: "https://demo3.com",
      git: "https://github.com/demo3",
    },
    {
      id: 4,
      title: 'Project 4',
      image: proj4,
      demo: "https://demo4.com",
      git: "https://github.com/demo4",
    },
    {
      id: 5,
      title: 'Project 5',
      image: proj5,
      demo: "https://demo5.com",
      git: "https://github.com/demo5",
    },
    {
      id: 6,
      
      image: proj6,
      demo: "https://demo6.com",
      git: "https://github.com/demo6",
    },
  ];
  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Heading Portfolio={"Code Meets Creativity"} />
        {/* For Desktop and Tablet */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gr">
            {portfolioData.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* For Mobile */}
        <div className="block md:hidden">
          <PortfolioSlider />
        </div>
      </div>
    </section>
  );
}
