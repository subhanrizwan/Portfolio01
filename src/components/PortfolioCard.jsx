"use client";
import proj1 from "../assets/images/proj1.png";
import proj2 from "../assets/images/proj2.png";
import proj3 from "../assets/images/proj3.png";
import proj4 from "../assets/images/proj4.png";
import proj5 from "../assets/images/proj5.png";
import proj6 from "../assets/images/proj6.png";
import { IconButton, Tooltip } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function PortfolioCard() {
    const portfolioItems = [
        {
          id: 1,
          image: proj1,
          demo: "",
          git: "",
        },
        // {
        //   id: 2,
        //   image: proj2,
        //   demo: "",
        //   git: "",
        // },
        // {
        //   id: 3,
        //   image: proj3,
        //   demo: "",
        //   git: "",
        // },
        // {
        //   id: 4,
        //   image: proj4,
        //   demo: "",
        //   git: "",
        // },
        // {
        //   id: 5,
        //   image: proj5,
        //   demo: "",
        //   git: "",
        // },
        // {
        //   id: 6,
        //   image: proj6,
        //   demo: "",
        //   git: "",
        // },
      ];
  return (
    <>
          {portfolioItems.map((item) => (
            <div className="group relative overflow-hidden rounded-lg h-64 shadow-[0_2px_40px_rgba(250,204,21,0.1)] transition-shadow duration-300 cursor-pointer">
              <div className="relative">
                <img
                  style={{ transition: "transform 6s linear" }}
                  src={item.image || "/placeholder.svg"}
                  alt={`Portfolio item ${item.id}`}
                  className="w-full h-auto absolute top-0 left-0 group-hover:-translate-y-[calc(100%-16rem)] transition-transform"
                />
              </div>
              {/**/}
              <div className="absolute flex justify-between bottom-0 opacity-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 transform-transition duration-[1s] ">
                <h2 className="text-md font-semibold text-white">
                  Project Title
                </h2>
                <div className="space-x-3">
                  <Tooltip key={item.id} title="Source Code">
                    <IconButton
                      // onClick={() => window.open(item.git)}
                      className="!bg-yellow-300 !text-black"
                    >
                      <FaCode fontSize={"medium"} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip key={item.id} title="View Demo">
                    <IconButton
                      // onClick={() => window.open(item.demo)}
                      className="!bg-yellow-300 !text-black"
                    >
                      <IoMdEye fontSize={"medium"} />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        {/* </div> */}
    </>
  )
}

export default PortfolioCard