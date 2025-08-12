import { Link } from "@mui/material";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { LuMails } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { IconButton } from "@mui/material";

function Socialicons() {
  return (
    <div className="social-icons flex space-x-6">
      <IconButton className="group !bg-yellow-300 hover:!bg-yellow-300/80">
        <Link>
          <IoLogoGithub className="text-[1.2rem] text-black  group-hover:text-secondary" />
        </Link>
      </IconButton>
      <IconButton className="group !bg-yellow-300 hover:!bg-yellow-300/80">
        <Link>
          <IoLogoLinkedin className="text-[1.2rem] text-black group-hover:text-secondary" />
        </Link>
      </IconButton>
     
      <IconButton className="group !bg-yellow-300 hover:!bg-yellow-300/80">
        <Link>
          <LuMails className="text-[1.2rem] text-black  " />
        </Link>
      </IconButton>
    </div>
  );
}

export default Socialicons;
