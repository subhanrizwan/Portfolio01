"use client";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";
import { IconButton,Tooltip} from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa";

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
      demo: "https://carlyti.com/",
      git: "https://wonfoods.com/"
    },
    {
      id: 3,
      image: proj3,
      demo: "https://app.netlify.com/projects/subhan-ecommerce-landing/overview",
            git: "https://wonfoods.com/"
    },
    {
      id: 4,
      image: proj4,
      demo: "https://subhan-task.netlify.app/",
      git: "https://wonfoods.com/"
    },
    {
      id: 5,
      image: proj5,
      demo: "https://wonfoods.com/",
      git: "https://wonfoods.com/"
    },
    {
      id: 6,
      image: proj6,
      demo: "https://subhanahmed.netlify.app/",
      git: "https://wonfoods.com/"
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
              className="group relative overflow-hidden rounded-lg h-64 shadow-[0_2px_40px_rgba(250,204,21,0.1)] transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  style={{ transition: "transform 6s linear" }}
                  src={item.image || "/placeholder.svg"}
                  alt={`Portfolio item ${item.id}`}
                  className="w-full h-auto absolute top-0 left-0 group-hover:-translate-y-[calc(100%-16rem)] transition-transform"
                />
              </div>
              {/**/}
              {/* <div className="absolute bottom-0 left-28 opacity-1 right-0 p-4 text-sm space-x-3 ">
               
              </div> */}
              <div className="absolute flex justify-between bottom-0 opacity-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 transform-transition duration-[1s] ">
                <h2 className="text-md font-semibold text-white">
                  Project Title
                </h2>
                <div className="space-x-3">
                   <Tooltip key={item.id} title="Source Code">
                <IconButton onClick={()=> window.open(item.git)} className="!bg-yellow-300 !text-black">
                  <FaCode fontSize={'medium'} />  
                </IconButton>
                </Tooltip>
                <Tooltip key={item.id} title="View Demo">
                <IconButton onClick={()=> window.open(item.demo)} className="!bg-yellow-300 !text-black">
                  <IoMdEye fontSize={'medium'} />  
                </IconButton>
                </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
