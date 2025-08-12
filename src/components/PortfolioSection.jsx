"use client";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";

import Heading from "./Heading";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      image: proj1,
    },
    {
      id: 2,
      image: proj2,
      link: "https://carlyti.com/",
    },
    {
      id: 3,
      image: proj3,
      link: "https://app.netlify.com/projects/subhan-ecommerce-landing/overview",
    },
    {
      id: 4,
      image: proj4,
      link: "https://subhan-task.netlify.app/",
    },
    {
      id: 5,
      image: proj5,
      link: "https://wonfoods.com/",
    },
    {
      id: 6,
      image: proj6,
      link: "https://subhanahmed.netlify.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-yellow-500/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <Heading Portfolio={"Code Meets Creativity"} />
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gr">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => window.open(item.link)}
              className="group relative overflow-hidden rounded-lg h-64 shadow-[0_2px_40px_rgba(250,204,21,0.1)] transition-shadow duration-300 cursor-pointer"
            >
              <img
                style={{ transition: "transform 6s linear" }}
                src={item.image || "/placeholder.svg"}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-auto absolute top-0 left-0 group-hover:-translate-y-[calc(100%-16rem)] transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
