import { Link } from "@mui/material";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { LuMails } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { IconButton } from "@mui/material";

function Socialicons() {
  const Navigate = () => {};
  return (
    <div className="social-icons flex space-x-6">
      <IconButton
        onClick={()=> window.open("https://github.com/subhanrizwan")}
        target="_blank"
        className="group !bg-yellow-300 hover:!bg-yellow-300/80"
      >
        <Link>
          <IoLogoGithub className="text-[1.2rem] text-black  group-hover:text-secondary" />
        </Link>
      </IconButton>
      <IconButton
        onClick={()=> window.open("https://www.linkedin.com/in/subhanahmed1/")}
        target="_blank"
        className="group !bg-yellow-300 hover:!bg-yellow-300/80"
      >
        <Link>
          <IoLogoLinkedin className="text-[1.2rem] text-black group-hover:text-secondary" />
        </Link>
      </IconButton>

      <IconButton
        target="_blank"
        onClick={() => window.open("mailto:developersubhanahmed@gmail.com")}
        className="group !bg-yellow-300 hover:!bg-yellow-300/80"
      >
        <Link>
          <LuMails className="text-[1.2rem] text-black  " />
        </Link>
      </IconButton>
    </div>
  );
}

export default Socialicons;
