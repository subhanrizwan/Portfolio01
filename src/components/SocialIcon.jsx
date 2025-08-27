import { Link } from "@mui/material";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { LuMails } from "react-icons/lu";
import { IconButton } from "@mui/material";

// Customize your social media links
const SocialIconDetails = [
  {
    icon: <IoLogoGithub className="text-[1.2rem] text-black group-hover:text-secondary" />,
    link: "https://github.com",
  },
  {
    icon: <IoLogoLinkedin className="text-[1.2rem] text-black group-hover:text-secondary" />,
    link: "https://www.linkedin.com",
  },
  {
    icon: <LuMails className="text-[1.2rem] text-black group-hover:text-secondary" />,
    link: "mailto:example@gmail.com",
  },
];

function Socialicons() {
  return (
    <div className="social-icons flex space-x-6">
      {SocialIconDetails.map((item, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(item.link)}
          target="_blank"
          className="group !bg-yellow-300 hover:!bg-yellow-300/80"
        >
          <Link>{item.icon}</Link>
        </IconButton>
      ))}
    </div>
  );
}

export default Socialicons;


