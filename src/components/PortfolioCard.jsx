import { IconButton, Tooltip } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function PortfolioCard({ item }) {
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg h-64 shadow-[0_5px_20px_rgba(250,204,21,0.2)] transition-shadow duration-300 cursor-pointer">
        <div className="relative">
          <img
            style={{ transition: "transform 6s linear" }}
            src={item.image || "/placeholder.svg"}
            alt={`Portfolio item ${item.id}`}
            className="w-full h-auto top-0 left-0 group-hover:-translate-y-[calc(100%-16rem)] transition-transform"
          />
        </div>
        {/**/}
        <div className="absolute flex justify-between bottom-0 opacity-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 transform-transition duration-[1s] ">
          <h2 className="text-lg font-semibold text-white">{item.title}</h2>
          <div key={item.id} className="space-x-3">
            <Tooltip title="Source Code">
              <IconButton
                onClick={() => window.open(item.git)}
                className="!bg-yellow-300 !text-black"
              >
                <FaCode fontSize={"medium"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Demo">
              <IconButton
                onClick={() => window.open(item.demo)}
                className="!bg-yellow-300 !text-black"
              >
                <IoMdEye fontSize={"medium"} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
